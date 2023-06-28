import _ from 'lodash';

const sum = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;
const { random } = _;

export {
  sum, subtract, multiply, div, random,
};
