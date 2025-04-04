// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 60,  // Adjust offset for the fixed header
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name === '' || email === '' || message === '') {
        e.preventDefault();  // Prevent form submission
        alert('Please fill out all fields before submitting.');
    } else {
        alert('Your message has been sent successfully!');
    }
});

// Optional: Display current year in the footer
document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Ayodele Prayer Ayonitemi. All rights reserved.`;
