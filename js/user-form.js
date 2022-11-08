const fotoForm = document.querySelector('.img-upload__form');

const pristine = new Pristine (fotoForm, {
  classTo: 'img-upload__form--element',
  errorTextParent: 'img-upload__form--element',
  errorTextClass: 'img-upload__form--error-text',
});

fotoForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    return 1;
  }
});
