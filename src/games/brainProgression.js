import { asker, cycleThreeRounds } from '../index.js';
import { random } from '../math/math.js';
import genArray from '../arrayBuilders/arrayBuilders.js';

const brainProgressionInner = () => {
  const arr = genArray();
  const index = random(0, arr.length - 1);
  const ans = arr[index];
  arr[index] = '..';
  const response = Number(asker(arr.toString().replace(/,/g, ' ')));

  return [ans === response, ans, response];
};

const brainProgression = () => cycleThreeRounds(
  brainProgressionInner,
  'What number is missing in the progression?',
);

export default brainProgression;
