document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".pdf")
    .addEventListener("click", () =>
      window.open("../assets/alicia.pdf", "_blank")
    );
});
