window.addEventListener("load", (e) => {
  const transitionElement = document.querySelector(".transition");
  const allLinksOnPage = document.querySelectorAll("a");
  setTimeout(() => {
    transitionElement.setAttribute("data-active", "false");
  }, 500);
  allLinksOnPage.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.href;
      transitionElement.setAttribute("data-active", "true");
      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  });
});
