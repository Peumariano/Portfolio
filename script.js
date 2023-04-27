const desiredElement = document.getElementById('navbar'); // elemento alvo
const pixelsAmount = '1'; // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function() {
    if (window.scrollY > pixelsAmount) {
    	desiredElement.classList.add('changeStyle'); // adiciona classe "changeColor"
    } else {
      desiredElement.classList.remove('changeStyle'); // remove classe "changeColor"
    }
});

const buttonNav = function() {
  if (toggleButton = true) {
    const toggleButton = document.getElementById('button-nav').click();
    document.getElementById('navbarTogglerDemo02').style.backgroundColor="#fff";
  }
}
  

