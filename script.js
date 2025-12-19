let greeting = document.querySelector("#timed-greeting");
let hours = new Date().getHours();

if (hours >= 5 && hours <= 11) {
    greeting.textContent = "Good Morning,"
} else if (hours >= 12 && hours <= 17) {
    greeting.textContent = "Good Afternoon,"
} else if (hours >= 18 && hours <= 20) {
    greeting.textContent = "Good Evening,"
} else {
    greeting.textContent = "Good Night,"
}