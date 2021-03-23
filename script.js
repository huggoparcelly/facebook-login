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

window.onload = function () {
  bntLogin();
};
