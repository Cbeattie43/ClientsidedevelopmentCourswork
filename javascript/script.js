
function updateDateTime() {
    const now = new Date();
    document.getElementById('date-time').textContent = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function updateDateTime() {
            const now = new Date();
            document.getElementById('date-time').textContent = now.toLocaleString();
        }
        setInterval(updateDateTime, 1000);
        updateDateTime();

        function validateForm() {
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const message = document.getElementById('message');

            clearErrors();

            if (name.value.trim() === '') {
                showError(name, 'Name is required.');
                isValid = false;
            }

            if (email.value.trim() === '' || !/^\S+@\S+\.\S+$/.test(email.value)) {
                showError(email, 'Valid email is required.');
                isValid = false;
            }

            if (phone.value.trim() !== '' && !/^\d{10,15}$/.test(phone.value)) {
                showError(phone, 'Phone number must be 10-15 digits.');
                isValid = false;
            }

            if (message.value.trim() === '') {
                showError(message, 'Message is required.');
                isValid = false;
            }

            return isValid;
        }

        function showError(input, message) {
            const error = document.createElement('div');
            error.className = 'error-message';
            error.textContent = message;
            input.parentElement.appendChild(error);
        }

        function clearErrors() {
            document.querySelectorAll('.error-message').forEach(error => error.remove());
        }
        
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    