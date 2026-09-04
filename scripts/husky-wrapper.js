import { execSync } from 'node:child_process';
import kleur from 'kleur';

const checkType = process.argv[2]; // 'lint' or 'commitlint'
const args = process.argv.slice(3);

const brands = {
  lint: { name: 'Mantiqh Code Lint', color: kleur.cyan, icon: '🔍' },
  commitlint: { name: 'Mantiqh Commit Check', color: kleur.magenta, icon: '📝' }
};

const brand = brands[checkType] || { name: 'Mantiqh Check', color: kleur.blue, icon: '⚙️' };

console.log(`\n${brand.color().bold(brand.icon + ' ' + brand.name)}`);
console.log(kleur.gray('─'.repeat(40)));

try {
  let command = '';
  if (checkType === 'lint') {
    command = 'npx eslint .';
  } else if (checkType === 'commitlint') {
    command = `npx commitlint --edit ${args[0]}`;
  }

  execSync(command, { stdio: 'inherit' });
  
  console.log(kleur.green(`\n✔ ${brand.name} passed!`));
} catch (error) {
  console.log(kleur.red(`\n✘ ${brand.name} failed. Please fix the issues above.`));
  process.exit(1);
}
