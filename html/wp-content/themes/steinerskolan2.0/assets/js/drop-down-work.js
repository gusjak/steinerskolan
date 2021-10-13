const dropDownBar1 = document.querySelector('.drop-down-bar-1');
const dropDownBar2 = document.querySelector('.drop-down-bar-2');
const dropDownBar3 = document.querySelector('.drop-down-bar-3');
const dropDownBar4 = document.querySelector('.drop-down-bar-4');
const dropDownBar5 = document.querySelector('.drop-down-bar-5');
const dropDownBar6 = document.querySelector('.drop-down-bar-6');
const dropDownBar7 = document.querySelector('.drop-down-bar-7');
const dropDownBar8 = document.querySelector('.drop-down-bar-8');
const dropDownBar9 = document.querySelector('.drop-down-bar-9');

dropDownBar1.addEventListener('click', () => {
  const dropDownContent1 = document.querySelector('.drop-down-content-box-1');

  if (dropDownContent1.style.display === 'none') {
    dropDownContent1.style.display = 'flex';
    dropDownBar1.style.backgroundColor = '#E1C4C4';
    dropDownBar1.style.borderBottom = 'none';
  } else {
    dropDownContent1.style.display = 'none';
    dropDownBar1.style.backgroundColor = 'transparent';
    dropDownBar1.style.borderBottom = '0.5px solid black';
  }
});

dropDownBar2.addEventListener('click', () => {
  const dropDownContent2 = document.querySelector('.drop-down-content-box-2');

  if (dropDownContent2.style.display === 'none') {
    dropDownContent2.style.display = 'flex';
    dropDownBar2.style.backgroundColor = '#e2d5ca';
    dropDownBar2.style.borderBottom = 'none';
  } else {
    dropDownContent2.style.display = 'none';
    dropDownBar2.style.backgroundColor = 'transparent';
    dropDownBar2.style.borderBottom = '0.5px solid black';
  }
});

dropDownBar3.addEventListener('click', () => {
  const dropDownContent3 = document.querySelector('.drop-down-content-box-3');

  if (dropDownContent3.style.display === 'none') {
    dropDownContent3.style.display = 'flex';
    dropDownBar3.style.backgroundColor = '#c8d2c9';
    dropDownBar3.style.borderBottom = 'none';
  } else {
    dropDownContent3.style.display = 'none';
    dropDownBar3.style.backgroundColor = 'transparent';
    dropDownBar3.style.borderBottom = '0.5px solid black';
  }
});

dropDownBar4.addEventListener('click', () => {
  const dropDownContent4 = document.querySelector('.drop-down-content-box-4');

  if (dropDownContent4.style.display === 'none') {
    dropDownContent4.style.display = 'flex';
    dropDownBar4.style.backgroundColor = '#c9bfa3';
    dropDownBar4.style.borderBottom = 'none';
  } else {
    dropDownContent4.style.display = 'none';
    dropDownBar4.style.backgroundColor = 'transparent';
    dropDownBar4.style.borderBottom = '0.5px solid black';
  }
});

dropDownBar5.addEventListener('click', () => {
  const dropDownContent5 = document.querySelector('.drop-down-content-box-5');

  if (dropDownContent5.style.display === 'none') {
    dropDownContent5.style.display = 'flex';
    dropDownBar5.style.backgroundColor = '#f8edeb';
    dropDownBar5.style.borderBottom = 'none';
  } else {
    dropDownContent5.style.display = 'none';
    dropDownBar5.style.backgroundColor = 'transparent';
    dropDownBar5.style.borderBottom = '0.5px solid black';
  }
});

dropDownBar6.addEventListener('click', () => {
  const dropDownContent6 = document.querySelector('.drop-down-content-box-6');

  if (dropDownContent6.style.display === 'none') {
    dropDownContent6.style.display = 'flex';
    dropDownBar6.style.backgroundColor = '#e1c4c4';
    dropDownBar6.style.borderBottom = 'none';
  } else {
    dropDownContent6.style.display = 'none';
    dropDownBar6.style.backgroundColor = 'transparent';
    dropDownBar6.style.borderBottom = '0.5px solid black';
  }
});

dropDownBar7.addEventListener('click', () => {
  const dropDownContent7 = document.querySelector('.drop-down-content-box-7');

  if (dropDownContent7.style.display === 'none') {
    dropDownContent7.style.display = 'flex';
    dropDownBar7.style.backgroundColor = '#e2d5ca';
    dropDownBar7.style.borderBottom = 'none';
  } else {
    dropDownContent7.style.display = 'none';
    dropDownBar7.style.backgroundColor = 'transparent';
    dropDownBar7.style.borderBottom = '0.5px solid black';
  }
});

dropDownBar8.addEventListener('click', () => {
  const dropDownContent8 = document.querySelector('.drop-down-content-box-8');

  if (dropDownContent8.style.display === 'none') {
    dropDownContent8.style.display = 'flex';
    dropDownBar8.style.backgroundColor = '#c8d2c9';
    dropDownBar8.style.borderBottom = 'none';
  } else {
    dropDownContent8.style.display = 'none';
    dropDownBar8.style.backgroundColor = 'transparent';
    dropDownBar8.style.borderBottom = '0.5px solid black';
  }
});

dropDownBar9.addEventListener('click', () => {
  const dropDownContent9 = document.querySelector('.drop-down-content-box-9');

  if (dropDownContent9.style.display === 'none') {
    dropDownContent9.style.display = 'flex';
    dropDownBar9.style.backgroundColor = '#c9bfa3';
    dropDownBar9.style.borderBottom = 'none';
  } else {
    dropDownContent9.style.display = 'none';
    dropDownBar9.style.backgroundColor = 'transparent';
    dropDownBar9.style.borderBottom = '0.5px solid black';
  }
});
