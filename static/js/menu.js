document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const menuToggle = document.getElementById("menu-toggle");

    if (menuToggle && menuToggle.checked) {
      menuToggle.checked = false;
    }
  }
});