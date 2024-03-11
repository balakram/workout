// JavaScript code to toggle between dark and light themes
const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;

themeSwitcher.addEventListener('click', function() {
    // Toggle the class to switch between themes
    body.classList.toggle('dark-theme');
});
