/*===================================
  Authentication JavaScript
  ===================================*/

document.addEventListener('DOMContentLoaded', function() {
    initAuthForms();
});

function initAuthForms() {
    const clientLoginForm = document.getElementById('client-login-form');
    const professionalSignupForm = document.getElementById('professional-signup-form');

    if (clientLoginForm) {
        clientLoginForm.addEventListener('submit', handleClientLogin);
    }

    if (professionalSignupForm) {
        professionalSignupForm.addEventListener('submit', handleProfessionalSignup);
    }
}

function handleClientLogin(e) {
    e.preventDefault();

    const email = document.getElementById('client-email').value;
    const password = document.getElementById('client-password').value;

    // Simulate login
    console.log('Client Login:', { email, password });

    alert(`Welcome back!\n\nThis is a demo. In production, this would:\n- Authenticate with backend\n- Create session\n- Redirect to client dashboard\n\nEmail: ${email}`);

    // In production, redirect to client dashboard
    // window.location.href = 'client-dashboard.html';
}

function handleProfessionalSignup(e) {
    e.preventDefault();

    const name = document.getElementById('prof-name').value;
    const email = document.getElementById('prof-email').value;
    const specialization = document.getElementById('prof-specialization').value;
    const password = document.getElementById('prof-password').value;

    // Simulate signup
    console.log('Professional Signup:', { name, email, specialization, password });

    alert(`Welcome to Radiant Beauty, ${name}!\n\nThis is a demo. In production, this would:\n- Create professional account\n- Set up profile\n- Redirect to onboarding\n\nSpecialization: ${getSpecializationName(specialization)}`);

    // In production, redirect to professional onboarding
    // window.location.href = 'professional-onboarding.html';
}

function getSpecializationName(value) {
    const names = {
        'makeup': 'Makeup Artist',
        'nails': 'Nail Artist',
        'hair': 'Hair Stylist',
        'skincare': 'Esthetician',
        'brows': 'Brow & Lash Specialist',
        'cosmetology': 'Cosmetologist'
    };
    return names[value] || value;
}
