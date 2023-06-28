import { random } from '../math/math.js';

const genArray = () => {
  let num = random(10, 100);
  const size = random(5, 10);
  const dif = random(1, 9);
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    num -= dif;
    arr.push(num);
  }
  return arr.reverse();
};

export default genArray;
