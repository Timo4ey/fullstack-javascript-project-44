const primeNumber = (num) => {
  const newNum = num;
  let i = 2;
  while (i <= Math.sqrt(newNum)) {
    if (newNum % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

export default primeNumber;
