 console.log("added")

 document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Send email using EmailJS
    emailjs.send("service_equq3ns", "template_zrlwa2n", {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
    }).then(function(response) {
      alert('Thanks for the submission. We will reply you shortly');
      console.log(event)
    }, function(error) {
      alert('Something went wrong, Please try again ' + error.text);
    });
  });
