const colorOne = document.querySelector('.colorOne');
const colorTwo = document.querySelector('.colorTwo');
const first = document.getElementById('first');
const second = document.getElementById('second');

colorOne.addEventListener('input',()=>{
  document.body.style.background =  `linear-gradient(to right,${colorOne.value},${colorTwo.value}`;
  first.innerText = `first color: ${colorOne.value}`
})

colorTwo.addEventListener('input',()=>{
  document.body.style.background =  `linear-gradient(to right,${colorOne.value},${colorTwo.value}`
  second.innerText = `first color: ${colorTwo.value}`
})