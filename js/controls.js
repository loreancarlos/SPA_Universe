export function Controls({ body }) {
   function changeBG(pathname) {
      console.log(pathname);
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

   return { changeBG };
}