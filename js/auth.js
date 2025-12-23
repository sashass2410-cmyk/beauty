/*===================================
  Authentication System
  Radiant Beauty Platform
  ===================================*/

// Google OAuth Configuration
// IMPORTANT: Replace this with your actual Google Client ID
// Get it from: https://console.cloud.google.com/apis/credentials
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';

/*===================================
  User Authentication State
  ===================================*/

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('user') !== null;
}

// Get current user data
function getCurrentUser() {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
}

// Save user data
function saveUser(userData) {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('authProvider', userData.provider || 'email');
}

// Logout user
function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('authProvider');
    window.location.href = 'index.html';
}

/*===================================
  Google Sign-In Integration
  ===================================*/

// Initialize Google Sign-In
function initGoogleSignIn() {
    if (typeof google === 'undefined') {
        console.warn('Google Sign-In library not loaded yet');
        return;
    }

    google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleGoogleSignIn,
        auto_select: false,
        cancel_on_tap_outside: true
    });

    // Render button if element exists
    const googleBtn = document.getElementById('google-signin-btn');
    if (googleBtn) {
        googleBtn.addEventListener('click', function() {
            google.accounts.id.prompt();
        });
    }
}

// Handle Google Sign-In response
function handleGoogleSignIn(response) {
    try {
        // Decode JWT token to get user data
        const credential = response.credential;
        const payload = parseJwt(credential);

        // Create user object
        const userData = {
            id: payload.sub,
            name: payload.name,
            email: payload.email,
            photo: payload.picture,
            provider: 'google',
            createdAt: new Date().toISOString()
        };

        // Save user data
        saveUser(userData);

        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } catch (error) {
        console.error('Error handling Google Sign-In:', error);
        showError('Failed to sign in with Google. Please try again.');
    }
}

// Parse JWT token
function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error('Error parsing JWT:', error);
        return null;
    }
}

/*===================================
  Traditional Email/Password Login
  ===================================*/

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    // Validate inputs
    if (!email || !password) {
        showError('Please fill in all fields');
        return;
    }

    // Since this is a frontend-only demo, we'll simulate authentication
    // In a real application, you would send credentials to your backend

    // Check if user exists in localStorage (for demo purposes)
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const user = storedUsers.find(u => u.email === email && u.password === password);

    if (user) {
        // Successful login
        const userData = {
            id: user.id,
            name: user.name,
            email: user.email,
            photo: getDefaultAvatar(user.name),
            provider: 'email',
            createdAt: user.createdAt
        };

        saveUser(userData);
        window.location.href = 'dashboard.html';
    } else {
        showError('Invalid email or password');
    }
}

// Handle registration form submission
function handleRegister(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate inputs
    if (!name || !email || !password) {
        showError('Please fill in all fields');
        return;
    }

    if (password.length < 8) {
        showError('Password must be at least 8 characters long');
        return;
    }

    // Check if email already exists
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    if (storedUsers.find(u => u.email === email)) {
        showError('An account with this email already exists');
        return;
    }

    // Create new user
    const newUser = {
        id: 'user_' + Date.now(),
        name: name,
        email: email,
        password: password, // In production, NEVER store plain passwords!
        createdAt: new Date().toISOString()
    };

    // Save to registered users
    storedUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(storedUsers));

    // Auto-login after registration
    const userData = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        photo: getDefaultAvatar(newUser.name),
        provider: 'email',
        createdAt: newUser.createdAt
    };

    saveUser(userData);
    window.location.href = 'dashboard.html';
}

/*===================================
  Helper Functions
  ===================================*/

// Show error message
function showError(message) {
    const errorElement = document.getElementById('error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');

        // Hide after 5 seconds
        setTimeout(() => {
            errorElement.classList.remove('show');
        }, 5000);
    }
}

// Generate default avatar with initials
function getDefaultAvatar(name) {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#e91e63';
    ctx.fillRect(0, 0, 200, 200);

    // Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 80px Poppins, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(initials, 100, 100);

    return canvas.toDataURL();
}

/*===================================
  Page Protection
  ===================================*/

// Protect dashboard page (redirect to login if not authenticated)
function protectDashboard() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
    }
}

// Redirect to dashboard if already logged in (on login/register pages)
function redirectIfLoggedIn() {
    if (isLoggedIn()) {
        window.location.href = 'dashboard.html';
    }
}

/*===================================
  Update Navigation Based on Auth State
  ===================================*/

function updateNavigation() {
    const user = getCurrentUser();
    const accountBtn = document.querySelector('.account-btn');

    if (accountBtn && user) {
        // User is logged in - update button to show user info
        accountBtn.href = 'dashboard.html';
        const accountText = accountBtn.querySelector('.account-text');
        if (accountText) {
            accountText.textContent = user.name.split(' ')[0]; // First name only
        }
    } else if (accountBtn && !user) {
        // User is not logged in - link to login page
        accountBtn.href = 'login.html';
    }
}

/*===================================
  Legacy Authentication Forms
  ===================================*/

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

    console.log('Client Login:', { email, password });

    alert(`Welcome back!\n\nThis is a demo. In production, this would:\n- Authenticate with backend\n- Create session\n- Redirect to client dashboard\n\nEmail: ${email}`);
}

function handleProfessionalSignup(e) {
    e.preventDefault();

    const name = document.getElementById('prof-name').value;
    const email = document.getElementById('prof-email').value;
    const specialization = document.getElementById('prof-specialization').value;
    const password = document.getElementById('prof-password').value;

    console.log('Professional Signup:', { name, email, specialization, password });

    alert(`Welcome to Radiant Beauty, ${name}!\n\nThis is a demo. In production, this would:\n- Create professional account\n- Set up profile\n- Redirect to onboarding\n\nSpecialization: ${getSpecializationName(specialization)}`);
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

/*===================================
  Initialization
  ===================================*/

// Initialize authentication based on current page
document.addEventListener('DOMContentLoaded', function() {
    // Update navigation on all pages
    updateNavigation();

    // Legacy auth forms (contact page)
    initAuthForms();

    // Login page
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        redirectIfLoggedIn();
        loginForm.addEventListener('submit', handleLogin);
    }

    // Register page
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        redirectIfLoggedIn();
        registerForm.addEventListener('submit', handleRegister);
    }

    // Dashboard page
    const isDashboardPage = window.location.pathname.includes('dashboard.html');
    if (isDashboardPage) {
        protectDashboard();
    }

    // Initialize Google Sign-In after a short delay to ensure library is loaded
    setTimeout(initGoogleSignIn, 500);
});

// Initialize Google Sign-In when library loads
if (typeof google !== 'undefined') {
    initGoogleSignIn();
}
