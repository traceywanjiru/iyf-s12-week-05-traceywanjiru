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





