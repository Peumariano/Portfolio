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
  }else{
    const toggleButton = document.getElementById('button-nav').click();
    document.getElementById('navbarTogglerDemo02').style.backgroundColor="#8f5be4";
  }
}
  

//scroll animation

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section"); // Seleciona todas as seções

  // Função para verificar a visibilidade da seção na tela
  const checkVisibility = () => {
    const windowHeight = window.innerHeight; // Altura da janela
    const scrollY = window.scrollY; // Distância da rolagem da página

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top + scrollY; // Posição da seção em relação ao topo
      const sectionHeight = section.offsetHeight; // Altura da seção

      // Verifica se a seção entrou na área visível da tela
      if (scrollY + windowHeight > sectionTop + sectionHeight / 3) {
        section.classList.add("visible"); // Adiciona a classe 'visible' para iniciar a animação
      }
    });
  };

  // Verifica visibilidade ao rolar a página
  window.addEventListener("scroll", checkVisibility);

  // Verifica a visibilidade assim que a página for carregada
  checkVisibility();
});


const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.getElementById('body');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});