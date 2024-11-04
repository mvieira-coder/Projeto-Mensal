document.addEventListener('DOMContentLoaded', () => {
    const botaoModoNoturno = document.getElementById('botao-modo-noturno');
    const corpo = document.body;
  
    botaoModoNoturno.addEventListener('change', () => {
      corpo.classList.toggle('modo-noturno');
  
      // Altere o texto do botão ou o comportamento conforme desejado, se necessário.
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.querySelector('.search-box');
    const jogos = document.querySelectorAll('.lancamentos div');
  
    searchBox.addEventListener('input', () => {
      const query = searchBox.value.toLowerCase().trim();
  
      jogos.forEach(jogo => {
        const nomeJogo = jogo.querySelector('p').textContent.toLowerCase();
  
        if (nomeJogo.includes(query)) {
          jogo.style.display = 'block';
        } else {
          jogo.style.display = 'none';
        }
      });
    });
  });