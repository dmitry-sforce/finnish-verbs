# Content guide

Use this document when adding or editing Finnish learning content. It supplements the short operational rules in `AGENTS.md`.

## Canonical data

`data/verbs.json` is the source of truth. Each object represents one verb and must use this shape:

```json
{
  "fi": "mennä",
  "en": "to go",
  "verbtype": 3,
  "verbrule": "type 3 · …",
  "conj": [
    { "pro": "minä", "pres": "menen", "past": "menin", "spok": "mä meen" }
  ],
  "expressions": [
    ["Menen töihin joka päivä.", "I go to work every day."]
  ],
  "story_fi": "…",
  "story_en": "…"
}
```

### Required fields and rules

- `fi`: Finnish infinitive; it must be unique.
- `en`: concise English meaning.
- `verbtype`: integer from 1 to 6.
- `verbrule`: short learner-friendly explanation of the verb-type pattern or an irregularity.
- `conj`: exactly six rows, always in this order: `minä`, `sinä`, `hän`, `me`, `te`, `he`. Every row needs `pro`, `pres`, `past`, and `spok`.
- `expressions`: exactly five `[Finnish, English]` pairs.
- `story_fi` and `story_en`: matching short stories, normally two to four sentences.

## Content standards

- Aim at an A1 learner progressing toward A2: use clear, common language and short sentences.
- Include the target verb repeatedly and naturally in the expressions and Finnish story.
- Keep English translations natural while retaining a useful Finnish-learning meaning where practical.
- Label the standard written forms in `pres` and `past`; place conversational Finnish in `spok`.
- Verify the verb type and the `minä` form against [Uusi kielemme’s First 100 Finnish Verbs](https://uusikielemme.fi/finnish-vocabulary/vocabulary-lists/your-first-100-finnish-verbs-finnish-for-beginners).
- Verify all other formal forms against a reliable conjugation reference when they are not explicitly shown on that source.

## Known exception

### pitää

`pitää` has the meanings “to like”, “must”, and “to hold”. Its spoken forms vary by meaning. The visual reference currently adds an explanatory note through a deliberate special case in `src/template.html`; preserve it unless the data model is extended to support per-verb notes.

## Current catalog

`data/verbs.json` remains the canonical source of completed content. Keep the table below synchronized with its array order whenever a verb is added, removed, or reordered. It currently contains 21 verbs:

| # | Finnish | English | VT |
| - | ------- | ------- | -- |
| 1 | olla | to be | 3 |
| 2 | mennä | to go | 3 |
| 3 | tulla | to come | 3 |
| 4 | tehdä | to do / to make | 2 |
| 5 | saada | to get / to receive | 2 |
| 6 | antaa | to give | 1 |
| 7 | ottaa | to take | 1 |
| 8 | haluta | to want | 4 |
| 9 | voida | to be able to / can | 2 |
| 10 | lähteä | to leave / to go away | 1 |
| 11 | tietää | to know (a fact) | 1 |
| 12 | sanoa | to say / to tell | 1 |
| 13 | nähdä | to see | 2 |
| 14 | kysyä | to ask | 1 |
| 15 | ajatella | to think | 3 |
| 16 | tarvita | to need | 5 |
| 17 | löytää | to find | 1 |
| 18 | odottaa | to wait / to expect | 1 |
| 19 | käydä | to visit / to go briefly | 2 |
| 20 | pitää | to like / must / to hold | 3 |

## Planned next batch

These are the next proposed verbs. Verify their verb type and forms before adding them. When adding a planned verb, move it to the current catalog and update its number here.Uusi

| # | Finnish | English | Expected VT |
| - | ------- | ------- | ----------- |
| 21 | nukkua | to sleep | 1 |
| 22 | syödä | to eat | 2 |
| 23 | juoda | to drink | 2 |
| 24 | puhua | to speak | 1 |
| 25 | kertoa | to tell / to narrate | 1 |
| 26 | oppia | to learn | 1 |
| 27 | ostaa | to buy | 1 |
| 28 | kirjoittaa | to write | 1 |
| 29 | lukea | to read | 1 |
| 30 | auttaa | to help | 1 |

## Content-change checklist

1. Read this guide and add or edit only `data/verbs.json`.
2. Update the current catalog and planned backlog in this file to reflect the change.
3. Verify grammar and source data.
4. Run `npm run validate`.
5. Run `npm run build`.
6. Review the generated reference and Anki cards.
