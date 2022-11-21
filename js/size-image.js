const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleImage = document.querySelector('.img-upload__preview img');
const MAX_SCALE_LEVEL = 1;
const SCALE_STEP = 0.25;
const PERCENT_RATIO = 100;
let currentScaleLevel = 1;

const updateScale = (scaleLevel) => {
  scaleImage.style.transform = `scale(${scaleLevel})`;
  scaleControlValue.value = `${scaleLevel * PERCENT_RATIO}%`;
};

const onScaleControlSmallerClick = (evt) => {
  evt.preventDefault();
  if (currentScaleLevel <= SCALE_STEP) {
    return;
  }
  currentScaleLevel = currentScaleLevel - SCALE_STEP;
  updateScale(currentScaleLevel);
};

const onScaleControlBiggerClick = (evt) => {
  evt.preventDefault();
  if (currentScaleLevel >= MAX_SCALE_LEVEL) {
    return;
  }
  currentScaleLevel = currentScaleLevel + SCALE_STEP;
  updateScale(currentScaleLevel);
};

const addImgScaleListeners = () => {
  scaleControlSmaller.addEventListener('click', onScaleControlSmallerClick);
  scaleControlBigger.addEventListener('click', onScaleControlBiggerClick);
};

const removeImgScaleListeners = () => {
  scaleControlSmaller.removeEventListener('click', onScaleControlSmallerClick);
  scaleControlBigger.removeEventListener('click', onScaleControlBiggerClick);
};

const resetImgScale = () => {
  currentScaleLevel = MAX_SCALE_LEVEL;
  scaleImage.style.transform = null;
  removeImgScaleListeners();
};

export {addImgScaleListeners, resetImgScale};
