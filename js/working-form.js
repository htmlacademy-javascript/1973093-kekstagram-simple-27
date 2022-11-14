import {addImgScaleListeners, resetImgScale} from './size-image.js';
import {changeEffect, resetFilter} from './images-effects.js';

const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadForm = document.querySelector('.img-upload__form');
const uploadFormClose = document.querySelector('.img-upload__cancel');
const uploadEffectsBlock = document.querySelector('.img-upload__effects');

const pristine = new Pristine (uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text--error-text',
});

const openModal = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addListeners();
  addImgScaleListeners();
};

const closeModal = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.reset();
  pristine.reset();
  removeListeners();
  resetImgScale();
  resetFilter();
};

const onUploadFormCloseClick = (evt) => {
  evt.preventDefault();
  closeModal();
};


const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
};

function addListeners () {
  uploadFormClose.addEventListener('click', onUploadFormCloseClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

function removeListeners () {
  uploadFormClose.removeEventListener('click', onUploadFormCloseClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

const onUploadFileChange = () => {
  openModal();
};

const onUploadFormSubmit = (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {}
};

const onUploadEffectsChange = (evt) => {
  changeEffect(evt);
};

const addFormAction = () => {
  uploadFile.addEventListener('change', onUploadFileChange);
  uploadForm.addEventListener('submit', onUploadFormSubmit);
  uploadEffectsBlock.addEventListener('change', onUploadEffectsChange);
};

export {addFormAction};
