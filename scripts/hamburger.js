function getHamburgerMenuExpanded() {
  const hamburgerMenu = document.getElementById("navigation");
  return hamburgerMenu.getAttribute("hamburger-expanded") === "true";
}

function setHamburgerMenuExpanded(value) {
  const hamburgerMenu = document.getElementById("navigation");
  hamburgerMenu.setAttribute("hamburger-expanded", value.toString());
}

function toggleHamburgerMenu() {
  const backDrop = document.getElementById("backdrop");

  const hamburgerMenuExpanded = getHamburgerMenuExpanded();

  setHamburgerMenuExpanded(!hamburgerMenuExpanded);
  backDrop.setAttribute("visible", !hamburgerMenuExpanded);
}
