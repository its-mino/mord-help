const inputName = document.getElementById("register-input-name");
const inputEmail = document.getElementById("register-input-email");
const inputPassword = document.getElementById("register-input-password");

inputName.addEventListener("change", () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  console.log(reg.test(inputName.value));
});
