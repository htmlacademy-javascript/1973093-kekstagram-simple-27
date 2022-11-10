const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleImage = document.querySelector('.img-upload__preview');
const SCALE_STEP = 0.25;
let currentScaleLevel = 1;

const onScaleControlSmallerClick = (evt) => {
  evt.preventDefault();
  if (currentScaleLevel <= SCALE_STEP) {
    return;
  }
  currentScaleLevel = currentScaleLevel - SCALE_STEP;
  scaleImage.style.transform = `scale(${currentScaleLevel})`;
  scaleControlValue.value -= 25;
};

const onScaleControlBiggerClick = (evt) => {
  evt.preventDefault();
  if (currentScaleLevel >= 1) {
    return;
  }
  currentScaleLevel = currentScaleLevel + SCALE_STEP;
  scaleImage.style.transform = `scale(${currentScaleLevel})`;
  scaleControlValue.value += 25;
};


scaleControlSmaller.addEventListener('click', onScaleControlSmallerClick);
scaleControlBigger.addEventListener('click', onScaleControlBiggerClick);

// noUiSlider.create(scaleControlValue, {
//   range: {
//     min: 25%,
//     max: 100%,
//   },
//   start: 100%,
// });
