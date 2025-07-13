async function handle() {
  let password = "";

  const passwordLength = process.env.LENGTH;
  let characters = await allowedCharacters();

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  return password;
}

async function allowedCharacters() {
  let allowed = [];
  if (process.env.UPPERCASE === "true") {
    allowed.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (process.env.LOWERCASE === "true") {
    allowed.push(..."abcdefghijklmnopqrstuvwxyz");
  }
  if (process.env.NUMBERS === "true") {
    allowed.push(..."0123456789");
  }
  if (process.env.SPECIAL_CHARACTERS === "true") {
    allowed.push(..."!@#$%&*()_./-");
  }

  return allowed;
}

export default handle;
