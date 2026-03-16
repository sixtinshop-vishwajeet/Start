// script.js

// Function for form validation
function validateForm() {
    const form = document.forms["myForm"];
    const name = form["name"].value;
    const email = form["email"].value;
    let valid = true;

    if (name === "") {
        alert("Name must be filled out");
        valid = false;
    }
    if (email === "" || !validateEmail(email)) {
        alert("Valid email must be filled out");
        valid = false;
    }

    return valid;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Function for smooth scrolling
function smoothScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    function animation(currentTime) {
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Event listeners for interactive features
document.getElementById("myButton").addEventListener("click", function() {
    const target = document.getElementById("myTarget");
    smoothScroll(target, 1000);
});

// Form event listener
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});