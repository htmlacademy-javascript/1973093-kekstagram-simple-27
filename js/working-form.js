import {addImgScaleListeners, resetImgScale} from './size-image.js';
import {changeEffect, resetFilter} from './images-effects.js';
import {sendData} from './api.js';
import {renderPostErrorMessage} from './create-error.js';
import {renderSuccessMessage} from './create-success.js';

const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadForm = document.querySelector('.img-upload__form');
const uploadFormClose = document.querySelector('.img-upload__cancel');
const uploadEffectsBlock = document.querySelector('.img-upload__effects');
const sliderElementFieldWrapper = document.querySelector('.img-upload__effect-level');
const imgUploadSubmitBtn = document.querySelector('.img-upload__submit');

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

const onSendDataSuccessCallback = () => {
  renderSuccessMessage();
  imgUploadSubmitBtn.disabled = false;
  closeModal();
};

const onSendDataErrorCallback = () => {
  renderPostErrorMessage();
  imgUploadSubmitBtn.disabled = false;
};

const onUploadFormSubmit = (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    imgUploadSubmitBtn.disabled = true;
    const formData = new FormData(evt.target);
    sendData(onSendDataSuccessCallback, onSendDataErrorCallback, formData);
  }
};

const onUploadEffectsChange = (evt) => {
  changeEffect(evt);
};

const addFormAction = () => {
  sliderElementFieldWrapper.classList.add('hidden');
  uploadFile.addEventListener('change', onUploadFileChange);
  uploadForm.addEventListener('submit', onUploadFormSubmit);
  uploadEffectsBlock.addEventListener('change', onUploadEffectsChange);
};

export {addFormAction};
