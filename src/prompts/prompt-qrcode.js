import chalk from "chalk";

const qrcodePrompt = [
  {
    name: "link",
    description: chalk.magentaBright.bold(
      "Insert the link to create a QRCode."
    ),
  },
  {
    name: "type",
    description: chalk.magentaBright.bold(
      "Choose one option [1. Image | 2. Terminal]"
    ),
    patern: /^[1-2]+$/,
    message: chalk.red("Invalid option: Choose between 1 and 2."),
    required: true,
  },
];

export default qrcodePrompt;
