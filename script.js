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