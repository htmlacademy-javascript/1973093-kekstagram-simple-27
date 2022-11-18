import {isEcsEvt} from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');

const createSuccess = () => {
  const successElement = successTemplate.cloneNode(true);
  document.body.append(successElement);
};

const onDocumentClick = (evt) => {
  evt.preventDefault();
  if (evt.target.closest('.success')) {
    evt.target.closest('.success').remove();
    removeListeners();
  }
};

const onDocumentKeydown = (evt) => {
  evt.preventDefault();
  const successElement = document.querySelector('.success');
  if (isEcsEvt(evt) && successElement) {
    successElement.remove();
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

const renderSuccessMessage = () => {
  createSuccess();
  addListeners();
};

export {renderSuccessMessage};
