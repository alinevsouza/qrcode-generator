import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createQrcode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";
import chalk from "chalk";

async function main() {
  prompt.get(mainPrompt, async (err, choose) => {
    if (choose.select == 1) {
      console.log(chalk.cyanBright.italic("Option chosen: 1. QRCode."));
      await createQrcode();
    }
    if (choose.select == 2) {
      console.log(chalk.cyanBright.italic("Option chosen: 2. Password."));
      await createPassword();
    }
  });
  prompt.start();
}

main();
