const RANGE_OPTIONS = {
  chrome: {
    name : 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  sepia: {
    name : 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  marvin: {
    name : 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  phobos: {
    name : 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  heat: {
    name : 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
};

const image = document.querySelector('.img-upload__preview img');
const sliderElementField = document.querySelector('.effect-level__slider');
const sliderElementFieldWrapper = document.querySelector('.img-upload__effect-level');
const effectLevel = document.querySelector('.effect-level__value');

const createSlider = () => {
  noUiSlider.create(sliderElementField, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  });
};


const resetFilter = () => {
  if (sliderElementField.noUiSlider) {
    sliderElementField.noUiSlider.destroy();
  }
  image.style.filter = null;
  sliderElementFieldWrapper.classList.add('hidden');
};

const changeEffect = ({target}) => {
  if (target.value === 'none') {
    resetFilter();
    return;
  }

  if (!sliderElementField.noUiSlider) {
    createSlider();
  }

  sliderElementFieldWrapper.classList.remove('hidden');

  const {name, min, max, step, unit} = RANGE_OPTIONS[target.value];

  sliderElementField.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    start: max,
    step,
    connect: 'lower',
  });

  sliderElementField.noUiSlider.on('update', () => {
    effectLevel.value = sliderElementField.noUiSlider.get();
    image.style.filter = `${name}(${effectLevel.value}${unit})`;
  });
};

export {changeEffect, resetFilter};
