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
  if (fName.value == "" || fName.value.length < 3 || !/^[a-zA-Z]+$/.test(fName.value)) {
    error++;
    }

  if (fLastN.value == "" || fLastN.value.length < 3 || !/^[a-zA-Z]+$/.test(fLastN.value)) {
    error++;
    }

  if (fEmail.value.length < 3 || !/\S+@\S+\.\S+/.test(fEmail.value)) {
    error++;
    }

  if (
    fPassword.value.length < 3 ||
    !/\d/.test(fPassword.value) ||
    !/[a-zA-Z]/.test(fPassword.value)
  ) {
    error++;
  }

  if (fAddress.value.length < 3) {
    error++;
    }

  if (fPhone.value.length != 9 || !/^\d+$/.test(fPhone.value)) {
    error++;
    }

  if (error > 0) {
    alert("please fill in the form correctly");
  } else {
    alert("OK");
  }
}
