#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const asker = (message) => {
  console.log(`Question: ${message} `);
  const ans = readlineSync.question('Your answer: ');
  return ans;
};

function cycleThreeRounds(func) {
  let status;
  const name = greeting();
  let ans;
  let response;
  for (let i = 0; i < 3; i += 1) {
    [status, ans, response] = func();
    if (status === true) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(
        `'${response}' is wrong answer ;(. Correct answer was '${ans}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
}

export { greeting, asker, cycleThreeRounds };
