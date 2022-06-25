export function Events({ buttonLogo, linkHome }) {
   buttonLogo.addEventListener("click", () => {
      linkHome.onClick();
   });
}