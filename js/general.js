var toggle = document.querySelectorAll('.toggle-container');


for(i = 0; i < toggle.length; i++) {
  toggle[i].addEventListener('click', toggleAction);
}

function toggleAction(el) {
  el.preventDefault();
  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    this.classList.add('active');
  }
}
