#!/usr/bin/env node
/**
 * Check Flesch readability score for blog content from blogContentData.
 * Target: 30+ (Difficult or better). Ideal: 60-70 (Standard/Fairly easy).
 * French syllable estimation: count vowel groups (aeiouyàâäéèêëïîôùûüœæ).
 * Run: node scripts/check-readability.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DATA_PATH = path.join(__dirname, '../src/data/blogContentData.ts');

/** Strip HTML tags to get prose text */
function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/** Rough syllable count for French (vowel groups) */
function countSyllables(word) {
  const cleaned = word.toLowerCase().replace(/[^a-zàâäéèêëïîôùûüœæy]/g, '');
  if (cleaned.length === 0) return 1;
  const vowelGroups = cleaned.match(/[aeiouyàâäéèêëïîôùûüœæ]+/g);
  return vowelGroups ? Math.max(1, vowelGroups.length) : 1;
}

/** Compute Flesch Reading Ease (adapted for French) */
function fleschScore(words, sentences, syllables) {
  if (sentences === 0 || words === 0) return 0;
  const wordsPerSentence = words / sentences;
  const syllablesPerWord = syllables / words;
  return Math.round(206.835 - 1.015 * wordsPerSentence - 84.6 * syllablesPerWord);
}

function getReadabilityLabel(score) {
  if (score >= 70) return 'Fairly easy';
  if (score >= 60) return 'Standard';
  if (score >= 50) return 'Fairly difficult';
  if (score >= 30) return 'Difficult';
  return 'Very difficult';
}

/** Extract posts from blogContentData.ts (slug + content) */
function extractPosts(content) {
  const posts = [];
  const slugRe = /slug:\s*["']([^"']+)["']/g;
  const contentRe = /content:\s*`([\s\S]*?)`\s*(?=\}|\])/g;
  const slugs = [...content.matchAll(slugRe)].map((m) => m[1]);
  const contents = [...content.matchAll(contentRe)].map((m) => m[1]);
  for (let i = 0; i < slugs.length && i < contents.length; i++) {
    posts.push({ slug: slugs[i], content: contents[i] });
  }
  return posts;
}

function main() {
  const raw = fs.readFileSync(BLOG_DATA_PATH, 'utf-8');
  const posts = extractPosts(raw);

  if (posts.length === 0) {
    console.log('No blog posts with content found in blogContentData.ts');
    process.exit(1);
  }

  console.log('Readability Check (Flesch) - blogContentData\n');
  console.log('Target: 30+ (Difficult or better). Ideal: 60-70 (Standard/Fairly easy). French scores tend lower.\n');

  const PASS_THRESHOLD = 30;
  let allPass = true;

  for (const post of posts) {
    const prose = stripHtml(post.content);
    const sentences = prose.split(/[.!?]+/).filter(Boolean).length || 1;
    const words = prose.split(/\s+/).filter(Boolean).length;
    const syllables = prose
      .split(/\s+/)
      .filter(Boolean)
      .reduce((sum, w) => sum + countSyllables(w), 0);

    const score = fleschScore(words, sentences, syllables);
    const label = getReadabilityLabel(score);
    const ok = score >= PASS_THRESHOLD;
    if (!ok) allPass = false;
    const avgWordsPerSentence = (words / sentences).toFixed(1);
    const status = ok ? '✓' : '⚠';

    console.log(`${status} ${post.slug}`);
    console.log(`   Score: ${score} (${label}) | ${words} mots, ${sentences} phrases | ~${avgWordsPerSentence} mots/phrase\n`);
  }

  process.exit(allPass ? 0 : 1);
}

main();
