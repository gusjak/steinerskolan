const buttonOne = document.querySelector('.preschool-button-1');
const buttonTwo = document.querySelector('.preschool-button-2');
const buttonThree = document.querySelector('.preschool-button-3');
const imageOne = document.querySelector('.preschool-image-1');
const imageTwo = document.querySelector('.preschool-image-2');
const imageThree = document.querySelector('.preschool-image-3');
const textContentOne = document.querySelector('.preschool-text-content-1');
const textContentTwo = document.querySelector('.preschool-text-content-2');
const textContentThree = document.querySelector('.preschool-text-content-3');

buttonOne.addEventListener('click', () => {
  buttonOne.style.backgroundColor = 'black';
  buttonOne.style.color = 'white';
  imageOne.style.display = 'flex';
  textContentOne.style.display = 'flex';
  buttonTwo.style.backgroundColor = 'white';
  buttonTwo.style.color = 'black';
  buttonThree.style.backgroundColor = 'white';
  buttonThree.style.color = 'black';
  imageTwo.style.display = 'none';
  imageThree.style.display = 'none';
  textContentTwo.style.display = 'none';
  textContentThree.style.display = 'none';
});

buttonTwo.addEventListener('click', () => {
  buttonTwo.style.backgroundColor = 'black';
  buttonTwo.style.color = 'white';
  imageTwo.style.display = 'flex';
  textContentTwo.style.display = 'flex';
  buttonOne.style.backgroundColor = 'white';
  buttonOne.style.color = 'black';
  buttonThree.style.backgroundColor = 'white';
  buttonThree.style.color = 'black';
  imageOne.style.display = 'none';
  imageThree.style.display = 'none';
  textContentOne.style.display = 'none';
  textContentThree.style.display = 'none';
});

buttonThree.addEventListener('click', () => {
  buttonThree.style.backgroundColor = 'black';
  buttonThree.style.color = 'white';
  imageThree.style.display = 'flex';
  textContentThree.style.display = 'flex';
  buttonOne.style.backgroundColor = 'white';
  buttonOne.style.color = 'black';
  buttonTwo.style.backgroundColor = 'white';
  buttonTwo.style.color = 'black';
  imageOne.style.display = 'none';
  imageTwo.style.display = 'none';
  textContentOne.style.display = 'none';
  textContentTwo.style.display = 'none';
});
