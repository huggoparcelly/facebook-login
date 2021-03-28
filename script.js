// capturar a informação do email ou telefone
function alertEmailTelefone() {
  const getEmailTelefone = document.getElementById('user-email-phone');
  alert(getEmailTelefone.value);
}

// capturar o botão
function bntLogin() {
  const getBtnLogin = document.querySelector('#button-login');
  getBtnLogin.addEventListener('click', alertEmailTelefone);
}

function validate() {
  // capturar cada campo de input
  const getForms = document.getElementsByClassName('cadastro')[0];
  // verificação de inputs vazios
  for (let i = 0; i <= 4; i += 1) {
    if (getForms[i].value === '') {
      document.getElementById('camposInvalidos').innerText = 'Campos inválidos';
    }
  }
}

function btnCadastre() {
  const getSubmit = document.getElementById('facebook-register');
  getSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
  });
}

window.onload = function () {
  bntLogin();
  btnCadastre();
};
