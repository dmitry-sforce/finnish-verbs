# Finnish Core Verbs

A dependency-free Finnish verb reference for A1 learners working toward A2, with a matching Anki import file.

## Project layout

- `data/verbs.json` — canonical learning content
- `src/template.html` — visual-reference template
- `scripts/` — build and validation scripts
- `index.html` — generated GitHub Pages entry point
- `finnish_verbs_anki.txt` — generated Anki import
- `CONTENT.md` — content-maintenance guide and roadmap

## Published site

GitHub Pages serves the root `index.html`. In the repository settings, select **Pages → Deploy from a branch → main → /(root)**.

## Editing content

`data/verbs.json` is the canonical verb dataset. The build generates both the GitHub Pages site and Anki import from it.

Read [CONTENT.md](CONTENT.md) before editing a verb. It defines the data shape, content standards, special cases, current catalog, and planned verbs. When content changes, update its current catalog and planned backlog too. It also records the required verification sources, including: 
- [Uusi kielemme’s “Your First 100 Finnish Verbs” list](https://uusikielemme.fi/finnish-vocabulary/vocabulary-lists/your-first-100-finnish-verbs-finnish-for-beginners).
- Wiktionary https://en.wiktionary.org/wiki/ , for example for Viedä the link will be https://en.wiktionary.org/wiki/viedä#Finnish

Do not edit the generated `index.html` or `finnish_verbs_anki.txt` directly.

## Commands

```sh
npm run validate  # Check the verb-data contract
npm run build     # Generate index.html and finnish_verbs_anki.txt
npm run preview   # Serve the site at http://localhost:8000
```

The project needs only a current Node.js installation to build; it has no external dependencies.

## Workflow

1. Run `npm run build` after any data, template, or rendering change.
2. Run `npm run validate` after changing verb data.
3. Review the generated `index.html` in a browser when a visual or content change affects it.
4. Commit source files and their regenerated deliverables together.

## Anki import

Import `finnish_verbs_anki.txt` using a semicolon separator and Anki’s Basic note type. The file creates six cards per verb: present tense, past tense, spoken Finnish, negative forms (minä), expressions, and story translation.
