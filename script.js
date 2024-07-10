document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.getElementById("toggler");
  const navbar = document.querySelector(".navbar");

  toggler.addEventListener("change", function () {
    if (toggler.checked) {
      navbar.classList.add("show");
    } else {
      navbar.classList.remove("show");
    }
  });
});
