const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const effectRadioChrome = document.querySelector('#effect-chrome');
const effectRadioSepia = document.querySelector('#effect-sepia');
const effectRadioMarvin = document.querySelector('#effect-marvin');
const effectRadioPhobos = document.querySelector('#effect-phobos');
const effectRadioHeat = document.querySelector('#effect-heat');

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',
});

effectLevelSlider.noUiSlider.on('update', () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();
});

effectRadioChrome.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    });
  } else {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    });
  }
});

effectRadioSepia.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    });
  } else {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    });
  }
});

effectRadioMarvin.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
      connect: 'lower',
    });
  } else {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    });
  }
});

effectRadioPhobos.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
      connect: 'lower',
    });
  } else {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    });
  }
});

effectRadioHeat.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
      connect: 'lower',
    });
  } else {
    effectLevelSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    });
  }
});

// effectLevelSlider.noUiSlider.destroy();
