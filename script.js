const btnSubmit = document.querySelector(".btn--submit");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const radios = Array.from(
    document.querySelectorAll(".rating__radiogroup input")
  );

  let rating;
  for (const radio of radios) {
    if (radio.checked) {
      rating = radio.value;
    }
  }

  document.querySelector(".rating--form").classList.add("isHidden");
  document.querySelector(
    ".rating__selected"
  ).textContent = `You selected ${rating} out of 5`;
  document.querySelector(".rating--result").classList.remove("isHidden");
});
