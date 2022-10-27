import {createPhotos} from './data.js';

const randomUsersImageTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createNewPhoto = createPhotos();



createNewPhoto.forEach((url, likes, comments) => {
  const pictureElement = randomUsersImageTemplate.cloneNode(true);
  pictureElement.querySelector('.') = url; // Не понял как делать привязку к изображению.
  pictureElement.querySelector('.picture__likes') = likes; // Тут не понял какой атрибут нужно указать после ...('.picture__likes')?
  pictureElement.querySelector('.picture__comments') = comments; // Тут аналогично.
});

// 3. Отрисуйте сгенерированные DOM-элементы в блок .pictures. - не понял этой части задания.
