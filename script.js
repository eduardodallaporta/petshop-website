document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const cadastroForm = document.getElementById('cadastroForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            console.log('Login:', email, password);
            alert('Login realizado com sucesso!');
        });
    }

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nome = document.getElementById('cadastroNome').value;
            const email = document.getElementById('cadastroEmail').value;
            const password = document.getElementById('cadastroPassword').value;
            console.log('Cadastro:', nome, email, password);
            alert('Cadastro realizado com sucesso!');
        });
    }
});

function agendarServico(servico) {
    alert(`Serviço agendado: ${servico}`);
}