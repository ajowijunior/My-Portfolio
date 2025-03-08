
//for typewriter effect
const texts = [
    "Software Developer",
    "YouTuber",
    "Web Designer"
]

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000); // Delay before erasing
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50); // Speed of erasing
    } else {
        textIndex = (textIndex + 1) % texts.length; // Corrected reference to texts array
        characterIndex = 0;
        setTimeout(typeWriter, 500); // Delay before typing the next text
    }
}

/** JAVASCRIPT FILE: script.js **/
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent successfully!");
});