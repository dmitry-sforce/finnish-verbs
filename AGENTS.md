# Agent instructions

## Project

This is a dependency-free static Finnish verb-learning site for GitHub Pages. The root `index.html` and `finnish_verbs_anki.txt` are generated deliverables.

## Editing rules

- Edit learning content in `data/verbs.json`, not in generated files.
- Before adding or changing a verb, read `CONTENT.md` for the schema, content standards, exceptions, source requirements, and roadmap; keep its current catalog and planned backlog synchronized with the change.
- Keep the changes consistent in the `data/verbs.json` and `CONTENT.md` files
- Do not edit `index.html` or `finnish_verbs_anki.txt` manually; regenerate them with the build command `npm run build`.
- Run `npm run validate` after changing verb data.

Do not introduce a framework, package dependency, or build tool unless the project’s needs materially change. Keep the published entry point at the repository root for GitHub Pages.
