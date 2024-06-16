// Declare a variable to store the dinner list
let dinners = [];

// Function to fetch dinner data once and store it
async function loadDinners() {
    document.getElementById('dinnerChoice').innerText = "Dinners are still loading..."; // Update to show loading message
    try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbwrV0Ft91UZf9khW614ICoCm4PYXghnEDkEosvcG5BSuVLciZpZtg45w7sOgN9BT39t/exec");
        const fecthedData = await res.json();
        dinners = fecthedData.data;
        document.getElementById('dinnerChoice').innerText = "What's for dinner?";
    } catch (error) {
        console.error('Failed to load dinners:', error);
        document.getElementById('dinnerChoice').innerText = "Failed to load dinners, please try reloading the page.";
    }
}

// Function to choose a dinner from the preloaded list and display it
function chooseDinner() {
    if (dinners.length > 0) {
        const choice = dinners[Math.floor(Math.random() * dinners.length)].dinner;
        document.getElementById('dinnerChoice').innerText = "Tonight's dinner: " + choice;
    } else {
        document.getElementById('dinnerChoice').innerText = "Dinners are still loading...";
    }
}

// Call loadDinners once when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadDinners();
});