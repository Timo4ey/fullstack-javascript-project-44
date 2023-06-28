#!/usr/bin/env node
import { asker, greeting, realRandom } from "../src/cli.js";

const brainEven = () => {
  let attempts = 3;
  let name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (attempts > 0) {
    let guessNum = realRandom();
    let ans = guessNum % 2 === 0 ? "yes" : "no";

    let response = asker(`Question: ${guessNum} `);
    console.log(`Your answer: ${response}`);
    if (response === ans) {
      console.log("Correct!");
      attempts -= 1;
    } else {
      console.log(
        `'${response}' is wrong answer ;(. Correct answer was '${ans}'.`
      );
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

brainEven();
export default brainEven;
