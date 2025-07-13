import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
  const password = await handle();
  console.log(chalk.greenBright("Password generated successfully!\n"));
  console.log(
    chalk.yellowBright.bold(`The generated password is: ${password}`)
  );
}

export default createPassword;
