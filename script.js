const btn = document.querySelectorAll('.note-btn');
const submit = document.querySelector('button');
const box = document.querySelector('.inner-rate-box');
const box2 = document.querySelector('.inner-submit-box');
const chosen = document.querySelector('.chosen');
const body = document.querySelector('body');

function note(index) {
  chosen.innerText = index + 1;
}

console.log(window.innerHeight);
body.style.maxHeight = window.innerHeight;


function handleActive(event, index) {
  btn.forEach((btn) => {
    btn.classList.remove('active')
  })
  event.target.classList.add('active');
  note(index)
}

function handleSubmit() {
  box.classList.add('submit');
  box2.classList.add('submit');
}

btn.forEach((btn, index) => {
  btn.addEventListener('click', function(event) {
    handleActive(event, index);
  })
})

submit.addEventListener('click', handleSubmit);
