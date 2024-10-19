// document.addEventListener('DOMContentLoaded', function() {
//     const serviceElements = document.querySelectorAll('.service-icon');
//     serviceElements.forEach(serviceElement => {
//         serviceElement.addEventListener('click', () => {
//             serviceElement.classList.toggle('selected');
//         });
//     });


//     const services = document.querySelectorAll('.service-icon');
//     let selectedServices = [];

//     services.forEach(service => {
//         service.addEventListener('click', function() {
//             const serviceName = service.getAttribute('title');
//             if (!selectedServices.includes(serviceName)) {
//                 selectedServices.push(serviceName);
//                 service.style.border = '2px solid green';  // Mark selected
//             } else {
//                 selectedServices = selectedServices.filter(s => s !== serviceName);
//                 service.style.border = 'none'; 
//             }
//         });
//     });

//     document.getElementById('quoteForm').addEventListener('submit', function(event) {
//         event.preventDefault(); 

//         const firstName = document.getElementById('firstName').value;
//         const lastName = document.getElementById('lastName').value;
//         const email = document.getElementById('email').value;
//         const phone = document.getElementById('phone').value;
//         const address = document.getElementById('address').value;
//         const city = document.getElementById('city').value;
//         const state = document.getElementById('state').value;
//         const zipCode = document.getElementById('zipCode').value;
//         const source = document.getElementById('source').value;
//         const promoCode = document.getElementById('promoCode').value;
//         const comments = document.getElementById('comments').value;

//         if (selectedServices.length === 0) {
//             alert('Please select at least one service.');
//             return;
//         }

//         alert(`
//             First Name: ${firstName}
//             Last Name: ${lastName}
//             Email: ${email}
//             Phone: ${phone}
//             Address: ${address}
//             City: ${city}
//             State: ${state}
//             Zip Code: ${zipCode}
//             Source: ${source}
//             Promo Code: ${promoCode}
//             Comments: ${comments}
//             Selected Services: ${selectedServices.join(', ')}
//         `);
//     });
// });


// console.log("added")
// document.addEventListener('DOMContentLoaded', function() {
//     const services = document.querySelectorAll('.service-icon');
//     let selectedServices = [];

//     services.forEach(service => {
//         service.addEventListener('click', function() {
//             const serviceName = service.getAttribute('title');
//             if (!selectedServices.includes(serviceName)) {
//                 selectedServices.push(serviceName);
//                 service.style.border = '2px solid green';  // Mark selected
//             } else {
//                 selectedServices = selectedServices.filter(s => s !== serviceName);
//                 service.style.border = 'none';  // Deselect
//             }
//         });
//     });

//     document.getElementById('quoteForm').addEventListener('submit', function(event) {
//         event.preventDefault();  // Prevent form from submitting normally

//         // Collect form data
//         const firstName = document.getElementById('firstName').value.trim();
//         const lastName = document.getElementById('lastName').value.trim();
//         const email = document.getElementById('email').value.trim();
//         const phone = document.getElementById('phone').value.trim();
//         const address = document.getElementById('address').value.trim();
//         const city = document.getElementById('city').value.trim();
//         const state = document.getElementById('state').value;
//         const zipCode = document.getElementById('zipCode').value.trim();
//         const source = document.getElementById('source').value;
//         const promoCode = document.getElementById('promoCode').value.trim();
//         const comments = document.getElementById('comments').value.trim();

//         // Clear previous error messages
//         const errorFields = document.querySelectorAll('.error-message');
//         errorFields.forEach(error => error.remove());

//         // Remove is-invalid class if it exists
//         const invalidFields = document.querySelectorAll('.is-invalid');
//         invalidFields.forEach(field => field.classList.remove('is-invalid'));

//         let isValid = true;

//         // Simple validation helper
//         const showError = (element, message) => {
//             const error = document.createElement('div');
//             error.className = 'error-message text-danger';
//             error.innerText = message;
//             element.classList.add('is-invalid');  // Add Bootstrap's invalid class
//             element.parentElement.appendChild(error);
//             isValid = false;
//         };

