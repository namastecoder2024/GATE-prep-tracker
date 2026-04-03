console.log("GATE Website Loaded");

// Sound effects
let bellSound = new Audio("https://www.soundjay.com/misc/sounds/bell-ringing-01.mp3");
let clickSound = new Audio("https://www.soundjay.com/button/sounds/button-10.mp3");

// 🔔 Play sound on page load
window.onload = () => {
    bellSound.play();
};

// Navbar click sound
document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        clickSound.play();
    });
});

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('open');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function openLogin() {
    document.getElementById('loginPopup').style.display = 'block';
    bellSound.play(); // play on popup
}

function closeLogin() {
    document.getElementById('loginPopup').style.display = 'none';
}

// Countdown
function countdownGate() {
    var examDate = new Date('2025-02-01').getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var dist = examDate - now;
        var days = Math.floor(dist / (1000 * 60 * 60 * 24));
        document.getElementById('countdown').innerHTML = dist < 0 ? "Exam Passed!" : days + " Days Left";
    }, 1000);
}
countdownGate();
