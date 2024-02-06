// displayCookies.js
window.onload = function() {
    if (document.cookie) {
        alert("Cookies: " + document.cookie);
    } else {
        alert("No cookies found.");
    }
};