//         // Validate individual fields
//         if (!firstName) showError(document.getElementById('firstName'), 'First name is required.');
//         if (!lastName) showError(document.getElementById('lastName'), 'Last name is required.');
//         if (!email || !/\S+@\S+\.\S+/.test(email)) showError(document.getElementById('email'), 'Please enter a valid email.');
//         if (!phone || !/^\d{10}$/.test(phone)) showError(document.getElementById('phone'), 'Please enter a valid phone number (10 digits).');
//         if (!address) showError(document.getElementById('address'), 'Address is required.');
//         if (!city) showError(document.getElementById('city'), 'City is required.');
//         if (!state) showError(document.getElementById('state'), 'Please select a state.');
//         if (!zipCode || !/^\d{5}$/.test(zipCode)) showError(document.getElementById('zipCode'), 'Please enter a valid zip code (5 digits).');
//         if (!source) showError(document.getElementById('source'), 'Please select how you heard about us.');

//         // Check if at least one service is selected
//         if (selectedServices.length === 0) {
//             const serviceContainer = document.getElementById('services');
//             showError(serviceContainer, 'Please select at least one service.');
//         }

//         if (isValid) {
//             // Proceed with form submission or any other action
//             alert('Form is valid and ready for submission!');
//         }
//     });
// });



//     const serviceElements = document.querySelectorAll('.service-icon');
//     serviceElements.forEach(serviceElement => {
//         serviceElement.addEventListener('click', () => {
//             serviceElement.classList.toggle('selected');
//         });
//     });

//     const services = document.querySelectorAll('.service-icon');
//     let selectedServices = [];


// document.getElementById('quoteForm').addEventListener('submit', function(event) {
//     let isValid = true;

//     // Clear previous error messages
//     document.querySelectorAll('.error-message').forEach(function(msg) {
//         msg.style.display = 'none';
//     });

//     // Validate First Name
//     const firstName = document.getElementById('firstName').value.trim();
//     if (firstName === '') {
//         isValid = false;
//         document.getElementById('firstNameError').style.display = 'block';
//     }

//     // Validate Last Name
//     const lastName = document.getElementById('lastName').value.trim();
//     if (lastName === '') {
//         isValid = false;
//         document.getElementById('lastNameError').style.display = 'block';
//     }

//     // Validate Email
//     const email = document.getElementById('email').value.trim();
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//         isValid = false;
//         document.getElementById('emailError').style.display = 'block';
//     }

//     // Validate Phone
//     const phone = document.getElementById('phone').value.trim();
//     if (phone.length < 10) {
//         isValid = false;
//         document.getElementById('phoneError').style.display = 'block';
//     }

//     // Validate Address
//     const address = document.getElementById('address').value.trim();
//     if (address === '') {
//         isValid = false;
//         document.getElementById('addressError').style.display = 'block';
//     }

//     // Validate City
//     const city = document.getElementById('city').value.trim();
//     if (city === '') {
//         isValid = false;
//         document.getElementById('cityError').style.display = 'block';
//     }

//     // Validate State
//     const state = document.getElementById('state').value;
//     if (state === '') {
//         isValid = false;
//         document.getElementById('stateError').style.display = 'block';
//     }

//     // Validate Zip Code
//     const zipCode = document.getElementById('zipCode').value.trim();
//     const zipPattern = /^\d{5}$/; // Adjust for your zip code format
//     if (!zipPattern.test(zipCode)) {
//         isValid = false;
//         document.getElementById('zipCodeError').style.display = 'block';
//     }

//     // Validate Source
//     const source = document.getElementById('source').value;
//     if (source === '') {
//         isValid = false;
//         document.getElementById('sourceError').style.display = 'block';
//     }


//     services.forEach(service => {
//         service.addEventListener('click', function() {
//             const serviceName = service.getAttribute('title');
//             if (!selectedServices.includes(serviceName)) {
//                 selectedServices.push(serviceName);
//                 service.style.border = '2px solid green';  // Mark selected
//             } else {
//                 selectedServices = selectedServices.filter(s => s !== serviceName);
//                 service.style.border = 'none'; 
//             }
//         });
//     });

//     const promoCode = document.getElementById('promoCode').value;
//     const comments = document.getElementById('comments').value;

//     if (!isValid) {
//         event.preventDefault(); // Prevent form submission
//     }

//     else{
//         console.log(firstName
//             ,lastName
//             ,email
//             ,phone
//             ,address
//             ,city
//             ,state
//             ,zipCode
//             ,source
//             ,selectedServices
//             ,promoCode
//             ,comments)
//     }


// });