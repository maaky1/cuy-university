let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

const generatorPassword = (len) => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbol = "!@#$%^&*()_+=-{}[]';:/?.>,<~`";

  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }

  return generator;
};

const getPassword = () => {
  const newPassword = generatorPassword(passwordLength.value);
  password.value = newPassword;
  setTimeout(() => {
    alert("Password has been generated!");
  }, 700);
};

const savePassword = () => {
  let result = password.value;
  saveButton.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(`${result}`)
  );
  saveButton.setAttribute("Download", "GeneratePassword.txt");
  setTimeout(() => {
    alert("Berhasil Disimpan");
  }, 700);
};
