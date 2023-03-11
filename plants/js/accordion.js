const accordionLabels = document.querySelectorAll('.accordion__label');

accordionLabels.forEach((accordionLabel) => {
  accordionLabel.addEventListener('click', () => {

    if(accordionLabel.classList.contains('active')) {
      accordionLabel.classList.remove('active');
      accordionLabel.parentElement.querySelector('.accordion__button').classList.remove('active');
    } else {
      const accordionLabelsIsActive = document.querySelectorAll('.accordion__label.active');
      accordionLabelsIsActive.forEach((labelIsActive) => {
        labelIsActive.classList.remove('active');
      });

      btnsIsActive = document.querySelectorAll('.accordion__button.active');
      btnsIsActive.forEach((btnIsActive) => {
        btnIsActive.classList.remove('active');
      });

      accordionLabel.classList.add('active');
      accordionLabel.parentElement.querySelector('.accordion__button').classList.add('active');
    }
  });
});