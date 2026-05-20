// ================= LOGIN PROTECTION =================
if (!window.location.pathname.includes("login.html")) {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
}

// ================= LOGOUT =================
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

// ================= IMAGE SLIDESHOW (FADE EFFECT) =================
let images = [
const images = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1513258496099-48168024aec0",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
    "https://images.unsplash.com/photo-1513258496099-48168024aec0"
];

let index = 0;

function changeSlide() {
    let img = document.getElementById("slide");
    if (img) {
        img.style.opacity = 0;

        setTimeout(() => {
            index = (index + 1) % images.length;
            img.src = images[index];
            img.style.opacity = 1;
        }, 400);
    }
}
setInterval(changeSlide, 3000);

// ================= SMOOTH SCROLL TO TOP =================
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------------- ADVANCED QUIZ SYSTEM ---------------- //

const quizData = [
{
question: "What does HTML stand for?",
options: ["Hyper Text Markup Language", "High Tech Machine Learning", "Home Tool Markup Language", "Hyperlinks Text Management Language"],
answer: 0
},
{
question: "5 + 7 = ?",
options: ["10", "12", "14", "15"],
answer: 1
},
{
question: "Which planet is known as the Red Planet?",
options: ["Earth", "Mars", "Jupiter", "Venus"],
answer: 1
},
{
question: "Water boils at?",
options: ["50°C", "100°C", "120°C", "200°C"],
answer: 1
},
{
question: "ICT stands for?",
options: ["Information Communication Technology", "Internal Computer Tech", "Internet Coding Tool", "Information Control Type"],
answer: 0
}
];

let currentQ = 0;
let score = 0;

function loadQuestion(){
let q = quizData[currentQ];
document.getElementById("question").innerText = q.question;

let optionsDiv = document.getElementById("options");
optionsDiv.innerHTML = "";

q.options.forEach((opt, index) => {
let btn = document.createElement("button");
btn.innerText = opt;
btn.onclick = () => checkAnswer(index);
optionsDiv.appendChild(btn);
});
}

function checkAnswer(selected){
if(selected === quizData[currentQ].answer){
document.getElementById("result").innerText = "✅ Correct!";
score++;
} else {
document.getElementById("result").innerText = "❌ Wrong!";
}
document.getElementById("score").innerText = "Score: " + score;
}

function nextQuestion(){
currentQ++;
if(currentQ >= quizData.length){
currentQ = 0;
score = 0;
document.getElementById("score").innerText = "Score: 0";
}

document.getElementById("result").innerText = "";
loadQuestion();
}

// start first question
loadQuestion();


// ---------------- FLASHCARDS UPGRADE ---------------- //

const flashcards = [
{ front: "What is ICT?", back: "Information & Communication Technology" },
{ front: "Photosynthesis?", back: "Process where plants make food using sunlight" },
{ front: "Gravity?", back: "Force that pulls objects to Earth" }
];

let flashIndex = 0;

function flip(card){
card.classList.toggle("flipped");
}


// ---------------- POMODORO TIMER UPGRADE ---------------- //

let time = 1500;
let breakMode = false;
let interval;

function startTimer(){
clearInterval(interval);

interval = setInterval(() => {
let min = Math.floor(time / 60);
let sec = time % 60;

document.getElementById("timer").innerText =
min + ":" + (sec < 10 ? "0" + sec : sec);

time--;

if(time < 0){
clearInterval(interval);

if(!breakMode){
alert("🔥 Study session done! Take a break.");
time = 300; // 5 min break
breakMode = true;
startTimer();
} else {
alert("📚 Break over! Back to studying.");
time = 1500; // reset study time
breakMode = false;
}
}
}, 1000);
}


// ---------------- STUDY PLAN ---------------- //

function savePlan(){
let p = document.getElementById("plan").value;
localStorage.setItem("studyPlan", p);
document.getElementById("savedMsg").innerText = "✅ Plan saved!";
}

window.onload = function(){
document.getElementById("plan").value =
localStorage.getItem("studyPlan") || "";
};});

// ================= BACK TO TOP BUTTON =================
let topButton = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (topButton) {
        topButton.style.display =
            document.documentElement.scrollTop > 200 ? "block" : "none";
    }
});

// ================= COMMUNITY POSTS (IMPROVED) =================
let form = document.getElementById("postForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("nameInput").value.trim();
        let message = document.getElementById("messageInput").value.trim();

        if (name === "" || message === "") {
            alert("Please fill in all fields!");
            return;
        }

        let postContainer = document.getElementById("postsContainer");

        let hint = document.querySelector(".hint");
        if (hint) hint.remove();

        let post = document.createElement("div");
        post.classList.add("post");

        let time = new Date().toLocaleString();

        post.innerHTML = `
            <h4>${name}</h4>
            <p>${message}</p>
            <small>${time}</small>
        `;

        post.style.opacity = 0;
        postContainer.prepend(post);

        // smooth fade-in
        setTimeout(() => {
            post.style.opacity = 1;
        }, 100);

        form.reset();
    });
}