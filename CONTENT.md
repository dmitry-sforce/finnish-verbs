# Content guide

Use this document when adding or editing Finnish learning content. It supplements the short operational rules in `AGENTS.md`.

## Canonical data

`data/verbs.json` is the source of truth. Each object represents one verb and must use this shape:

```json
{
  "fi": "mennä",
  "en": "to go",
  "negative": {
    "present": "en mene",
    "imperfect": "en mennyt",
    "perfect": "en ole mennyt"
  },
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
- `negative`: first-person singular negative examples. It must contain `present`,
  `imperfect`, and `perfect` as complete forms beginning with `en`. These appear
  in the reference as `minä` forms; do not add person-specific negative forms to
  `conj`.
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

`data/verbs.json` remains the canonical source of completed content. Keep the table below synchronized with its array order whenever a verb is added, removed, or reordered. It currently contains 56 verbs:

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
| 21 | nukkua | to sleep | 1 |
| 22 | syödä | to eat | 2 |
| 23 | juoda | to drink | 2 |
| 24 | ymmärtää | to understand | 1 |
| 25 | muistaa | to remember | 1 |
| 26 | unohtaa | to forget | 1 |
| 27 | osata | to know how to / to be able to | 4 |
| 28 | opiskella | to study | 3 |
| 29 | oppia | to learn | 1 |
| 30 | vastata | to answer | 4 |
| 31 | istua | to sit | 1 |
| 32 | seisoa | to stand | 1 |
| 33 | pyytää | to request / to ask for | 1 |
| 34 | kertoa | to tell | 1 |
| 35 | keskustella | to discuss / to chat | 3 |
| 36 | herätä | to wake up | 4 |
| 37 | nousta | to get up / to rise | 3 |
| 38 | maata | to lie | 4 |
| 39 | pestä | to wash | 3 |
| 40 | tiskata | to wash dishes | 4 |
| 41 | siivota | to clean | 4 |
| 42 | imuroida | to vacuum | 2 |
| 43 | uida | to swim | 2 |
| 44 | kävellä | to walk | 3 |
| 45 | pyöräillä | to ride a bike | 3 |
| 46 | ajaa | to drive | 1 |
| 47 | juosta | to run | 3 |
| 48 | pelata | to play sports / games | 4 |
| 49 | leikkiä | to play | 1 |
| 50 | soittaa | to call / to play music | 1 |
| 51 | lainata | to borrow / to lend | 4 |
| 52 | tavata | to meet | 4 |
| 53 | tutustua | to get to know | 1 |
| 54 | katsoa | to watch / to look | 1 |
| 55 | jäädä | to stay / to remain | 2 |
| 56 | saapua | to arrive | 1 |
## Planned next batch

No next batch is scheduled. All entries in the current source backlog are complete. Extend the approved source pool before scheduling another batch.

| # | Finnish | English | Expected VT |
| - | ------- | ------- | ----------- |
| — | — | — | — |

## Verbs backlog

This is the first 50 verbs from [Uusi kielemme’s “Your First 100 Finnish Verbs” list](https://uusikielemme.fi/finnish-vocabulary/vocabulary-lists/your-first-100-finnish-verbs-finnish-for-beginners). Use it as the approved source pool for future batches. “Completed” reflects `data/verbs.json`; “planned” is the next batch; “available” has not yet been scheduled.

| Source # | Finnish | English | VT | Project status |
| -------- | ------- | ------- | -- | -------------- |
| 1 | olla | to be | 3 | completed |
| 2 | istua | to sit | 1 | completed |
| 3 | seisoa | to stand | 1 | completed |
| 4 | syödä | to eat | 2 | completed |
| 5 | juoda | to drink | 2 | completed |
| 6 | odottaa | to wait | 1 | completed |
| 7 | ymmärtää | to understand | 1 | completed |
| 8 | muistaa | to remember | 1 | completed |
| 9 | unohtaa | to forget | 1 | completed |
| 10 | ajatella | to think | 3 | completed |
| 11 | tietää | to know | 1 | completed |
| 12 | osata | to know how to | 4 | completed |
| 13 | opiskella | to study | 3 | completed |
| 14 | oppia | to learn | 1 | completed |
| 15 | kysyä | to ask | 1 | completed |
| 16 | vastata | to answer | 4 | completed |
| 17 | pyytää | to request | 1 | completed |
| 18 | sanoa | to say | 1 | completed |
| 19 | kertoa | to tell | 1 | completed |
| 20 | keskustella | to chat | 3 | completed |
| 21 | nukkua | to sleep | 1 | completed |
| 22 | herätä | to wake up | 4 | completed |
| 23 | nousta | to get up | 3 | completed |
| 24 | maata | to lie down | 4 | completed |
| 25 | pestä | to wash | 3 | completed |
| 26 | tiskata | to wash dishes | 4 | completed |
| 27 | siivota | to clean | 4 | completed |
| 28 | imuroida | to vacuum | 2 | completed |
| 29 | uida | to swim | 2 | completed |
| 30 | kävellä | to walk | 3 | completed |
| 31 | pyöräillä | to ride a bike | 3 | completed |
| 32 | ajaa | to drive | 1 | completed |
| 33 | juosta | to run | 3 | completed |
| 34 | pelata | to play sports | 4 | completed |
| 35 | leikkiä | to play (child) | 1 | completed |
| 36 | soittaa | to play / to call | 1 | completed |
| 37 | ottaa | to take | 1 | completed |
| 38 | antaa | to give | 1 | completed |
| 39 | lainata | to borrow / lend | 4 | completed |
| 40 | tavata | to meet | 4 | completed |
| 41 | tutustua | to get to know | 1 | completed |
| 42 | tehdä | to do | 2 | completed |
| 43 | nähdä | to see | 2 | completed |
| 44 | katsoa | to watch | 1 | completed |
| 45 | tulla | to come | 3 | completed |
| 46 | mennä | to go | 3 | completed |
| 47 | lähteä | to leave | 1 | completed |
| 48 | jäädä | to stay | 2 | completed |
| 49 | saapua | to arrive | 1 | completed |
| 50 | käydä | to visit | 2 | completed |

## Content-change checklist

1. Read this guide and add or edit only `data/verbs.json`.
2. Update the current catalog and planned backlog in this file to reflect the change.
3. Verify grammar and source data.
4. Run `npm run validate`.
5. Run `npm run build`.
6. Review the generated reference and Anki cards.
