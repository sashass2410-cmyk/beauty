/*===================================
  Dashboard JavaScript
  Radiant Beauty Platform
  ===================================*/

document.addEventListener('DOMContentLoaded', function() {
    // Ensure user is logged in (already handled by auth.js)
    const user = getCurrentUser();

    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    // Populate dashboard with user data
    populateUserInfo(user);

    // Set up logout button
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Are you sure you want to logout?')) {
                logout();
            }
        });
    }
});

function populateUserInfo(user) {
    // User avatar
    const userAvatar = document.getElementById('user-avatar');
    if (userAvatar) {
        userAvatar.src = user.photo || getDefaultAvatar(user.name);
        userAvatar.alt = user.name;
    }

    // User name (in greeting)
    const userName = document.getElementById('user-name');
    if (userName) {
        userName.textContent = user.name.split(' ')[0]; // First name
    }

    // User email (in header)
    const userEmail = document.getElementById('user-email');
    if (userEmail) {
        userEmail.textContent = user.email;
    }

    // Account info section
    const infoName = document.getElementById('info-name');
    if (infoName) {
        infoName.textContent = user.name;
    }

    const infoEmail = document.getElementById('info-email');
    if (infoEmail) {
        infoEmail.textContent = user.email;
    }

    const memberSince = document.getElementById('member-since');
    if (memberSince) {
        const date = new Date(user.createdAt);
        memberSince.textContent = date.toLocaleDateString();
    }

    const authProvider = document.getElementById('auth-provider');
    if (authProvider) {
        const providerText = user.provider === 'google' ? 'Google' : 'Email/Password';
        authProvider.textContent = providerText;
    }
}
