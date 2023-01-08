import PAGES from "./models/pageModel.js";
import { handlePageChange } from "./routes/router.js";
import "./pages/RegisterPage.js";

// console.log("🚀 ~ file: app.js:3 ~ handlePageChange", handlePageChange);

// console.log(PAGES);

const navHomeLink = document.getElementById("nav-home-link");
const navAboutUsLink = document.getElementById("nav-aboutus-link");
const navContactUsLink = document.getElementById("nav-contactus-link");
const navRegisterLink = document.getElementById("nav-register-link");
const navLoginUsLink = document.getElementById("nav-login-link");

navHomeLink.addEventListener("click", function () {
  handlePageChange(PAGES.HOME);
});

navAboutUsLink.addEventListener("click", function () {
  handlePageChange(PAGES.ABOUT);
});

navContactUsLink.addEventListener("click", function () {
  handlePageChange(PAGES.CONTACT);
});

navRegisterLink.addEventListener("click", function () {
  handlePageChange(PAGES.REGISTER);
});

navLoginUsLink.addEventListener("click", function () {
  handlePageChange(PAGES.LOGIN);
});
