(() => {
  // Theme switch
  const body = document.body;
  const lamp = document.getElementById("mode");
  const data = body.getAttribute("data-theme");
  const logo = document.getElementsByName("logo");

  const initTheme = (state) => {
    if (state === "dark") {
      body.setAttribute("data-theme", "dark");
      if (logo[0] != null){
        logo[0].setAttribute("src", "assets/img/dark.gif");
      }
    } else if (state === "light") {
      body.removeAttribute("data-theme");
      if (logo[0] != null){
        logo[0].setAttribute("src", "assets/img/white.gif");
      }
    } else {
      localStorage.setItem("theme", data);
    }
  };

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
      if (logo[0] != null){
        logo[0].setAttribute("src", "assets/img/white.gif");
      }
    } else if (state === "light") {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
      if (logo[0] != null){
        logo[0].setAttribute("src","assets/img/dark.gif");
      }
    } else {
      initTheme(state);
    }
  };

  initTheme(localStorage.getItem("theme"));

  lamp.addEventListener("click", () =>
    toggleTheme(localStorage.getItem("theme"))
  );

  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");

  cbox.addEventListener("change", function () {
    const area = document.querySelector(".wrapper");
    this.checked
      ? area.classList.add("blurry")
      : area.classList.remove("blurry");
  });
})();
