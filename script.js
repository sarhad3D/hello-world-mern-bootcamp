// ============================================
// HELLO WORLD — script.js
// This file adds dynamic behavior to our page
// ============================================

// document.getElementById() finds an HTML element by its id attribute
// We use this to inject the current date into our footer
const startDateElement = document.getElementById('start-date');

// Create a new Date object — this captures today's date and time
const today = new Date();

// Format the date to be human-readable
// toLocaleDateString() converts to format like "1 May 2026"
const formattedDate = today.toLocaleDateString('en-GB', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

// Set the text content of the element to our formatted date
// This replaces whatever is inside the <span id="start-date"> tag
startDateElement.textContent = formattedDate;

// Console.log() prints messages to the browser's Developer Tools console
// Press F12 in any browser to open Developer Tools and see the Console tab
console.log('🚀 Hello World project loaded successfully!');
console.log(`📅 Bootcamp started: ${formattedDate}`);
console.log('💪 Let\'s build something amazing!');
// ============================================
// SKILLS PROGRESS BAR ANIMATION
// Added: Week 1 Day 2
// ============================================

// querySelectorAll returns a NodeList of ALL elements matching the selector
// It's like getElementById but for multiple elements using CSS selectors
const skillBars = document.querySelectorAll('.skill-fill');

// Why IntersectionObserver instead of just setting width immediately?
// IntersectionObserver fires when an element enters the viewport (visible area).
// This means the animation only plays when the user scrolls to see it —
// a common UX pattern on portfolio sites.
const observer = new IntersectionObserver((entries) => {
  
  // entries is an array of all observed elements that changed visibility
  entries.forEach((entry) => {
    
    // entry.isIntersecting is true when the element is visible on screen
    if (entry.isIntersecting) {
      const bar = entry.target;
      
      // data-width is a custom HTML attribute we set on each .skill-fill div
      // dataset.width reads the value of data-width
      const targetWidth = bar.dataset.width;
      
      // Setting the width triggers the CSS transition animation
      bar.style.width = `${targetWidth}%`;
      
      // Stop observing once animated — we only want to animate once
      observer.unobserve(bar);
    }
  });
  
}, {
  // threshold: 0.1 means "fire when 10% of the element is visible"
  threshold: 0.1
});

// Attach the observer to each skill bar
skillBars.forEach((bar) => {
  observer.observe(bar);
});

console.log(`📊 Tracking ${skillBars.length} skill progress bars`);