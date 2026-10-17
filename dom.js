// ============================================
// LESSON 9 — CLASSWORK EXERCISE: dom.js (Tasks 9.1–9.4)
// Copy dom-practice.html AND this file into the root of iyf-s12-week-05-{username}.
// Live Server → open dom-practice.html → F12 → Console.
//
// RULES: querySelector by default · textContent for text · classList for looks
//        (no element.style) · const/let only
// ============================================

// small helper: logs ✓ or ✗ so you can check yourself
const check = (label, ok) => console.log(`${ok ? "✓" : "✗"} ${label}`);


// ============================================
// STEP 1 — Task 9.1: select TEN ways. Store each in a const, then log it.
// ============================================
// TODO 1  the h1
const h1 = ("main-header");
// TODO 2  all elements with class "content"
const contents = document.querySelectorAll(".content");
check("TODO 2", contents.length > 0);
// TODO 3  the form with id "contact-form" (use getElementById — no #)
const contactForm = document.getElementById("contact-form");
check("TODO 3", contactForm !== null);
// TODO 4  the email input INSIDE the form (one querySelector with a descendant selector)
const emailInput = document.querySelector("#contact-form input[type='email']"); 
check("TODO 4", emailInput !== null);
// TODO 5  all list items in the nav
const navItems = document.querySelectorAll("nav li");
check("TODO 5", navItems.length > 0);
// TODO 6  the first .nav-link
const firstNavLink = document.querySelector(".nav-link");
check("TODO 6", firstNavLink !== null);
// TODO 7  the last paragraph in the article   (hint: p:last-of-type)
const lastArticlePara = document.querySelector("article p:last-of-type");
check("TODO 7", lastArticlePara !== null);
// TODO 8–10  three more of your own — e.g. the submit button, every h2 in main, the footer
//TODO 8
const submitBtn = document.querySelector("button[type='submit']");
check("TODO 8", submitBtn !== null);
//TODO 9
const mainH2s = document.querySelectorAll("main h2");
check("TODO 9", mainH2s.length > 0);
//TODO 10
const footer = document.querySelector("footer");
check("TODO 10", footer !== null);
//
// Then: what does document.querySelector(".does-not-exist") return? Log it.
const nonExistent = document.querySelector(".does-not-exist");
console.log("Non-existent element returns:", nonExistent); // It returns null
// And:  turn your nav items NodeList into an array of their text with [...list].map()
const navLinksText = [...document.querySelectorAll("nav a")].map(link => link.textContent);
console.log("Nav link texts:", navLinksText);


// ============================================
// STEP 2 — Task 9.2: traverse. Say the route out loud before you write it.
// ============================================
// TODO 1  from the header, find the nav inside it
const header = document.querySelector("header");
const nav = header.querySelector("nav");
// TODO 2  from the first .nav-link, get its parent li
const navLink = document.querySelector(".nav-link");
const parentLi = firstNavLink.parentElement;
// TODO 3  from the article, get its next sibling (should be a section)
const article = document.querySelector("article");
const nextSibling = article.nextElementSibling;
// TODO 4  from the ul, get all its child li elements
const ul = document.querySelector("ul");
const childLis = ul.children; 
// TODO 5  from the footer, go up to the body
const theFooter = document.querySelector("footer");
const body = footer.parentElement; 
// TODO 6  from the first .nav-link, use closest() to reach the header
const headerAncestor = firstNavLink.closest("header");


// ============================================
// STEP 3 — Task 9.3: change things
// ============================================
// TODO 1  change the h1 text to something of yours
const theh1 = document.querySelector("h1");
h1.textContent = "My Awesome Todo App";
// TODO 2  point the first .nav-link at https://developer.mozilla.org, open in a new tab
//         (target="_blank" and rel="noopener")
const secondNavLink = document.querySelector(".nav-link");
navLink.href = "https://developer.mozilla.org";
navLink.target = "_blank";
navLink.rel = "noopener";
// TODO 3  read the article's data-id and data-category with dataset; add data-status="reviewed"
const theArticle = document.querySelector("article");
console.log(article.dataset.id);
console.log(article.dataset.category);
article.dataset.status = "reviewed";
// TODO 4  add the class "highlight" to the first .content paragraph,
//         toggle "accent" on the second — NO element.style
const firstContentP = document.querySelector("p.content"); // or similar
const contentParagraphs = document.querySelectorAll(".content");

contentParagraphs[0].classList.add("highlight");
contentParagraphs[1].classList.toggle("accent");
//
// TODO 5  THE INJECTION DEMO — run these two lines and watch:
//   const userInput = `<img src="x" onerror="alert('hacked!')">`;
//   document.getElementById("unsafe").innerHTML = userInput;   // what happens?
//   document.getElementById("safe").textContent = userInput;   // and now?
//   Write one sentence in a comment: which one would you use for a user's comment, and why?
const userInput = '<img src="x" onerror="alert(\'hacked!\')">';
document.getElementById("unsafe").innerHTML = userInput; 
document.getElementById("safe").textContent = userInput;

// ============================================
// STEP 4 — Task 9.4: create, remove, clone
// ============================================
// TODO 1  write addNavItem(text, href): creates <li><a class="nav-link" href=…>text</a></li>
//         and appends it to .nav-list. Use textContent for the text.
// function addNavItem(text, href) { }
function addNavItem(text, href) {
  const li = document.createElement("li");
  const a = document.createElement("a");

a.className = "nav-link";
  a.href = href;
  a.textContent = text;
  
  li.appendChild(a);
  const navList = document.querySelector(".nav-list");
  navList.appendChild(li);
}
// addNavItem("Blog", "#blog");
addNavItem("Blog", "#blog");
// addNavItem("Portfolio", "#portfolio");
addNavItem("Portfolio", "#portfolio");
//
// TODO 2  create a paragraph and insert it BEFORE the article's first paragraph
const newPara = document.createElement("p");
newPara.textContent = "This is a brand new intro paragraph!";

const firstArticlePara = document.querySelector("article p");

if (firstArticlePara) {
  firstArticlePara.before(newPara);
}
// TODO 3  clone the first nav li (deep), change its text to "Cloned", prepend it to the list
const firstNavLi = document.querySelector(".nav-list li");

if (firstNavLi) {
  
  const clone = firstNavLi.cloneNode(true);
  
  const cloneLink = clone.querySelector("a");
  if (cloneLink) {
    cloneLink.textContent = "Cloned";
  }
  
  const navList = document.querySelector(".nav-list");
  navList.prepend(clone);
}
// TODO 4  remove the footer
const thelastfooter = document.querySelector("footer");
if (footer) {
  footer.remove();
}
// ============================================
// STEP 5 — COMMIT as you go
//   git add dom-practice.html dom.js
//   git commit -m "Add: element selection practice"
//   git commit -m "Add: content, attribute and class changes"
//   git commit -m "Add: create and remove elements"
//   git push
// ============================================

