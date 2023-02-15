let i = 0;
const txt = 'Welcome to our online bootcamp'; /* The text */
const speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('typingTitle').innerHTML += txt.charAt(i);
    i += 1;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
