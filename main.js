let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Desarrollo front end y estudiante de veterinaria.')
  .pauseFor(200)
  .deleteChars(10)
  .start();


