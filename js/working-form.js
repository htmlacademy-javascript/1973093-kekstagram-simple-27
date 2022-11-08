import './user-form.js';

const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadForm = document.querySelector('.img-upload__form');
const uploadFormClose = document.querySelector('.img-upload__cancel');

const openModal = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addListeners();
};

const closeModal = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.reset();
  removeListeners();
};

const addListeners = () => {
  uploadFormClose.addEventListener('click', onUploadFormCloseClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const removeListeners = () => {
  uploadFormClose.removeEventListener('click', onUploadFormCloseClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onUploadFileChange = () => {
  openModal();
};

const onUploadFormCloseClick = (evt) => {
  evt.preventDefault();
  closeModal();
};

const onDocumentKeydown = (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    closeModal();
  }
};

const addFormAction = () => {
  uploadFile.addEventListener('change', onUploadFileChange);
};

export {addFormAction};
