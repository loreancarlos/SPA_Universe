import { Router } from "./router.js"
import { Controls } from "./controls.js";
import { body, navLinks } from "./elements.js";
import { Events } from "./events.js";

const control = new Controls({ body, navLinks });
const route = new Router(control);

route.add("/", "../pages/home.html");
route.add("/universe", "../pages/universe.html");
route.add("/exploration", "../pages/exploration.html");

const event = new Events({ route, control, navLinks });

/* Carrega a página Home ao carregar o Script */
route.handle();
control.changePage("/");

/* Possibilita acionar o método route() direto do HTML pelo evento onclick */
/* window.route = () => route.route(); */


