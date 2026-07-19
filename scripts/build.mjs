import { readFile, writeFile } from 'node:fs/promises';
import { validateVerbs } from './validate.mjs';

const root = new URL('../', import.meta.url);
const dataPath = new URL('../data/verbs.json', import.meta.url);
const templatePath = new URL('../src/template.html', import.meta.url);

function ankiText(verbs) {
  const header = [
    '#separator:semicolon',
    '#html:false',
    '#notetype:Basic',
    '#deck:Finnish::Core Verbs',
    '',
  ];

  const cards = verbs.flatMap(verb => {
    const forms = field => verb.conj.map(row => row[field]).join(' / ');
    const englishExpressions = verb.expressions.map(([, en]) => en).join(' / ');
    const finnishExpressions = verb.expressions.map(([fi]) => fi).join(' / ');

    return [
      `${verb.fi} – present tense (all persons);${forms('pres')}`,
      `${verb.fi} – past tense (all persons);${forms('past')}`,
      `${verb.fi} – spoken Finnish (all persons);${forms('spok')}`,
      `Translate to Finnish: ${englishExpressions};${finnishExpressions}`,
      `Translate to Finnish: ${verb.story_en};${verb.story_fi}`,
      '',
    ];
  });

  return [...header, ...cards].join('\n');
}

async function main() {
  const verbs = JSON.parse(await readFile(dataPath, 'utf8'));
  const errors = validateVerbs(verbs);
  if (errors.length) throw new Error(errors.join('\n'));

  const template = await readFile(templatePath, 'utf8');
  if (!template.includes('/*__VERBS__*/')) {
    throw new Error('src/template.html is missing the /*__VERBS__*/ placeholder.');
  }

  const html = template.replace('/*__VERBS__*/', JSON.stringify(verbs, null, 2));
  await Promise.all([
    writeFile(new URL('index.html', root), html),
    writeFile(new URL('finnish_verbs_anki.txt', root), ankiText(verbs)),
  ]);

  console.log(`Built index.html and finnish_verbs_anki.txt for ${verbs.length} verbs.`);
}

main();
