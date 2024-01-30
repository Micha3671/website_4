// navbar.js
export default function Navbar() {
  // Hier wird der JavaScript-Code für deine Navbar-Komponente definiert
  const navbar = document.createElement("div");
  navbar.className = "navbar";
  navbar.innerHTML = `
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <button>Button</button>
    `;
  return navbar;
}
