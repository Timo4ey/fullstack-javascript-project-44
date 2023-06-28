// eslint-disable-next-line import/extensions
import { greeting } from '../src/cli.js';

const main = () => {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  // eslint-disable-next-line no-unused-vars
  const name = greeting();
};

main();
