const colorOne = document.querySelector('.colorOne');
const colorTwo = document.querySelector('.colorTwo');

colorOne.addEventListener('input',()=>{
  document.body.style.background =  `linear-gradient(to right,${colorOne.value},${colorTwo.value}`
})

colorTwo.addEventListener('input',()=>{
  document.body.style.background =  `linear-gradient(to right,${colorOne.value},${colorTwo.value}`
})