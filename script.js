//for typewriter effect
const texts = [
    "Software Developer",
    "YouTuber",
    "Web Designer",
    "IT Entertainer"
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

// Start the typing effect
typeWriter();


//form setting section 
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xeoajnpp", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                alert("Message sent successfully! We will get back to you!");
                form.reset(); // Clear the form after submission
            } else {
                alert("Failed to send message. Please try again later.");
            }
        } catch (error) {
            alert("An error occurred. Please check your internet connection and try again.");
        }
    });
});


