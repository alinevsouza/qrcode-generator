import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";

async function main() {
  prompt.get(mainPrompt, async (err, choose) => {
    if (choose.select == 1) {
      console.log("Option chosen: 1. QRCode.");
    }
    if (choose.select == 2) {
      console.log("Option chosen: 2. Password.");
    }
  });
  prompt.start();
}

main();
