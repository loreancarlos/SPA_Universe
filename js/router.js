export class Router {

   constructor(controls) {
      this.controls = controls;
   }

   routes = {};

   add(linkLocation, page) {
      this.routes[linkLocation] = page;
   }

   route(event) {
      this.event = event || window.event;
      console.log(this.event);
      this.event.preventDefault();
      window.history.pushState({}, "", this.event.target.href);
      this.handle();
   }

   handle() {
      const { pathname } = window.location;
      const route = this.routes[pathname] || this.routes["/"];
      fetch(route).then(data => data.text()).then(html => document.querySelector("main").innerHTML = html);
      this.controls.changeBG(pathname);
   }
}