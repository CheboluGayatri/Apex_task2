// Show alert on button click
function showAlert() {
    alert("Hello! You clicked the button.");
}

// Navigation tab switching
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("main section");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove active from all sections
        sections.forEach(sec => sec.classList.remove("active"));

        // Add active to clicked section
        const targetId = link.getAttribute("href").substring(1);
        document.getElementById(targetId).classList.add("active");
    });
});

// Show first section by default
if (sections.length > 0) {
    sections[0].classList.add("active");
}

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";

    this.reset();
});

// To-Do List functionality
document.getElementById("addTaskBtn").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();
    let taskList = document.getElementById("taskList");

    if (taskValue === "") return;

    let li = document.createElement("li");
    li.textContent = taskValue;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
});
