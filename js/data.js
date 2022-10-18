import {getRandomNumber} from './util.js';

const DESCRIPTION = 'Самая популярная фотография';
const OBJECT_COUNTER = 25;
let idCounter = 0;

const checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength('qqqqqq', 9);

const createPhoto = () => {
  idCounter += 1;
  return {
    id: idCounter,
    url: `photos/${idCounter}.jpg`,
    description: DESCRIPTION,
    likes: getRandomNumber(15, 200),
    comments: getRandomNumber(0, 200),
  };
};

const createPhotos = () => Array.from({length: OBJECT_COUNTER}, createPhoto);

export {createPhotos};
