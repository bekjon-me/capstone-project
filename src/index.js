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

const cardTitles = document.querySelectorAll('#mentors .card-title');
const cardTexts = document.querySelectorAll('.text-muted');
const cardImages = document.querySelectorAll('.img-fluid.rounded-start');
const descriptions = document.querySelectorAll('.description');

const speakers = [
  {
    name: 'Bekjon Ishpulatov',
    title: 'Software Engineer',
    desciption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa nulla quam aspernatur voluptatem, cum repellendus sint aliquam sit sequi?',
    image: './src/images/mentor1.jpg',
  },
  {
    name: 'Steve Vozniak',
    title: 'Backend Engineer',
    desciption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa nulla quam aspernatur voluptatem, cum repellendus sint aliquam sit sequi?',
    image: './src/images/mentor2.jpg',
  },
  {
    name: 'Maria Sharapova',
    title: 'HR Manager',
    desciption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa nulla quam aspernatur voluptatem, cum repellendus sint aliquam sit sequi?',
    image: './src/images/mentor3.jpg',
  },
  {
    name: 'Serena Uilyams',
    title: 'Frontend Engineer',
    desciption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa nulla quam aspernatur voluptatem, cum repellendus sint aliquam sit sequi?',
    image: './src/images/mentor4.webp',
  },
  {
    name: 'Sherlock Holmes',
    title: 'Fullstack Engineer',
    desciption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa nulla quam aspernatur voluptatem, cum repellendus sint aliquam sit sequi?',
    image: './src/images/mentor5.jpeg',
  },
  {
    name: 'John Smith',
    title: 'Software Engineer',
    desciption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa nulla quam aspernatur voluptatem, cum repellendus sint aliquam sit sequi?',
    image: './src/images/mentor6.jpeg',
  },
];

window.addEventListener('load', () => {
  speakers.forEach((speaker, index) => {
    cardTitles[index].textContent = speaker.name;
    cardTexts[index].textContent = speaker.title;
    descriptions[index].textContent = speaker.desciption;
    cardImages[index].src = speaker.image;
  });
});
