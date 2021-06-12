window.addEventListener("load", function (e) {
  addBlurListener("contactForm");
});

function addBlurListener(id) {
  const form = document.getElementById(id);
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener(
      "input",
      (event) => input.classList.remove("error"),
      false
    );
    input.addEventListener(
      "invalid",
      (event) => input.classList.add("error"),
      false
    );
    input.addEventListener("blur", () => input.checkValidity(), false);
  });
}
