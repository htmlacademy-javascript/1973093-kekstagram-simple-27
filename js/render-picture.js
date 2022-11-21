import {getData} from './api.js';
import {renderGetErrorMessage} from './create-error.js';

const randomUsersImageTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesBlock = document.querySelector('.pictures');

const renderPicture = (url, likes, comments) => {
  const pictureElement = randomUsersImageTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  picturesBlock.append(pictureElement);
};

const renderPictures = (data) => {
  data.forEach(({url, likes, comments}) => renderPicture(url, likes, comments));
};

const loadImages = () => {
  getData(renderPictures, renderGetErrorMessage);
};

export {loadImages};
