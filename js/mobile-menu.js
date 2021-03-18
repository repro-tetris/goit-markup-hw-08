(() => {
  const menus = {
    menuBtn: document.querySelector("[data-menu-button]"),
    closeBtn: document.querySelector("[data-mobile-menu]"),
    body: document.querySelector("body"),
  };

  menus.menuBtn.addEventListener("click", toggleMenu);
  menus.closeBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    menus.menuBtn.classList.toggle("is-open");
    menus.closeBtn.classList.toggle("is-open");
    menus.body.classList.toggle("is-modal-open");
  }
})();
