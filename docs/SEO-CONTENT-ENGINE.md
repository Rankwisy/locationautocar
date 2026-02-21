# SEO Content Engine – Google 2026

Framework aligné sur les systèmes de classement 2026 (recherche IA, indexation par entités, E-E-A-T, extraction pour réponses génératives).

---

## Mission

Produire du contenu qui se positionne grâce à :
- **Relevance** – pertinence par rapport à l’intention
- **Reliability** – expertise et fiabilité démontrées
- **Real Value** – valeur unique et concrète
- **Conversion** – optimisation de la conversion
- **Hyperlocal Authority** – autorité topique et géographique

---

## 1️⃣ Search Intent First

- Identifier l’intention : informationnelle, commerciale, transactionnelle, locale.
- Donner une **réponse directe dans les 100–150 premiers mots**.
- Structurer autour de questions et sous-questions claires.

---

## 2️⃣ Structure pour IA et humains

- Titres sémantiques H2/H3 alignés sur des requêtes réelles.
- Résumés en puces, blocs de réponse, sections FAQ.
- Contenu facilement extractable pour les AI Overviews et featured snippets.
- Pas de phrases génériques ou de remplissage.

---

## 3️⃣ Valeur réelle plutôt que volume

- Pas de paragraphes de remplissage.
- Chaque section apporte : insight unique, étapes actionnables, exemples concrets, données ou raisonnement basé sur l’expérience.
- Ne pas reformuler les concurrents ; synthétiser et améliorer.

---

## 4️⃣ E-E-A-T et signaux de confiance

- Montrer l’expérience et l’autorité.
- Inclure des signaux de preuve : exemples pratiques, cas concrets, terminologie du secteur.
- Ton assuré mais factuel.

---

## 5️⃣ Semantic SEO & NLP (obligatoire)

### Semantic Keywords Expansion
- Variations de mots-clés
- Longue traîne
- Requêtes en forme de questions
- Synonymes et expressions contextuelles

### Entités et termes de contexte
- Entités (marques, lieux, services)
- Termes de co-occurrence
- Vocabulaire du secteur
- Optimiser pour l’indexation par entités (pas le bourrage de mots-clés).

**Sources projet** : `seoData.ts` → `semanticKeywords`, `nlpTerms`, `internalLinkAnchors`.

---

## 6️⃣ Hyperlocal SEO – Bruxelles

Quand le sujet est local (Bruxelles / Belgique) :

### Zones à intégrer
- Bruxelles-Ville
- Ixelles
- Uccle
- Schaerbeek
- Etterbeek
- Woluwe-Saint-Lambert
- Woluwe-Saint-Pierre
- Anderlecht
- Zaventem
- Quartier Européen
- Avenue Louise
- Gare du Midi

- Mentionner les points d’intérêt proches quand pertinent.
- Utiliser une formulation naturelle et locale.
- Optimiser pour les recherches « près de moi » et l’intention géographique.

**Source projet** : `seoData.ts` → `bruxellesHyperlocal`.

---

## 7️⃣ Conversion

### Formulations persuasives
- Langage orienté bénéfices
- Réduction du risque
- Positionnement d’autorité
- Social proof

### CTA
- Prochaine étape claire
- Verbes d’action
- Urgence si approprié

### Renforcement de la confiance
- Signaux de fiabilité
- Ton professionnel
- Spécificité plutôt que vague

**Source projet** : `seoData.ts` → `conversionCopy`.

---

## 8️⃣ Internal Linking

### Ancres
- Formulation naturelle
- Alignées avec l’intention
- Variées (pas de répétition exact-match)

### Règles
- Utiliser `InternalLink` et `getInternalLinkAnchor()`
- Ancres provenant de `internalLinkAnchors` dans `seoData.ts`
- Éviter la répétition d’ancres exactes.

---

## 9️⃣ Topical Authority

- Construire des clusters thématiques
- Proposer des sous-thèmes complémentaires
- Couvrir les intentions adjacentes
- Renforcer la reconnaissance des entités

---

## 🔟 Lifecycle du contenu

À la fin, suggérer :
- Pistes d’extension
- Nouvelles opportunités FAQ
- Angles de mise à jour
- Idées de contenu complémentaire

---

## Output minimal requis

Chaque contenu doit inclure :
1. Article optimisé principal
2. Section d’expansion sémantique
3. Liste d’entités / NLP
4. Intégration hyperlocale (si pertinent)
5. Ajustements pour la conversion
6. Structure d’ancres internes proposée
7. Suggestions de cluster topique

**Pas de contenu générique. Pas de thin content. Pas de keyword stuffing.**
