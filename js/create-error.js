import {isEcsEvt} from './util.js';

const GET_ERROR_TEXT = 'Ошибка при загрузке данных';
const POST_ERROR_TEXT = 'Ошибка размещения фотогрфаии';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const createError = (text) => {
  const errorElement = errorTemplate.cloneNode(true);
  errorElement.querySelector('.error__title').textContent = text;
  document.body.append(errorElement);
};

const onDocumentClick = (evt) => {
  evt.preventDefault();
  if (evt.target.closest('.error')) {
    evt.target.closest('.error').remove();
    removeListeners();
  }
};

const onDocumentKeydown = (evt) => {
  evt.preventDefault();
  const errorElement = document.querySelector('.error');
  if (isEcsEvt(evt) && errorElement) {
    errorElement.remove();
    removeListeners();
  }
};

const addListeners = () => {
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

function removeListeners() {
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

const renderGetErrorMessage = () => {
  createError(GET_ERROR_TEXT);
  addListeners();
};

const renderPostErrorMessage = () => {
  createError(POST_ERROR_TEXT);
  addListeners();
};

export {renderGetErrorMessage, renderPostErrorMessage};
