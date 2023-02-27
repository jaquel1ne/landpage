const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Verifica se o campo de e-mail está vazio
  if (!emailInput.value) {
    alert('Por favor, preencha o campo de e-mail!');
  } else {
    // Envia o formulário para o servidor
    // Você pode usar a biblioteca "fetch" ou outro método para enviar o formulário para o servidor
    console.log('Enviando formulário...');
  }
});

