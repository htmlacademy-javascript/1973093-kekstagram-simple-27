import {renderPictures} from './render-picture.js';
import {addFormAction} from './working-form.js';
import './images-effects.js';

// renderPictures();
addFormAction();

fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => response.json())
  .then((loadImage) => {
    renderPictures(loadImage);
    // console.log(loadImage);
  });
