function getRandomArbitrary(min, max) {
  if (min >= max) {
    return -1;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomArbitrary(0, 10);

function maxStringLength(stringChecked, maxLength) {
  if (stringChecked.length <= maxLength) {
    console.log('true');
  }
  else {
    console.log('false');
  }
}

maxStringLength('aaaaaaaaa', 3);
