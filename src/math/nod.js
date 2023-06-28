const nod = (numOne, numTwo) => {
  if (numTwo === 0) {
    return numOne;
  }
  const temp = numOne;
  if (numOne < numTwo) {
    // eslint-disable-next-line no-param-reassign
    numOne = numTwo;
    // eslint-disable-next-line no-param-reassign
    numTwo = temp;
  }
  return nod(numOne - numTwo, numTwo);
};

export default nod;
