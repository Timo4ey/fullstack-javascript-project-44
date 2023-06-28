#!/usr/bin/env node
import { asker, cycleThreeRounds } from '../index.js';
import { random } from '../math/math.js';
import nod from '../math/nod.js';

const brainGcdInner = () => {
  const numOne = random(1, 100);
  const numTwo = random(1, 100);
  const ans = nod(numOne, numTwo);
  const response = Number(asker(`${numOne} ${numTwo}`));
  return [ans === response, ans, response];
};

const brainGcd = () => cycleThreeRounds(
  brainGcdInner,
  'Find the greatest common divisor of given numbers.',
);

export default brainGcd;
