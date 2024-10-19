 console.log("added")
 document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Send email using EmailJS
    emailjs.send("service_cxjwvxg", "template_ytnf5q3", {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    }).then(function(response) {
      alert('Thanks for the submission. We will reply you shortly');
    }, function(error) {
      alert('Something went wrong' + error.text);
    });
  });
