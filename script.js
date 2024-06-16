function chooseDinner() {
    const dinners = ["Spaghetti", "Tacos", "Sushi", "Pizza", "Salad", "Burger", "Steak"];
    const choice = dinners[Math.floor(Math.random() * dinners.length)];
    document.getElementById('dinnerChoice').innerText = "Tonight's dinner: " + choice;
}
