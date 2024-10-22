const serviceElements = document.querySelectorAll('.service-icon');
serviceElements.forEach(serviceElement => {
    serviceElement.addEventListener('click', () => {
        serviceElement.classList.toggle('selected');
    });
});

const services = document.querySelectorAll('.service-icon');
let selectedServices = [];

// Function to validate a specific field
function validateField(element, errorMessageId) {
    const value = element.value.trim();
    if (!value) {
        document.getElementById(errorMessageId).style.display = 'block';
        return false;
    } else {
        document.getElementById(errorMessageId).style.display = 'none';
        return true;
    }
}

// Add blur event listeners for each field
document.getElementById('firstName').addEventListener('blur', function() {
    validateField(this, 'firstNameError');
});

document.getElementById('lastName').addEventListener('blur', function() {
    validateField(this, 'lastNameError');
});

document.getElementById('email').addEventListener('blur', function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(this.value.trim());
    if (!isValid) {
        document.getElementById('emailError').style.display = 'block';
    } else {
        document.getElementById('emailError').style.display = 'none';
    }
});

document.getElementById('phone').addEventListener('blur', function() {
    const isValid = this.value.trim().length >= 10;
    if (!isValid) {
        document.getElementById('phoneError').style.display = 'block';
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }
});

document.getElementById('address').addEventListener('blur', function() {
    validateField(this, 'addressError');
});

document.getElementById('city').addEventListener('blur', function() {
    validateField(this, 'cityError');
});

document.getElementById('state').addEventListener('blur', function() {
    const isValid = this.value !== '';
    if (!isValid) {
        document.getElementById('stateError').style.display = 'block';
    } else {
        document.getElementById('stateError').style.display = 'none';
    }
});

document.getElementById('zipCode').addEventListener('blur', function() {
    const zipPattern = /^\d{5}$/; // Adjust for your zip code format
    const isValid = zipPattern.test(this.value.trim());
    if (!isValid) {
        document.getElementById('zipCodeError').style.display = 'block';
    } else {
        document.getElementById('zipCodeError').style.display = 'none';
    }
});

document.getElementById('source').addEventListener('blur', function() {
    const isValid = this.value !== '';
    if (!isValid) {
        document.getElementById('sourceError').style.display = 'block';
    } else {
        document.getElementById('sourceError').style.display = 'none';
    }
});

// Validate selected services
services.forEach(service => {
    service.addEventListener('click', function() {
        const serviceName = service.getAttribute('title');
        if (!selectedServices.includes(serviceName)) {
            selectedServices.push(serviceName);
            service.style.border = '2px solid green'; // Mark selected
        } else {
            selectedServices = selectedServices.filter(s => s !== serviceName);
            service.style.border = 'none';
        }
    });
});

// Handle form submission
document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault()
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function(msg) {
        msg.style.display = 'none';
    });

    // Validate each field on submit
    isValid &= validateField(document.getElementById('firstName'), 'firstNameError');
    isValid &= validateField(document.getElementById('lastName'), 'lastNameError');

    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').style.display = 'block';
    }

    const phone = document.getElementById('phone').value.trim();

    // Check if phone starts with '+' and then validate the length
    if (phone.charAt(0) === '+') {
        if (phone.length < 11 || phone.length > 15) { // Length must be 11-15
            isValid = false;
            document.getElementById('phoneError').style.display = 'block';
        } else {
            document.getElementById('phoneError').style.display = 'none'; // Clear error if valid
        }
    } else {
        if (phone.length < 10 || phone.length > 14) { // Length must be 10-14
            isValid = false;
            document.getElementById('phoneError').style.display = 'block';
        } else {
            document.getElementById('phoneError').style.display = 'none'; // Clear error if valid
        }
    }
    
    isValid &= validateField(document.getElementById('address'), 'addressError');
    isValid &= validateField(document.getElementById('city'), 'cityError');
    isValid &= validateField(document.getElementById('state'), 'stateError');

    const zipCode = document.getElementById('zipCode').value.trim();
    const zipPattern = /^\d{5}$/; // Adjust for your zip code format
    if (!zipPattern.test(zipCode)) {
        isValid = false;
        document.getElementById('zipCodeError').style.display = 'block';
    }

    const source = document.getElementById('source').value;
    if (source === '') {
        isValid = false;
        document.getElementById('sourceError').style.display = 'block';
    }

    // Check for selected services
    if (selectedServices.length === 0) {
        isValid = false;
        document.getElementById('serviceError').style.display = 'block';
    }

    // Prevent form submission if not valid
    if (!isValid) {
        event.preventDefault(); // Prevent form submission
    } 

    var recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
        alert('Please complete the reCAPTCHA.');
        return;
    }
    else {
        console.log(firstName.value, lastName.value, email, phone, address.value, city.value, state.value, zipCode, source, selectedServices, promoCode.value, comments.value);
        emailjs.send("service_equq3ns", "template_zrlwa2n", {
            firstName:firstName.value, 
            lastName:lastName.value, 
            email:email, 
            phone:phone, 
            address:address.value, 
            city:city.value, 
            state:state.value, 
            zipCode:zipCode, 
            source:source, 
            selected:selectedServices, 
            promo:promoCode.value, 
            comments:comments.value,
            "g-recaptcha-response": recaptchaResponse // Pass the reCAPTCHA response to EmailJS (if needed)
          }).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Thanks for the submission. We will reply to you shortly.');
            location.reload();
          }, function(error) {
            // console.log('FAILED...', error);
            alert('Something went wrong. Please try again. Error: ' + error.text);
            location.reload();
          });
    }
});

// Hide error messages on page load
window.onload = function() {
    document.querySelectorAll('.error-message').forEach(function(msg) {
        msg.style.display = 'none';
    });
};




