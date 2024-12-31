// Function to toggle the dropdown menu when hamburger is clicked
function hamburg() {
    document.querySelector('.dropbox').classList.toggle('active');
}

// Function to close the dropdown menu when X icon is clicked
function cancel() {
    document.querySelector('.dropbox').classList.remove('active');
}


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

// Start the typing effect
typeWriter();


// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
  // Select all the skill elements
  const skills = document.querySelectorAll('.skill');

  // Iterate over each skill to set the width of the skill bars
  skills.forEach(skill => {
    // Get the percentage from the tooltip element
    const skillBar = skill.querySelector('.skill-per');
    const tooltip = skillBar.querySelector('.tooltip');
    const percentage = parseInt(tooltip.textContent);  // Extract percentage as an integer
    
    // Set the width of the skill bar to the percentage value
    skillBar.style.width = `${percentage}%`;

    // Add event listener to show the tooltip on hover
    skillBar.addEventListener('mouseover', function () {
      tooltip.style.visibility = 'visible';
    });

    // Hide the tooltip when mouse leaves the skill bar
    skillBar.addEventListener('mouseout', function () {
      tooltip.style.visibility = 'hidden';
    });
  });
});

// JavaScript to handle form submission (optional, this is just a simple form alert for demonstration)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    alert("Thank you for contacting us!");
    document.getElementById('contact-form').reset(); // Optionally clear the form after submission
});

// Optional: Smooth scroll to top when clicking the email
document.querySelector('.footer-info a').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});








