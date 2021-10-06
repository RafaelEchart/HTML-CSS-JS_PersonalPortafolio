/* eslint-disable no-unused-vars */
/* This function is being called from the HTML */
function checkForm(form) {
  const email = document.getElementById('email');
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
