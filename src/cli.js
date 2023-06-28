import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export { greeting };
