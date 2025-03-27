document.addEventListener("DOMContentLoaded", function() {
    fetch("menu2.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;
        })
        .catch(error => console.error("メニューの読み込みに失敗:", error));
});
