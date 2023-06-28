#!/usr/bin/env node
import { asker, cycleThreeRounds } from '../index.js';
import { random } from '../math/math.js';

const brainEvenInner = () => {
  const guessNum = random(1, 100);
  const ans = guessNum % 2 === 0 ? 'yes' : 'no';
  const response = asker(guessNum);
  return [ans === response, ans, response];
};

const brainEven = () => cycleThreeRounds(
  brainEvenInner,
  'Answer "yes" if the number is even, otherwise answer "no".',
);

export default brainEven;
