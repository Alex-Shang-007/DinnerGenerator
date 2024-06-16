function chooseDinner() {
    const dinners = ["Elysium Korean Bistro", "桃源食屋", "Copa Cafe", "老地方", "烟火成都", "田师傅", "John 3:16 Malaysian Delights" ,
        "旺记", "胜意食馆", "Pho37", "喜相逢", "品一品", "一品川菜", "海底捞", "豆捞坊", "半步仙"];
    const choice = dinners[Math.floor(Math.random() * dinners.length)];
    document.getElementById('dinnerChoice').innerText = "Tonight's dinner: " + choice;
}
