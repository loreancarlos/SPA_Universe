export function Controls({ body, navLinks }) {
   function changePage(pathname) {
      switch (pathname) {
         case "/": {
            body.dataset.page = "home";
            break;
         }
         case "/universe": {
            body.dataset.page = "universe";
            break;
         }
         case "/exploration": {
            body.dataset.page = "exploration";
            break;
         }
      }
   }

   function selectNav(element) {
      cleanNav();
      if (element.firstElementChild == null) {
         element.classList.add("selected");
      } else {
         navLinks.item(1).classList.add("selected");
      }
   }

   function cleanNav() {
      navLinks.forEach(element => {
         element.classList.remove("selected");
      });
   }

   return { changePage, selectNav };
}