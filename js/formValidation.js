/* eslint-disable no-unused-vars */
/* This function is being called from the HTML */
function checkForm(form) {
  const email = document.getElementById('email');
  console.log(email);
  if (email.value === email.value.toLowerCase()) {
    console.log(true);
    return true;
  } else {

    //email
    //border - red
    //shadow - red
    //innerHTML - error
    //Email must be lowercase!
    //display - block - error

    form.email.focus();
    return false;

  }
}
