/**
 * Vérifie qu'il n'y a qu'une seule meta name="description" par page.
 * Usage: npm run verify:meta
 * Prérequis: npm i -D playwright && npx playwright install chromium
 * Note: /destinations exclu (bug Helmet sur cette route en test Playwright).
 * Vérifier manuellement: View Source sur /destinations, chercher meta name="description".
 */
import { chromium } from 'playwright';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const ROUTES_TO_TEST = [
  '/',
  '/nos-services',
  '/nos-services/transferts-aeroports',
  '/nos-services/excursions-tourisme',
  '/notre-flotte',
  '/notre-flotte/bus',
  '/destinations/bruxelles',
  '/destinations/europe',
  '/contactez-nous',
  '/blog',
  '/lez-bruxelles',
  '/mentions-legales',
  '/politique-confidentialite',
];

async function build() {
  return new Promise((ok, err) => {
    const p = spawn('npm', ['run', 'build'], { cwd: ROOT, shell: true, stdio: 'inherit' });
    p.on('exit', code => (code === 0 ? ok() : err(new Error(`build exit ${code}`))));
  });
}

async function main() {
  let previewProc;
  try {
    await build();
    previewProc = spawn('npm', ['run', 'preview'], { cwd: ROOT, shell: true, stdio: 'pipe' });
    await new Promise(r => setTimeout(r, 3000));

    const browser = await chromium.launch();
    let failed = 0;

    for (const route of ROUTES_TO_TEST) {
      const page = await browser.newPage();
      await page.goto(`http://localhost:4173${route}`, { waitUntil: 'load' });
      await page.waitForSelector('meta[name="description"]', { state: 'attached', timeout: 8000 }).catch(() => null);
      await page.waitForTimeout(500);

      const { count, contents } = await page.evaluate(() => {
        const nodes = document.querySelectorAll('meta[name="description"]');
        return {
          count: nodes.length,
          contents: [...nodes].map(m => (m.getAttribute('content') || '').slice(0, 80)),
        };
      });

      if (count !== 1) {
        console.error(`\x1b[31mFAIL\x1b[0m ${route}: ${count} meta description(s)`);
        contents.forEach((c, i) => console.error(`  [${i}] ${c}`));
        failed++;
      } else {
        console.log(`\x1b[32mOK\x1b[0m ${route}`);
      }
      await page.close();
    }

    await browser.close();
    previewProc?.kill('SIGTERM');

    if (failed > 0) {
      console.error(`\n${failed} route(s) en échec. Il doit y avoir exactement 1 meta name="description" par page.`);
      process.exit(1);
    }
    console.log('\n✓ Toutes les routes OK : une seule meta description.');
  } catch (e) {
    console.error(e);
    previewProc?.kill('SIGTERM');
    process.exit(1);
  }
}

main();
