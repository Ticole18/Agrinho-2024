// Exemplo simples de validação de formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validação básica
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
    }
    
    // Simulação de envio bem-sucedido
    alert('Mensagem enviada com sucesso!');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
