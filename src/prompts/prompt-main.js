import chalk from "chalk";

const mainPrompt = [
  {
    name: "select",
    description: chalk.magentaBright.bold(
      "Choose one option [1. QRCode | 2. Password]"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red("Invalid option: Choose between 1 and 2."),
    required: true,
  },
];

export default mainPrompt;
