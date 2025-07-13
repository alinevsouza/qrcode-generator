import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
  if (err) {
    console.error("Application error");
    return;
  }

  const isSmall = result.type == 2;
  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.greenBright("QRCode generated successfully!\n"));
    console.log(qrcode);
  });
}

export default handle;
