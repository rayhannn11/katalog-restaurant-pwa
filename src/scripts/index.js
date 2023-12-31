import "regenerator-runtime";

import "../styles/general.css";
import "../styles/layout.css";
import "../styles/main.css";
import "../styles/detail.css";
import "../styles/responsive.css";

import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App({
  button: document.querySelector(".menu"),
  drawer: document.querySelector(".nav-list"),
  content: document.querySelector("#main-content"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
