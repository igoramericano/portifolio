document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const senhaInput = document.getElementById('isenha');

  // Criar botão para mostrar/ocultar senha
  const toggleBtn = document.createElement('button');
  toggleBtn.type = 'button';
  toggleBtn.textContent = 'Mostrar';
  toggleBtn.style.marginLeft = '8px';
  toggleBtn.style.cursor = 'pointer';

  senhaInput.parentNode.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    if (senhaInput.type === 'password') {
      senhaInput.type = 'text';
      toggleBtn.textContent = 'Ocultar';
    } else {
      senhaInput.type = 'password';
      toggleBtn.textContent = 'Mostrar';
    }
  });

  // Validação simples no envio
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const loginValue = form.login.value.trim();
    const senhaValue = form.senha.value.trim();

    if (loginValue === '' || senhaValue === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (senhaValue.length < 6) {
      alert('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    // Aqui você pode fazer a chamada ao backend ou simular sucesso
    alert('Login enviado com sucesso!');

    // Se quiser realmente enviar, descomente a linha abaixo
    // form.submit();
  });
});
