var toggle = document.querySelectorAll('.toggle-container');


toggle.forEach(trigger => {
  trigger.addEventListener('click', toggleAction);
}, false);

function toggleAction(el) {
  el.preventDefault();
  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    this.classList.add('active');
  }
}
