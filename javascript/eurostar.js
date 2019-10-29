/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var togglePassword = document.getElementById("togglePassword");

var showOrHidePassword = () => {
  var password = document.getElementById('wachtwoord');
  if (password.type === 'password') {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
};

togglePassword.addEventListener("click", showOrHidePassword);


/*Raymond, E . (2018, 20 juli). How to display password in a form input. Geraadpleegd op 27 oktober 2019, van https://codeburst.io/how-to-display-password-in-a-form-input-9381310c88c6*/