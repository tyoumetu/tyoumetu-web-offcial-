// scripts.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // フォーム送信を防止
    const password = document.getElementById('password').value;
    if (password === "science") {
        alert("Login successful!");
        window.location.href="超滅公式サイト1.html";
    } else {
        alert("Invalid password. Please try again.");
    }
});