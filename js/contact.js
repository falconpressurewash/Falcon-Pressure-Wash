console.log("Contact form script added!");
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Check reCAPTCHA response
  var recaptchaResponse = grecaptcha.getResponse();
  if (recaptchaResponse.length === 0) {
    alert('Please complete the reCAPTCHA.');
    return;
  }

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  // Validate fields if necessary
  if (!name || !email || !phone || !message) {
    alert('All fields are required.');
    return;
  }

  // Send email using EmailJS
  emailjs.send("service_equq3ns", "template_zrlwa2n", {
    name: name,
    email: email,
    phone: phone,
    message: message,
    "g-recaptcha-response": recaptchaResponse // Pass the reCAPTCHA response to EmailJS (if needed)
  }).then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    alert('Thanks for the submission. We will reply to you shortly.');
    location.reload();
  }, function(error) {
    console.log('FAILED...', error);
    alert('Something went wrong. Please try again. Error: ' + error.text);
  });
});
