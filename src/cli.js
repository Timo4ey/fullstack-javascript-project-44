import readlineSync from "readline-sync";

const greeting = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name;
};

const asker = (message) => {
  const ans = readlineSync.question(message);
  return ans;
};

const realRandom = () =>
  Math.abs(Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100));

export { greeting, asker, realRandom };
