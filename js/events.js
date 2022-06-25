export function Events({ route, control, navLinks }) {

   navLinks.forEach(element => {
      element.addEventListener("click", () => {
         const { pathname } = window.location;
         route.route();
         control.changePage(pathname);
         control.selectNav(element);
      });
   });
}