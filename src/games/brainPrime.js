import { random } from '../math/math.js';
import primeNumber from '../math/prime.js';
import { asker, cycleThreeRounds } from '../index.js';

const BrainPrimeWorker = () => {
  const num = random(1, 100);
  const ans = primeNumber(num) === true ? 'yes' : 'no';
  const response = asker(num);
  return [ans === response, ans, response];
};

const BrainPrime = () => cycleThreeRounds(
  BrainPrimeWorker,
  'Answer "yes" if given number is prime. Otherwise answer "no".',
);

export default BrainPrime;
