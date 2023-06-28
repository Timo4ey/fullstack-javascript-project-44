#!/usr/bin/env node
import { greeting } from "../src/cli.js";

const brainGames = () => {
  const name = greeting();
  return name;
};

brainGames();
