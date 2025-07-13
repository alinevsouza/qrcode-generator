import prompt from "prompt";
import qrcodePrompt from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";

async function createQrcode() {
  prompt.get(qrcodePrompt, handle);

  prompt.start();
}

export default createQrcode;
