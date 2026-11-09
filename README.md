# Week 05: DOM Manipulation

## Author

- **Name:** Tracey Wanjiru
- **GitHub:** [@traceywanjiru](https://github.com/traceywanjiru)
- **Date:** November 8, 2026

## Project Description

A fully functional, responsive interactive To-Do List application built as the Week 5 deliverable for IYF frontend web development coursework. This project demonstrates core DOM manipulation, event handling, state management, and user interaction design. In addition to the main deliverable, this repository includes a dedicated practice page for DOM lessons and a comprehensive folder of interactive daily coding challenges.

## Technologies Used

- HTML5 (Semantic structure and markup)
- CSS3 (Custom styling, flexbox layouts, and theme transitions)
- JavaScript (ES6+, DOM API, event delegation, and array methods)
- Git & GitHub (Version control and GitHub Pages deployment)

## Features

- **Dynamic Task Management:** Add new tasks via button click or the Enter key, with input validation to prevent empty submissions.
- **Task Completion Toggle:** Click any task to toggle its completed state with visual strikethrough styling.
- **Event Delegation:** Efficiently manage clicks across all list items using a single parent event listener and `.closest()` for nested elements.
- **Task Filtering:** Instantly filter tasks by "All", "Active", or "Completed" views.
- **Live Statistics & Cleanup:** Real-time counter tracking remaining tasks and a "Clear Completed" bulk removal action.
- **Inline Editing (Bonus):** Double-click any task text to edit it in place, saving with Enter or canceling with Escape.
- **Daily Challenges Suite:** Interactive mini-projects including a random color heading changer, dynamic element creator, image hide/toggle, content copier with drag-and-drop, and a dark mode toggle with `localStorage` persistence.


## How to Run

1. Clone this repository to your local machine using Git:
   ```bash
   git clone [https://github.com/traceywanjiru/iyf-s12-week-05-traceywanjiru.git](https://github.com/traceywanjiru/iyf-s12-week-05-traceywanjiru.git)
   ```

## Lessons Learned

1. Gained a deep understanding of the DOM lifecycle, element creation (document.createElement), and modern node insertion methods (prepend, append, before, after).

2. Mastered event propagation, event bubbling, and the performance benefits of event delegation over individual element listeners.

3. Learned how to effectively map UI state to underlying JavaScript data arrays and re-render dynamically.

## Challenges Faced

1. Nested Element Targeting: When building event delegation for the task list, clicking the delete button versus clicking the task text registered different targets. This was successfully resolved by utilizing event.target.closest() to reliably locate the parent list item regardless of what child element was clicked.

2. State Synchronization: Keeping the active filter view synchronized with real-time additions, deletions, and completions required structuring pure helper functions around a centralized todos array state.

## Live Demo (if deployed)

[View Live Demo](https://traceywanjiru.github.io/iyf-s12-week-05-traceywanjiru/)
