/* eslint-disable no-unused-vars */
/* This function is being called from the HTML */

const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function checkForm(form) {
  const error = document.getElementById('errorMessage');

  if (email.value === email.value.toLowerCase()) {
    return true;
  }

  email.style.border = '1px solid red';
  email.style.boxShadow = '0 0 5pt 1pt #ff0000';

  error.innerHTML = 'Email must be lowercase!';
  error.style.display = 'block';

  form.email.focus();
  return false;
}

//* **User input save***/

let localData = { name: '', email: '', message: '' };

const onChangeInputHandler = (event) => {
  switch (event.name) {
    case 'name':
      localData = { ...localData, name: event.value };
      break;
    case 'email':
      localData = { ...localData, email: event.value };
      break;
    case 'message':
      localData = { ...localData, message: event.value };
      break;
    default:
      break;
  }
  localStorage.setItem('data', JSON.stringify(localData));
};

// when page loads
const reloadData = JSON.parse(localStorage.getItem('data'));

if (reloadData) {
  nameInput.value = reloadData.name;
  email.value = reloadData.email;
  message.value = reloadData.message;
}
