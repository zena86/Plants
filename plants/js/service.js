const serviceBtns = document.querySelectorAll(".service__btn");
const serviceCards = document.querySelectorAll(".service__card");

function onFilterChanged() {
  const activeBtns = getActiveBtns();
  const activeServices = activeBtns.map((item) => item.innerHTML.toLowerCase());

  serviceCards.forEach((card) => {
    const cardService = card.dataset.service;

    if (!activeServices.length || activeServices.indexOf(cardService) >= 0) {
      card.classList.remove("blur");
    } else {
      card.classList.add("blur");
    }
  });
}

const getActiveBtns = () => [
  ...document.querySelectorAll(".service__btn.active"),
];

serviceBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.classList.toggle("active");

    const activeBtns = getActiveBtns();
    if (activeBtns.length > serviceBtns.length - 1)
      activeBtns.forEach((btn) => btn.classList.remove("active"));

    onFilterChanged();
  });
});
