#!/usr/bin/env node
/**
 * Check Flesch readability score for blog markdown files.
 * Target: 60-70 (Standard/Fairly easy). Score 29 = Very difficult.
 *
 * French syllable estimation: count vowel groups (aeiouyàâäéèêëïîôùûüœæ).
 * Run: node scripts/check-readability.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, '../src/content/blog');

/** Rough syllable count for French (vowel groups) */
function countSyllables(word) {
  const cleaned = word.toLowerCase().replace(/[^a-zàâäéèêëïîôùûüœæy]/g, '');
  if (cleaned.length === 0) return 1;
  const vowelGroups = cleaned.match(/[aeiouyàâäéèêëïîôùûüœæ]+/g);
  return vowelGroups ? Math.max(1, vowelGroups.length) : 1;
}

/** Extract prose from markdown: strip headers, links, etc. */
function extractProse(text) {
  return text
    .replace(/^#+ .+$/gm, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/^[-*]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
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

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const contentMatch = content.match(/content:\s*\|\s*\n([\s\S]*?)(?=\n\w+:|$)/);
  const raw = contentMatch ? contentMatch[1].trim() : content;
  const prose = extractProse(raw);

  const sentences = prose.split(/[.!?]+/).filter(Boolean).length || 1;
  const words = prose.split(/\s+/).filter(Boolean).length;
  const syllables = prose
    .split(/\s+/)
    .filter(Boolean)
    .reduce((sum, w) => sum + countSyllables(w), 0);

  const score = fleschScore(words, sentences, syllables);
  const label = getReadabilityLabel(score);
  const avgWordsPerSentence = (words / sentences).toFixed(1);

  return { score, label, words, sentences, avgWordsPerSentence };
}

function main() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
  console.log('📖 Readability Check (Flesch)\n');
  console.log('Target: 30+ (Difficult or better). Ideal: 60-70 (Standard/Fairly easy). French scores tend lower.\n');

  const PASS_THRESHOLD = 30;
  let allPass = true;
  for (const file of files.sort()) {
    const filePath = path.join(BLOG_DIR, file);
    const { score, label, words, sentences, avgWordsPerSentence } = checkFile(filePath);
    const ok = score >= PASS_THRESHOLD;
    if (!ok) allPass = false;
    const status = ok ? '✓' : '⚠';
    console.log(`${status} ${file}`);
    console.log(`   Score: ${score} (${label}) | ${words} mots, ${sentences} phrases | ~${avgWordsPerSentence} mots/phrase\n`);
  }

  process.exit(allPass ? 0 : 1);
}

main();
