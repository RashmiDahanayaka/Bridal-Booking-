// Validate the form
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate the required fields
    const requiredFields = ['name', 'phone_number', 'email', 'appointment_date', 'appointment_time', 'colour_preference', 'fabric_preference', 'batik_design_preference'];

    for (const field of requiredFields) {
        const input = document.querySelector(`#${field}`);

        if (input.value === '') {
            alert(`The ${field} field is required.`);
            input.focus();
            return;
        }
    }

    // Send the form data to the server
    // ...
});
