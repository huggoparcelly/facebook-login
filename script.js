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

const generChecked = () => {
  const genderCheck = document.getElementsByName('gender');
  for (let i = 0; i < genderCheck.length; i += 1) {
    if (genderCheck[i].checked) {
      return genderCheck[i].value;
    }
  }
};

const welcome = () => {
  // capturar o nome, sobrenome, tel-email, data de nascimento, genero
  const name = document.querySelector('#firstname').value;
  const lastName = document.querySelector('#lastname').value;
  const celEmail = document.querySelector('#phone_email').value;
  const birthDate = document.querySelector('#birth-date').value;
  document.querySelector('#welcome').innerText = 'Bem vindo(a)';
  document.querySelector('.welcome-div').innerText = `Olá, ${name} ${lastName}
  email ou telefone: ${celEmail}
  Data de nascimento: ${birthDate}
  Gêreno: ${generChecked()}`;
};

//  validação dos campos de texto
function validate() {
  // capturar cada campo de input
  const getForms = document.getElementsByClassName('cadastro')[0];
  // verificação de inputs vazios
  for (let i = 0; i <= 4; i += 1) {
    if (getForms[i].value === '') {
      document.getElementById('camposInvalidos').innerText = 'Campos inválidos';
    } else {
      document.querySelector('.right-content').style.display = 'none';
      welcome();
    }
  }
}

// botão de cadastro
function btnCadastre() {
  const getSubmit = document.getElementById('facebook-register');
  getSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
  });
}

const getRadio = document.getElementsByName('gender'); // captura os botões radio
const customTextBox = document.getElementById('gender-custom'); // captura a caixa de texto

// evento para o botao radio feminino
getRadio[0].onclick = (event) => {
  if (event.target.checked) {
    customTextBox.style.display = 'none';
  }
};

// evento para o botao radio masculino
getRadio[1].onclick = (e) => {
  if (e.target.checked) {
    customTextBox.style.display = 'none';
  }
};

// evento para o botao radio personalizado
getRadio[2].onclick = (event) => {
  if (event.target.checked) {
    customTextBox.style.display = 'flex'; // aparecer a caixa de texto
  }
};

window.onload = () => {
  bntLogin();
  btnCadastre();
};
