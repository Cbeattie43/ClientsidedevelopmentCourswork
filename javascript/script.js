// Update Date and Time
function updateDateTime() {
    const now = new Date();
    document.getElementById('date-time').textContent = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.focus(); // Return focus to the body for accessibility
}

// Lazy load images for performance
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.setAttribute("loading", "lazy");
    });
});

// Cookie Consent
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    localStorage.setItem(name, value); // Store in local storage
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [key, value] = cookie.trim().split('=');
        if (key === name) return value;
    }
    return localStorage.getItem(name); // Fallback to local storage
}

function acceptCookies() {
    setCookie('cookieConsent', 'true', 365);
    document.getElementById('cookie-banner').style.display = 'none';
}

function checkCookieConsent() {
    if (!getCookie('cookieConsent')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
}
checkCookieConsent();

// Form Validation
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

// Booking Form Validation
function validateBookingForm() {
    const name = document.getElementById('full-name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const date = document.getElementById('date');
    const time = document.getElementById('time');

    clearErrors();

    let isValid = true;

    if (name.value.trim() === '') {
        showError(name, 'Full name is required.');
        isValid = false;
    }

    if (email.value.trim() === '' || !/^\S+@\S+\.\S+$/.test(email.value)) {
        showError(email, 'Valid email address is required.');
        isValid = false;
    }

    if (phone.value.trim() !== '' && !/^\d{10,15}$/.test(phone.value)) {
        showError(phone, 'Phone number must be between 10 and 15 digits.');
        isValid = false;
    }

    if (date.value.trim() === '') {
        showError(date, 'Preferred date is required.');
        isValid = false;
    }

    if (time.value.trim() === '') {
        showError(time, 'Preferred time is required.');
        isValid = false;
    }

    if (isValid) {
        alert('Your booking has been submitted successfully!');
    }

    return isValid;
}

// Investment Calculator
function calculateInvestment() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    const amount = principal * Math.pow(1 + rate, years);
    document.getElementById('result').textContent = `Future Value: £${amount.toFixed(2)}`;
}

// Toggle FAQ Answer
function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const isVisible = answer.style.display === 'block';
    document.querySelectorAll('.faq-answer').forEach(el => el.style.display = 'none'); // Close all answers
    answer.style.display = isVisible ? 'none' : 'block'; // Toggle current answer
}

// Popups for Services
function popupfunct1() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function popupfunct2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}

function popupfunct3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
}

// Toggle Burger Menu
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('show');
}

// Popover Functions
function openPopover(element, title, text) {
    const popover = document.getElementById('cardPopover');
    const popoverTitle = document.getElementById('popoverTitle');
    const popoverText = document.getElementById('popoverText');

    popoverTitle.textContent = title;
    popoverText.textContent = text;

    const rect = element.getBoundingClientRect();
    popover.style.top = `${rect.bottom + window.scrollY}px`;
    popover.style.left = `${rect.left + window.scrollX}px`;
    popover.style.display = 'block';
}

function closePopover() {
    const popover = document.getElementById('cardPopover');
    popover.style.display = 'none';
}
