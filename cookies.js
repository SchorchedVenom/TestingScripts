function displayCookies() {
    const cookiesContainer = document.getElementById('cookies');
    const cookies = document.cookie;

    // Check if there are cookies
    if (cookies) {
        // Split cookies string into individual cookies
        const cookiesArray = cookies.split('; ');
        // Create a list to display the cookies
        let cookiesList = '<ul>';
        cookiesArray.forEach(function(cookie) {
            cookiesList += `<li>${cookie}</li>`;
        });
        cookiesList += '</ul>';
        cookiesContainer.innerHTML = cookiesList;
    } else {
        cookiesContainer.innerHTML = 'No cookies found.';
    }
}

// Call the function when the script loads
displayCookies();

