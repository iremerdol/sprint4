$(document).ready(function () {
  // Initialize jQuery UI datepicker
  $("#datepicker").datepicker();

  // Validate the form
  $("#contact-form").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
      },
      message: {
        required: true,
      },
    },
    messages: {
      name: "Please enter your name",
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address",
      },
      phone: "Please enter your phone number",
      message: "Please enter your message",
    },
    submitHandler: function (form) {
      // Get form data
      var formData = $(form).serializeArray();

      // Create comment HTML
      var commentHtml = "<li>";
      formData.forEach(function (field) {
        commentHtml +=
          "<strong>" + field.name + ":</strong> " + field.value + "<br>";
      });
      commentHtml += "</li>";

      // Append comment to comments list
      $("#comments-list").append(commentHtml);

      // Clear the form after submission
      form.reset();

      // Display success message using Magnific Popup
      $.magnificPopup.open({
        items: {
          src: '<div class="popup-text">Your form was submitted successfully!</div>',
          type: "inline",
        },
      });
    },
  });

  // Initialize jQuery Mask Plugin for phone number
  $("#phone").mask("000-000-0000");
});

//I identified the errors from the ids I pulled with getElementById()
var nameError = document.getElementById("name-error");
var surnameError = document.getElementById("surname-error");
var countryError = document.getElementById("country-error");
var emailError = document.getElementById("email-error");
var commentError = document.getElementById("comment-error");
var submitError = document.getElementById("submit-error");
var checkedError = document.getElementById("checkBox-error");
//I checked name's validation
function validateName() {
  debugger;
  var name = document.getElementById("name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required.";
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
//I checked surname's validation
function validateSurname() {
  var surname = document.getElementById("surname").value;
  if (surname.length == 0) {
    surnameError.innerHTML = "Surname is required.";
    return false;
  }
  surnameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
//I checked country's validation
function validateCountry() {
  var country = document.getElementById("autocomplete").value;
  if (country == "") {
    countryError.innerHTML = "Country is required.";
    return false;
  }
  countryError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
//I checked email's validation
function validateEmail() {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var email = document.getElementById("email").value;
  if (email.length == 0) {
    emailError.innerHTML = "E-mail is required.";
    return false;
  }
  if (!email.toLowerCase().match(validRegex)) {
    emailError.innerHTML = "E-mail is invalid.";
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
//I checked comment's validation
function validateComment() {
  var comment = document.getElementById("comment").value;
  var required = 30;
  var left = required - comment.length;

  if (left > 0) {
    commentError.innerHTML = left + " more \n characters required.";
    return false;
  }

  commentError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
//I checked checkbox's validation
function validateCheck() {
  debugger;
  let isChecked = document.getElementById("checkBox1").checked;

  if (isChecked) {
    checkedError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return isChecked;
  }

  checkedError.innerHTML = "Checked is required.";

  return isChecked;
}
//I checked form's validation
//I provided validate by checking all functions within this function
function validateForm() {
  debugger;
  validateName();
  validateSurname();
  validateCountry();
  validateEmail();
  validateComment();
  validateCheck();
  if (
    !validateName() ||
    !validateSurname() ||
    !validateCountry() ||
    !validateEmail() ||
    !validateComment() ||
    !validateCheck()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to submit.";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
  return true;
}
