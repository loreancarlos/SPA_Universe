import { Router } from "./router.js"
import { Controls } from "./controls.js";
import { Events } from "./events.js";
import { body, buttonLogo, navLinkHome, navLinkUniverse, navLinkExploration } from "./elements.js";

const control = new Controls({ body });
const event = new Events({ buttonLogo, navLinkHome, navLinkUniverse, navLinkExploration });

const route = new Router(control);
route.add("/", "../pages/home.html");
route.add("/universe", "../pages/universe.html");
route.add("/exploration", "../pages/exploration.html");

/* Carrega a página Home ao carregar o Script */
route.handle();

/* Possibilita acionar o método route() direto do HTML pelo evento onclick */
window.route = () => route.route();


