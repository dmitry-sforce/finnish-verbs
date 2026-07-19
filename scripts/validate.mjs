import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const requiredVerbFields = ['fi', 'en', 'verbtype', 'verbrule', 'conj', 'expressions', 'story_fi', 'story_en'];
const requiredConjugationFields = ['pro', 'pres', 'past', 'spok'];

export function validateVerbs(verbs) {
  const errors = [];
  const seenVerbs = new Set();

  if (!Array.isArray(verbs) || verbs.length === 0) {
    return ['Expected data/verbs.json to contain at least one verb.'];
  }

  for (const [index, verb] of verbs.entries()) {
    const label = `Verb ${index + 1}`;

    for (const field of requiredVerbFields) {
      if (verb[field] === undefined || verb[field] === '') {
        errors.push(`${label}: missing ${field}.`);
      }
    }

    if (seenVerbs.has(verb.fi)) errors.push(`${label}: duplicate infinitive "${verb.fi}".`);
    seenVerbs.add(verb.fi);

    if (!Number.isInteger(verb.verbtype) || verb.verbtype < 1 || verb.verbtype > 6) {
      errors.push(`${label}: verbtype must be an integer from 1 to 6.`);
    }

    if (!Array.isArray(verb.conj) || verb.conj.length !== 6) {
      errors.push(`${label}: expected exactly 6 conjugation rows.`);
    } else {
      for (const [rowIndex, row] of verb.conj.entries()) {
        for (const field of requiredConjugationFields) {
          if (!row[field]) errors.push(`${label}, row ${rowIndex + 1}: missing ${field}.`);
        }
      }
    }

    if (!Array.isArray(verb.expressions) || verb.expressions.length !== 5) {
      errors.push(`${label}: expected exactly 5 expression pairs.`);
    } else {
      for (const [expressionIndex, expression] of verb.expressions.entries()) {
        if (!Array.isArray(expression) || expression.length !== 2 || !expression[0] || !expression[1]) {
          errors.push(`${label}, expression ${expressionIndex + 1}: expected a Finnish/English pair.`);
        }
      }
    }
  }

  return errors;
}

async function main() {
  const verbs = JSON.parse(await readFile(new URL('../data/verbs.json', import.meta.url), 'utf8'));
  const errors = validateVerbs(verbs);

  if (errors.length) {
    console.error(errors.map(error => `- ${error}`).join('\n'));
    process.exitCode = 1;
    return;
  }

  console.log(`Validated ${verbs.length} verbs.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
