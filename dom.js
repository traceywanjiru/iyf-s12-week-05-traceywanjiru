// ALL SELECTION METHODS
// 1. The h1 element
const mainHeading = document.querySelector("h1");

// 2. All elements with class "content"
const contentElements = document.querySelectorAll(".content");

// 3. The form with id "contact-form"
const contactForm = document.getElementById("contact-form");

// 4. The email input
const emailInput = document.querySelector("input[type='email']");

// 5. All list items in the nav
const navListItems = document.querySelectorAll("nav li");

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");

// 7. The last paragraph
const lastParagraph = document.querySelector("p:last-of-type");

// DOM NAVIGATION
// 1. Select the header, then navigate to the nav inside it
const header = document.querySelector("header");
const navInsideHeader = header.querySelector("nav"); 


// 2. Select the first nav-link, then get its parent li
const firstNav_Link = document.querySelector(".nav-link");
const parentLi = firstNav_Link.parentElement;


// 3. Select the article, then get its next sibling (section)
const article = document.querySelector("article");
const nextSiblingSection = article.nextElementSibling;

// 4. Select the ul, then get all its child li elements
const ulElement = document.querySelector("ul");
const childLiElements = ulElement.children; 


// 5. Start from the footer and navigate up to the body
const footer = document.querySelector("footer");
const body = footer.closest("body");

// MODIFYING CONTENT
// 1.Text Content
const h1 = document.querySelector("h1");
console.log("textContent:", h1.textContent); 
console.log("innerText:", h1.innerText);     
h1.textContent = "CommunityHub: Updated Title!";

// 2. HTML Content
const articleContent = document.querySelector("article");
console.log("Original innerHTML:", articleContent.innerHTML);
articleContent.innerHTML = `
<h2>Updated Article</h2>
<p>This is brand new HTML content injected via script.</p>
`;
const userInput = "<span>Safe text input from a user</span>";

// 3. Attributes
link.setAttribute("href", "https://developer.mozilla.org");
console.log("Has target attribute?", link.hasAttribute("target")); 
link.removeAttribute("target"); 
console.log("Has target after removal?", link.hasAttribute("target")); 

const dataElement = document.querySelector("[data-id]");
console.log("data-id:", dataElement.dataset.id);               
console.log("data-category:", dataElement.dataset.category);   
dataElement.dataset.status = "active"; 
console.log("New data attribute:", dataElement.dataset.status);

// 4. Styles
const container = document.querySelector(".container");
        container.style.backgroundColor = "#f0f0f0";
        container.style.padding = "30px";
        container.style.borderRadius = "8px";

        Object.assign(container.style, {
            backgroundColor: "#2563eb",
            color: "white",
            padding: "20px",
            marginTop: "30px"
        });
        
// ADDING & REMOVING ELEMENTS
// 1. Creating elements
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

const articleOne = document.querySelector("article");
articleOne.appendChild(newParagraph);

// 2. Removing elements
const footerElement = document.querySelector("footer");
footerElement.remove();

const nav = document.querySelector("nav");
const lastLink = nav.querySelector("li:last-child");
lastLink.parentElement.removeChild(lastLink);

while (article.firstChild) {
    article.removeChild(article.firstChild);
}

// 3. Cloning elements
const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true);  // true = deep clone
clone.querySelector("a").textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);

// Build : Create a function that adds a new nav item dynamically
function addNavItem(text, href) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.href = href;
    a.className = "nav-link";
    
    li.appendChild(a);

    const navList = document.querySelector("ul.nav-list") || document.querySelector("ul");
    navList.appendChild(li);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

// EVENT LISTENERS
// 1. Creating container and elements for the counter
const container = document.createElement("div");
container.className = "counter-container";

const display = document.createElement("h2");
let count = 0;
display.textContent = `Count: ${count}`;

const increaseBtn = document.createElement("button");
increaseBtn.textContent = "+";

const decreaseBtn = document.createElement("button");
decreaseBtn.textContent = "-";

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";

// 2. Appending elements to the container
container.appendChild(display);
container.appendChild(decreaseBtn);
container.appendChild(increaseBtn);
container.appendChild(resetBtn);
document.body.appendChild(container);

// 3. Adding event listeners for the functionality
increaseBtn.addEventListener("click", () => {
    count++;
    display.textContent = `Count: ${count}`;
});

decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        display.textContent = `Count: ${count}`;
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    display.textContent = `Count: ${count}`;
});

// The Event Object
document.addEventListener("keydown", function(event) {
    
    // 1. Ctrl+S: Show "Saved!" alert and prevent the browser's default save dialog
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
        event.preventDefault();
        alert("Saved!");
    }

    // 2. Escape: Clear all form inputs on the page
    if (event.key === "Escape") {
        const allInputs = document.querySelectorAll("input, textarea, select");
        allInputs.forEach(input => {
            if (input.type === "checkbox" || input.type === "radio") {
                input.checked = false;
            } else {
                input.value = "";
            }
        });
        console.log("All form inputs cleared.");
    }

    // 3. Ctrl+Enter: Submit the form
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        const form = document.querySelector("form");
        if (form) {
            event.preventDefault();
            form.requestSubmit();
            console.log("Form submitted via Ctrl+Enter!");
        }
    }

});

// Event Bubbling & Delegation 
// 1. Setting up the container, input, add button, and task list container
const appContainer = document.createElement("div");
appContainer.className = "task-app";

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter a new task...";

const addBtn = document.createElement("button");
addBtn.textContent = "Add Task";

const todoUl = document.createElement("ul");
todoUl.className = "task-list";

appContainer.appendChild(input);
appContainer.appendChild(addBtn);
appContainer.appendChild(todoUl);
document.body.appendChild(appContainer);

// 2. Function to add a new task item
function addTask(taskText) {
    if (!taskText.trim()) return; 

    const li = document.createElement("li");
    li.className = "task-item";
    
    // Task text span
    const span = document.createElement("span");
    span.textContent = taskText;
    span.className = "task-text";

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoUl.appendChild(li);
}

// Event listener for the Add button
addBtn.addEventListener("click", () => {
    addTask(input.value);
    input.value = ""; 
});

// Allow pressing "Enter" to add a task
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask(input.value);
        input.value = "";
    }
});


// 3.Event Delegation
todoUl.addEventListener("click", function(event) {
    
    const taskItem = event.target.closest(".task-item");
    if (!taskItem) return; 

    // Case A: Clicking the Delete button
    if (event.target.classList.contains("delete-btn")) {
        taskItem.remove();
        return;
    }

    // Case B: Clicking anywhere else on the task toggles "completed"
    taskItem.classList.toggle("completed");
});

// Form Handling
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInputTwo = document.getElementById("email");

// Helper function to show errors
function showError(input, message) {
    input.classList.add("error");
    
    let errorElement = input.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains("error-message")) {
        errorElement = document.createElement("div");
        errorElement.className = "error-message";
        errorElement.style.color = "red";
        errorElement.style.fontSize = "0.85rem";
        input.after(errorElement);
    }
    errorElement.textContent = message;
}

// Helper function to clear errors
function clearError(input) {
    input.classList.remove("error");
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains("error-message")) {
        errorElement.remove();
    }
}

// Validation helper for overall form check before final submit
function isValid(data) {
    // Basic checks ensuring fields aren't empty and meet criteria
    if (!data.name || data.name.trim().length < 2) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) return false;
    return true;
}

// Success message helper
function showSuccess(message) {
    let successBanner = document.querySelector(".success-banner");
    if (!successBanner) {
        successBanner = document.createElement("div");
        successBanner.className = "success-banner";
        successBanner.style.color = "green";
        successBanner.style.marginTop = "10px";
        form.after(successBanner);
    }
    successBanner.textContent = message;
    setTimeout(() => successBanner.remove(), 4000);
}

// Real-time validation for Name
nameInput.addEventListener("input", function(event) {
    const value = event.target.value;
    
    if (value.trim().length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

// Real-time validation for Email
emailInput.addEventListener("input", function(event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(value)) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }
});

// Form submission handler
form.addEventListener("submit", function(event) {
    event.preventDefault();  

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    console.log("Form data:", data);
    
    // Validate all fields before finalizing submission
    if (isValid(data)) {
        showSuccess("Form submitted successfully!");
        form.reset();
        // Clear any leftover error states
        clearError(nameInput);
        clearError(emailInput);
    } else {
        showError(nameInput, "Please check your inputs before submitting.");
    }
});





