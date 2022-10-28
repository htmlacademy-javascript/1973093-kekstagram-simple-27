import {createPhotos} from './data.js';

const randomUsersImageTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesBlock = document.querySelector('.pictures');

const data = createPhotos();


const renderPictures = () => {
  data.forEach(({url, likes, comments}) => {
    const pictureElement = randomUsersImageTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    picturesBlock.append(pictureElement);
  });
};

export {renderPictures};
