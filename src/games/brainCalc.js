#!/usr/bin/env node
import { asker, cycleThreeRounds } from '../index.js';
import {
  sum, subtract, multiply, random,
} from '../math/math.js';

const brainCalcWorker = () => {
  const numOne = random(1, 200);
  const numTwo = random(1, 150);
  const symbols = ['+', '-', '*'][random(0, 2)];
  const sym = { '+': sum, '-': subtract, '*': multiply };
  const ans = sym[symbols](numOne, numTwo);

  const response = Number(asker(`${numOne} ${symbols} ${numTwo}`));
  return [ans === response, ans, response];
};

const brainCalc = () => cycleThreeRounds(brainCalcWorker, 'What is the result of the expression?');

export default brainCalc;
