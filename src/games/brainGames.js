#!/usr/bin/env node
import { greeting } from '../index.js';

const brainGames = () => {
  const name = greeting();
  return name;
};

export default brainGames;
