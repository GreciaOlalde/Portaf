let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrolladora de sitios web y Consultora Jr en programas de intervención educativa.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
