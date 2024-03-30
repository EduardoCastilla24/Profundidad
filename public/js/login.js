import { handleAuthClick } from './sheets/auth.js';

// Check if the user is already authenticated
const isAuthenticated = false/* implement your check here, e.g., check cookies or localStorage */;

if (isAuthenticated) {
    // User is authenticated, show the dashboard
    window.location.href = './public/layout/profundidad.html';
} else {
    // User is not authenticated, show the login page
    var isTouchDevice = 'ontouchstart' in document.documentElement;

    if (isTouchDevice) {
        document.getElementById('authorize_button').addEventListener('touchstart', function(event) {
            event.preventDefault(); // Evita el comportamiento táctil predeterminado
            handleAuthClick();
        });
    } else {
        document.getElementById('authorize_button').onclick = function() {
            handleAuthClick();
        };
    }
}
