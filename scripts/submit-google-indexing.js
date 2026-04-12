/**
 * Google Indexing API — batch URL submission
 *
 * Usage:
 *   node scripts/submit-google-indexing.js                  # submit all sitemap URLs
 *   node scripts/submit-google-indexing.js /path/to/page    # submit a single URL path
 *
 * Credentials: set GOOGLE_SERVICE_ACCOUNT_JSON env var to the path of your
 * service account JSON file, or place it at the project root as
 * annonceb2b-service-account.json.
 *
 * The service account must be granted "Owner" access in Google Search Console
 * for the property https://www.locationautocar.be/
 */

import { createSign } from 'crypto';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { CANONICAL_BASE, CANONICAL_PATHS } from './canonical-sitemap.config.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Credentials ────────────────────────────────────────────────────────────

function loadCredentials() {
  const envPath = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const candidates = [
    envPath,
    resolve(__dirname, '..', 'annonceb2b-service-account.json'),
    // also accept the original filename if present locally
    resolve(__dirname, '..', 'annonceb2b-000ce3dfc119.json'),
  ].filter(Boolean);

  for (const p of candidates) {
    if (existsSync(p)) {
      return JSON.parse(readFileSync(p, 'utf8'));
    }
  }

  throw new Error(
    'Service account JSON not found. Set GOOGLE_SERVICE_ACCOUNT_JSON env var ' +
    'to the path of your credentials file.'
  );
}

// ── JWT helpers ────────────────────────────────────────────────────────────

function base64url(str) {
  return Buffer.from(str).toString('base64url');
}

function createJwt(credentials) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const payload = base64url(JSON.stringify({
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  }));

  const sign = createSign('RSA-SHA256');
  sign.update(`${header}.${payload}`);
  const signature = sign.sign(credentials.private_key, 'base64url');

  return `${header}.${payload}.${signature}`;
}

async function getAccessToken(credentials) {
  const jwt = createJwt(credentials);
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Failed to get access token: ${res.status} ${body}`);
  }

  const { access_token } = await res.json();
  return access_token;
}

// ── Indexing API ───────────────────────────────────────────────────────────

async function submitUrl(url, token) {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ url, type: 'URL_UPDATED' }),
  });

  const body = await res.json();

  if (!res.ok) {
    return { url, ok: false, error: body.error?.message ?? JSON.stringify(body) };
  }

  return { url, ok: true, notifyTime: body.urlNotificationMetadata?.latestUpdate?.notifyTime };
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main() {
  const credentials = loadCredentials();
  console.log(`Using service account: ${credentials.client_email}\n`);

  const token = await getAccessToken(credentials);

  // Build URL list: CLI arg = single URL path, otherwise full sitemap
  let urls;
  const arg = process.argv[2];
  if (arg) {
    const full = arg.startsWith('http') ? arg : `${CANONICAL_BASE}${arg}`;
    urls = [full];
  } else {
    urls = CANONICAL_PATHS.map(({ path }) =>
      path === '/' ? CANONICAL_BASE : `${CANONICAL_BASE}${path}`
    );
  }

  console.log(`Submitting ${urls.length} URL(s) to Google Indexing API…\n`);

  let ok = 0;
  let fail = 0;

  for (const url of urls) {
    const result = await submitUrl(url, token);
    if (result.ok) {
      console.log(`  ✓ ${url}`);
      ok++;
    } else {
      console.error(`  ✗ ${url}  →  ${result.error}`);
      fail++;
    }
    // Respect rate limits: 200 req/day, no burst needed — small delay
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\nDone. ${ok} submitted, ${fail} failed.`);
  if (fail > 0) process.exit(1);
}

main().catch(err => {
  console.error(err.message);
  process.exit(1);
});
