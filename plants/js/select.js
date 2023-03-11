const selectBoxes = document.querySelectorAll(".select-box");

selectBoxes.forEach((el) => {
  let isOpened = false;
  let isSelected = false;

  const selected = el.querySelector(".selected");
  const optionsContainer = el.querySelector(".options-container");
  const optionsList = el.querySelectorAll(".option");
  const selectMarginTop = el.querySelector(".select-mt");
  const selectMarginBottom = el.querySelector(".select-mb");

  function close() {
    optionsContainer.classList.remove("open");
    selectMarginTop.classList.remove("open");
    selectMarginBottom.classList.remove("open");
    isOpened = false;
  }

  function closeEvent(el) {
    let selectedEl = el.target.closest(".selected");
    if (selectedEl === null) {
      close();
      selected.classList.remove("open");
      document.querySelector("body").removeEventListener("click", closeEvent);
    }
  }

  selected.addEventListener("click", () => {
    selected.classList.toggle("open");
    optionsContainer.classList.toggle("open");
    selectMarginTop.classList.toggle("open");
    selectMarginBottom.classList.toggle("open");
    document.querySelector("body").addEventListener("click", closeEvent);
    isOpened = !isOpened;
  });

  optionsList.forEach((el) => {
    el.addEventListener("click", () => {
      let cityName = el.querySelector("label").innerHTML;
      selected.innerHTML = cityName;
      selected.classList.add("select");
      selected.classList.remove("open");
      isSelected = true;
      selected.dispatchEvent(
        new CustomEvent("selected", { detail: { value: cityName } })
      );
      close();
    });
  });
});
