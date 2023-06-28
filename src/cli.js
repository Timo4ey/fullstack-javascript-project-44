// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
  return name;
};

// eslint-disable-next-line import/prefer-default-export
export { greeting };
