export function Events({ route, control, navLinks }) {

   navLinks.forEach(element => {
      element.addEventListener("click", () => {
         route.route();
         const { pathname } = window.location;
         control.changePage(pathname);
         control.selectNav(element);
      });
   });
}