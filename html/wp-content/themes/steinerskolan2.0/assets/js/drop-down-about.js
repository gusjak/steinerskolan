const dropDownBarAboutOne = document.querySelector('.drop-down-bar-about-1');
const dropDownBarAboutTwo = document.querySelector('.drop-down-bar-about-2');
const dropDownBarAboutThree = document.querySelector('.drop-down-bar-about-3');
const dropDownBarAboutFour = document.querySelector('.drop-down-bar-about-4');
const dropDownBarAboutFive = document.querySelector('.drop-down-bar-about-5');
const dropDownBarAboutSix = document.querySelector('.drop-down-bar-about-6');

dropDownBarAboutOne.addEventListener('click', () => {
  const dropDownContentAboutOne = document.querySelector('.drop-down-content-box-about-1');

  if (dropDownContentAboutOne.style.display === 'none') {
    dropDownContentAboutOne.style.display = 'flex';
    dropDownBarAboutOne.style.backgroundColor = '#E1C4C4';
    dropDownBarAboutOne.style.borderBottom = 'none';
  } else {
    dropDownContentAboutOne.style.display = 'none';
    dropDownBarAboutOne.style.backgroundColor = 'transparent';
    dropDownBarAboutOne.style.borderBottom = '0.5px solid black';
  }
});

dropDownBarAboutTwo.addEventListener('click', () => {
  const dropDownContentAboutTwo = document.querySelector('.drop-down-content-box-about-2');

  if (dropDownContentAboutTwo.style.display === 'none') {
    dropDownContentAboutTwo.style.display = 'flex';
    dropDownBarAboutTwo.style.backgroundColor = '#e2d5ca';
    dropDownBarAboutTwo.style.borderBottom = 'none';
  } else {
    dropDownContentAboutTwo.style.display = 'none';
    dropDownBarAboutTwo.style.backgroundColor = 'transparent';
    dropDownBarAboutTwo.style.borderBottom = '0.5px solid black';
  }
});

dropDownBarAboutThree.addEventListener('click', () => {
  const dropDownContentAboutThree = document.querySelector('.drop-down-content-box-about-3');

  if (dropDownContentAboutThree.style.display === 'none') {
    dropDownContentAboutThree.style.display = 'flex';
    dropDownBarAboutThree.style.backgroundColor = '#c8d2c9';
    dropDownBarAboutThree.style.borderBottom = 'none';
  } else {
    dropDownContentAboutThree.style.display = 'none';
    dropDownBarAboutThree.style.backgroundColor = 'transparent';
    dropDownBarAboutThree.style.borderBottom = '0.5px solid black';
  }
});

dropDownBarAboutFour.addEventListener('click', () => {
  const dropDownContentAboutFour = document.querySelector('.drop-down-content-box-about-4');

  if (dropDownContentAboutFour.style.display === 'none') {
    dropDownContentAboutFour.style.display = 'flex';
    dropDownBarAboutFour.style.backgroundColor = '#c9bfa3';
    dropDownBarAboutFour.style.borderBottom = 'none';
  } else {
    dropDownContentAboutFour.style.display = 'none';
    dropDownBarAboutFour.style.backgroundColor = 'transparent';
    dropDownBarAboutFour.style.borderBottom = '0.5px solid black';
  }
});

dropDownBarAboutFive.addEventListener('click', () => {
  const dropDownContentAboutFive = document.querySelector('.drop-down-content-box-about-5');

  if (dropDownContentAboutFive.style.display === 'none') {
    dropDownContentAboutFive.style.display = 'flex';
    dropDownBarAboutFive.style.backgroundColor = '#f8edeb';
    dropDownBarAboutFive.style.borderBottom = 'none';
  } else {
    dropDownContentAboutFive.style.display = 'none';
    dropDownBarAboutFive.style.backgroundColor = 'transparent';
    dropDownBarAboutFive.style.borderBottom = '0.5px solid black';
  }
});

dropDownBarAboutSix.addEventListener('click', () => {
  const dropDownContentAboutSix = document.querySelector('.drop-down-content-box-about-6');

  if (dropDownContentAboutSix.style.display === 'none') {
    dropDownContentAboutSix.style.display = 'flex';
    dropDownBarAboutSix.style.backgroundColor = '#e1c4c4';
    dropDownBarAboutSix.style.borderBottom = 'none';
  } else {
    dropDownContentAboutSix.style.display = 'none';
    dropDownBarAboutSix.style.backgroundColor = 'transparent';
    dropDownBarAboutSix.style.borderBottom = '0.5px solid black';
  }
});
