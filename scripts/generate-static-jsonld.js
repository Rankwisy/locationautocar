#!/usr/bin/env node
/**
 * Generates static JSON-LD for index.html (crawlers without JS).
 * Run: node scripts/generate-static-jsonld.js
 * Outputs JSON-LD string to stdout; can be used to update index.html.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  localBusinessSchema,
  touristTripSchema,
  transportServiceSchema
} from './static-jsonld-schemas.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    localBusinessSchema,
    touristTripSchema,
    transportServiceSchema
  ]
};

const jsonLdString = JSON.stringify(graph, null, 0);

// Write to public for reference / injection
const outPath = path.join(__dirname, '..', 'public', 'jsonld-static.json');
fs.writeFileSync(outPath, jsonLdString, 'utf8');
console.log('Generated', outPath);

// Output script tag content for index.html
const scriptContent = `<script type="application/ld+json">\n${jsonLdString}\n</script>`;
const scriptPath = path.join(__dirname, '..', 'public', 'jsonld-inline.html');
fs.writeFileSync(scriptPath, scriptContent, 'utf8');
console.log('Generated', scriptPath);
