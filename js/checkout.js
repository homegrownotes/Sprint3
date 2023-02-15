// Exercise 6
function validate() {
  var error = 0;
  // Get the input fields
  var fName = document.getElementById("fName");
  var fLastN = document.getElementById("fLastN");
  var fEmail = document.getElementById("fEmail");
  var fPassword = document.getElementById("fPassword");
  var fAddress = document.getElementById("fAddress");
  var fPhone = document.getElementById("fPhone");

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorLastN = document.getElementById("errorLastN");
  var errorEmail = document.getElementById("errorEmail");
  var errorPassword = document.getElementById("errorPassword");
  var errorAddress = document.getElementById("errorAddress");
  var errorPhone = document.getElementById("errorPhone");

  // Validate fields entered by the user: name, phone, password, and email
  if (fName.value.length < 3 || !/^[a-zA-Z]+$/.test(fName.value)) {
    error++;
    errorName.textContent =
      "This field is required and must have, at least, 3 characters";
  } else   {
    errorName.textContent = "";
  }

  if (fLastN.value.length < 3 || !/^[a-zA-Z]+$/.test(fLastN.value)) {
    error++;
    errorLastN.textContent =
      "This field is required and must have, at least, 3 characters";
  } else {
    errorLastN.textContent = "";
  }

  if (fEmail.value.length < 3 || !/\S+@\S+\.\S+/.test(fEmail.value)) {
    error++;
    errorEmail.textContent =
      "This field is required and must contain an '@' and have, at least, 3 characters";
  } else {
    errorEmail.textContent = "";
  }

  if (
    fPassword.value.length < 3 ||
    !/\d/.test(fPassword.value) ||
    !/[a-zA-Z]/.test(fPassword.value)
  ) {
    error++;
    errorPassword.textContent = "Enter a correct password";
  } else {
    errorPassword.textContent = "";
  }

  if (fAddress.value.length < 3) {
    error++;
    errorAddress.textContent =
      "This field is required and must have, at least, 3 characters";
  } else {
    errorAddress.textContent = "";
  }

  if (fPhone.value.length != 9 || !/^\d+$/.test(fPhone.value)) {
    error++;
    errorPhone.textContent =
      "Invalid phone number!! Must be 9 digits with no letters";
  } else {
    errorPhone.textContent = "";
  }

  if (error > 0) {
    alert("Error");
  } else {
    alert("OK");
  }
}
