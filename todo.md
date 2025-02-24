# Day of Week Game - Development Checklist

This `todo.md` file provides a checklist of all the steps involved in building the "Day of Week Game" as per the provided prompts. Use this as a guide to track your progress and ensure you've completed all tasks.

## Chunk 1: Basic Structure and Core Styling

### Prompt Set 1.1: Set up Project Files (HTML, CSS)
- [x] Objective: Create `index.html` and `style.css` files and set up the basic HTML structure.
- [x] Instruction 1: Create `index.html` file.
- [x] Instruction 2: Create `style.css` file.
- [x] Instruction 3: Set up basic HTML structure in `index.html` with `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.
- [x] Instruction 4: Add `<meta>` tags for `charset` and `viewport` in `<head`.
- [x] Instruction 5: Add `<title>` tag in `<head>` with "Day of Week Game".
- [x] Instruction 6: Link `style.css` to `index.html` using `<link>` tag in `<head>`.
- [x] Testing 1: Open `index.html` in a browser; it should load without errors.
- [x] Testing 2: Verify `style.css` is linked by adding a temporary style and checking if it applies in the browser.

### Prompt Set 1.2: Create Core Game Structure (Containers)
- [x] Objective: Define the main structural containers in `index.html`: `date-display`, `input-area`, `feedback-area`, and `statistics-area`, inside a main `game-container`.
- [x] Instruction 1: Add `<div id="game-container">` inside `<body>`.
- [x] Instruction 2: Inside `game-container`, add `<div id="date-display"></div>`.
- [x] Instruction 3: Inside `game-container`, add `<div id="input-area"></div>`.
- [x] Instruction 4: Inside `game-container`, add `<div id="feedback-area"></div>`.
- [x] Instruction 5: Inside `game-container`, add `<div id="statistics-area"></div>`.
- [x] Testing 1: Inspect `index.html` in browser's developer tools to verify the container structure is correctly created.

### Prompt Set 1.3: Create Day of Week Buttons (HTML)
- [x] Objective: Create day of week buttons (Sunday to Saturday) inside `input-area` in `index.html`.
- [x] Instruction 1: Inside `<div id="input-area">`, add seven `<button>` elements.
- [x] Instruction 2: Give each button the class `day-button`.
- [x] Instruction 3: Set `textContent` for each button to day names: "Sunday", "Monday", ..., "Saturday".
- [x] Testing 1: Verify day buttons are visible in the "Input Area" in the browser.
- [x] Testing 2: Inspect HTML to confirm button structure and class names are correct.

### Prompt Set 1.4: Basic CSS - Grayscale Theme and Layout Structure
- [x] Objective: Implement basic grayscale theme and layout structure using CSS in `style.css`.
- [x] Instruction 1: Set body background color to `#f0f0f0` and text color to `#333`.
- [x] Instruction 2: Set default font to sans-serif for `body`.
- [x] Instruction 3: Style `game-container` to center content horizontally using `margin: 0 auto;` and set `max-width: 800px;`.
- [x] Instruction 4: Set `display: flex;` and `flex-direction: column;` for `body`.
- [x] Instruction 5: Add basic margin to `date-display`, `input-area`, `feedback-area`, and `statistics-area` for vertical spacing (e.g., `margin: 20px 0;`).
- [x] Testing 1: Verify grayscale color theme is applied in the browser.
- [x] Testing 2: Check if content is centered and layout structure is visible.

### Prompt Set 1.5: Basic CSS - Style Day Buttons
- [x] Objective: Apply basic CSS styling to the day buttons.
- [x] Instruction 1: Style `.day-button`: set `display: inline-block;`, `padding: 10px 20px;`, `margin: 5px;`, `border-radius: 5px;`, `border: none;`, `background-color: #ddd;`, `color: #333;`, `cursor: pointer;`.
- [x] Testing 1: Verify day buttons are styled with the specified appearance in the browser.
- [x] Testing 2: Check button shape, color, spacing, and cursor on hover.

## Chunk 2: Date Generation and Display

### Prompt Set 2.1: Create `script.js` and Link to HTML
- [x] Objective: Create `script.js` and link it to `index.html`.
- [x] Instruction 1: Create `script.js` file.
- [x] Instruction 2: Open `index.html`.
- [x] Instruction 3: Add `<script src="script.js" defer></script>` tag in `<head>` below `<link>` for `style.css`.
- [x] Testing 1: Add `console.log("script.js linked successfully");` to `script.js`.
- [x] Testing 2: Reload `index.html` and check browser console for the message.
- [x] Testing 3: Remove `console.log` from `script.js` after verification.

### Prompt Set 2.2: Implement basic date generation function (placeholder)
- [x] Objective: Create a basic placeholder date generation function `generateDate()` in `script.js`.
- [x] Instruction 1: Add `function generateDate() { ... }` in `script.js`.
- [x] Instruction 2: Inside `generateDate()`, create a new `Date` object for today.
- [x] Instruction 3: Convert `Date` object to a simple date string (e.g., `toLocaleDateString()`).
- [x] Instruction 4: Return the date string from `generateDate()`.
- [x] Testing 1: Open browser console.
- [x] Testing 2: Call `generateDate()` in console and verify it returns a date string.

### Prompt Set 2.3: Display the fixed date in `date-display`
- [ ] Objective: Display the date from `generateDate()` in the `date-display` div.
- [ ] Instruction 1: In `script.js`, add `document.addEventListener('DOMContentLoaded', function() { ... });`.
- [ ] Instruction 2: Inside listener, get `dateDisplayElement` using `document.getElementById('date-display')`.
- [ ] Instruction 3: Call `generateDate()` and store result in `generatedDate`.
- [ ] Instruction 4: Set `dateDisplayElement.textContent = generatedDate;`.
- [ ] Testing 1: Open `index.html` in browser.
- [ ] Testing 2: Verify today's date is displayed in the "Date Display" area.
- [ ] Testing 3: Inspect `date-display` element and confirm `textContent` is set.

### Prompt Set 2.4: Implement Random Date Generation (Gregorian Calendar, Date Range)
- [ ] Objective: Replace placeholder with random date generation (1582-3000, Gregorian).
- [ ] Instruction 1: Modify `generateDate()` function.
- [ ] Instruction 2: Set `startDate = new Date(1582, 9, 15)` and `endDate = new Date(3000, 11, 31)`.
- [ ] Instruction 3: Get timestamps using `getTime()`.
- [ ] Instruction 4: Generate random time within the range.
- [ ] Instruction 5: Create `randomDate = new Date(randomTime)`.
- [ ] Instruction 6: Return `randomDate.toLocaleDateString()` (or simple string).
- [ ] Instruction 7: Add `try...catch` block, return `null` on error.
- [ ] Testing 1: Reload `index.html` multiple times, verify different dates are displayed.
- [ ] Testing 2: Manually check if generated dates are roughly within 1582-3000 range.
- [ ] Testing 3: Test error handling by intentionally breaking date generation and check for no crashes in console.

### Prompt Set 2.5: Implement Date Formatting
- [ ] Objective: Format the random date to a user-friendly format (e.g., "Month Day, Year").
- [ ] Instruction 1: Modify `generateDate()` to format `randomDate`.
- [ ] Instruction 2: Use `toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })` or similar formatting method.
- [ ] Instruction 3: Return the formatted date string.
- [ ] Testing 1: Reload `index.html` and verify dates are in the chosen format (e.g., "October 26, 1985").
- [ ] Testing 2: Check month and day names are correctly displayed.

### Prompt Set 2.6: Implement Date Generation Error Handling and Display
- [ ] Objective: Display error message "Unable to generate date" if `generateDate()` returns `null`.
- [ ] Instruction 1: Modify `DOMContentLoaded` listener in `script.js`.
- [ ] Instruction 2: After calling `generateDate()`, check if `generatedDate === null`.
- [ ] Instruction 3: If `null`, set `dateDisplayElement.textContent = "Unable to generate date";`.
- [ ] Instruction 4: Else, set `dateDisplayElement.textContent = generatedDate;`.
- [ ] Testing 1: Temporarily modify `generateDate()` to always return `null`.
- [ ] Testing 2: Reload `index.html` and verify "Unable to generate date" is displayed.
- [ ] Testing 3: Restore `generateDate()` to correct logic and reload, verify valid date is displayed.

## Chunk 3: User Input and Feedback (Buttons)

### Prompt Set 3.1: Add `data-day-index` to Day Buttons
- [ ] Objective: Add `data-day-index` attribute to day buttons in `index.html` (0-6, Sunday-Saturday).
- [ ] Instruction 1: Open `index.html`.
- [ ] Instruction 2: Add `data-day-index="0"` to "Sunday" button, `"1"` to "Monday", ..., `"6"` to "Saturday".
- [ ] Testing 1: Open `index.html` and inspect each day button in developer tools.
- [ ] Testing 2: Verify each button has `data-day-index` attribute with correct value (0-6).

### Prompt Set 3.2: Add Event Listeners to Day Buttons
- [ ] Objective: Add event listeners to day buttons to `console.log` button index on click.
- [ ] Instruction 1: Open `script.js`.
- [ ] Instruction 2: In `DOMContentLoaded` listener, select all `.day-button` using `document.querySelectorAll()`.
- [ ] Instruction 3: Iterate through buttons using `forEach`.
- [ ] Instruction 4: For each button, add `click` event listener.
- [ ] Instruction 5: Inside listener, get `dayIndex = this.dataset.dayIndex`.
- [ ] Instruction 6: `console.log("Day button clicked with index: " + dayIndex)`.
- [ ] Testing 1: Open `index.html` in browser and developer console.
- [ ] Testing 2: Click each day button and verify correct index is logged in console.

### Prompt Set 3.3: Calculate Correct Day of Week for Displayed Date
- [ ] Objective: Implement `getCorrectDayIndex(dateString)` function in `script.js`.
- [ ] Instruction 1: Add `function getCorrectDayIndex(dateString) { ... }` in `script.js`.
- [ ] Instruction 2: Inside function, create `date = new Date(dateString)`.
- [ ] Instruction 3: Return `date.getDay()` (0-6).
- [ ] Testing 1: Open browser console.
- [ ] Testing 2: Call `getCorrectDayIndex("October 26, 1985")`, `"January 1, 2024"`, etc., and verify correct day index is returned.
- [ ] Testing 3: Use online day-of-week calculator to confirm results.

### Prompt Set 3.4: Implement Feedback Logic (Correct/Incorrect)
- [ ] Objective: Implement feedback logic ("Correct"/"Incorrect") based on button click.
- [ ] Instruction 1: Modify day button event listener in `script.js`.
- [ ] Instruction 2: Inside listener, get `userGuessIndex = parseInt(this.dataset.dayIndex)`.
- [ ] Instruction 3: Get displayed date string from `dateDisplayElement.textContent`.
- [ ] Instruction 4: Get `correctAnswerIndex = getCorrectDayIndex(...)`.
- [ ] Instruction 5: Get `feedbackElement = document.getElementById('feedback-area')`.
- [ ] Instruction 6: If `userGuessIndex === correctAnswerIndex`, `feedbackElement.textContent = "Correct";`.
- [ ] Instruction 7: Else, `feedbackElement.textContent = "Incorrect";`.
- [ ] Testing 1: Open `index.html` and browser.
- [ ] Testing 2: For displayed date, click correct and incorrect day buttons.
- [ ] Testing 3: Verify "Feedback Area" shows "Correct" or "Incorrect" as expected.
- [ ] Testing 4: Test with different dates and guesses to ensure logic is reliable.

### Prompt Set 3.5: Display Correct Day on Incorrect Guess
- [ ] Objective: Display correct day name in feedback area for incorrect guesses.
- [ ] Instruction 1: Modify day button event listener in `script.js`.
- [ ] Instruction 2: In `else` block (incorrect guess), get `correctAnswerIndex`.
- [ ] Instruction 3: Create `dayNames = ["Sunday", ..., "Saturday"]` array.
- [ ] Instruction 4: Get `correctDayName = dayNames[correctAnswerIndex]`.
- [ ] Instruction 5: Set `feedbackElement.textContent = "Incorrect. Correct day: " + correctDayName;`.
- [ ] Testing 1: Open `index.html` and browser.
- [ ] Testing 2: Make incorrect guesses and verify feedback shows "Incorrect. Correct day: [Day Name]".
- [ ] Testing 3: Verify correct guesses still show only "Correct".

## Chunk 4: Timer and Basic Statistics

### Prompt Set 4.1: Initialize Timer Variables and Start Timer on Page Load
- [ ] Objective: Initialize timer variables and start timer on page load in `script.js`.
- [ ] Instruction 1: Declare global variables: `let startTime = null;`, `let endTime = null;`, `let timeTaken = null;`.
- [ ] Instruction 2: In `DOMContentLoaded` listener, inside `else` block (date generated), set `startTime = performance.now();`, `endTime = null;`, `timeTaken = null;`.
- [ ] Testing 1: Open `index.html` and browser console.
- [ ] Testing 2: Reload page, check `startTime` in console; verify it's a number.
- [ ] Testing 3: Check `endTime` and `timeTaken` are `null` initially.
- [ ] Testing 4: Reload multiple times and observe `startTime` changes.

### Prompt Set 4.2: Stop Timer and Calculate Time Taken on Button Click
- [ ] Objective: Stop timer and calculate `timeTaken` on day button click in `script.js`.
- [ ] Instruction 1: Modify day button event listener in `script.js`.
- [ ] Instruction 2: At start of event listener, set `endTime = performance.now();`.
- [ ] Instruction 3: Calculate `timeTaken = (endTime - startTime) / 1000;`.
- [ ] Testing 1: Open `index.html` and browser console.
- [ ] Testing 2: Reload page, click a day button.
- [ ] Testing 3: Check `timeTaken` in console; verify it's a positive number.
- [ ] Testing 4: Reload and test clicking buttons after varying times; check `timeTaken` reflects wait time.

### Prompt Set 4.3: Display Time Taken in Feedback Area
- [ ] Objective: Display `timeTaken` in feedback area with "Correct"/"Incorrect" messages.
- [ ] Instruction 1: Modify day button event listener in `script.js`.
- [ ] Instruction 2: Format `timeTaken` to 4 decimal places using `toFixed(4)`.
- [ ] Instruction 3: For "Correct" feedback: `feedbackElement.textContent = "Correct. Time: " + formattedTime + " seconds";`.
- [ ] Instruction 4: For "Incorrect" feedback: `feedbackElement.textContent = "Incorrect. Correct day: ... Time: " + formattedTime + " seconds";`.
- [ ] Testing 1: Open `index.html` and browser.
- [ ] Testing 2: Make correct and incorrect guesses, verify feedback shows time taken (4 decimal places).
- [ ] Testing 3: Check time displayed seems reasonable.

### Prompt Set 4.4: Initialize Statistics Variables and Display Area
- [ ] Objective: Initialize statistics variables and set up display area in `index.html` and `script.js`.
- [ ] Instruction 1: Declare global statistics variables in `script.js`: `totalAttempts = 0;`, `correctAnswers = 0;`, `sumOfCorrectTimes = 0;`.
- [ ] Instruction 2: In `index.html`, in `statistics-area`, add `<p id="percentage-correct">Correct: 0.00%</p>` and `<p id="average-time">Avg. Time: N/A</p>`.
- [ ] Instruction 3: In `script.js`, in `DOMContentLoaded`, get references to `percentageCorrectElement` and `averageTimeElement`.
- [ ] Instruction 4: Create `updateStatisticsDisplay()` function to set initial text content for percentage and avg time elements.
- [ ] Instruction 5: Call `updateStatisticsDisplay()` in `DOMContentLoaded` after getting element references.
- [ ] Testing 1: Open `index.html` and verify "Statistics Area" is displayed below feedback.
- [ ] Testing 2: Verify initial statistics display "Correct: 0.00%" and "Avg. Time: N/A".
- [ ] Testing 3: Inspect "Statistics Area" in developer tools to confirm HTML structure.
- [ ] Testing 4: Check in console if statistics variables are initialized to 0.

### Prompt Set 4.5: Update Statistics on Correct Answer
- [ ] Objective: Update statistics on correct guess and refresh display.
- [ ] Instruction 1: Modify day button event listener in `script.js`.
- [ ] Instruction 2: In `if` block (correct answer), increment `totalAttempts`, `correctAnswers`, `sumOfCorrectTimes`, and call `updateStatisticsDisplay()`.
- [ ] Instruction 3: Modify `updateStatisticsDisplay()` to calculate and display percentage correct and average time.
- [ ] Instruction 4: Calculate `percentage = (totalAttempts === 0) ? 0 : (correctAnswers / totalAttempts) * 100;`, format to 2 decimal places.
- [ ] Instruction 5: Calculate `averageTime = (correctAnswers === 0) ? "N/A" : (sumOfCorrectTimes / correctAnswers).toFixed(4);`.
- [ ] Instruction 6: Update `percentageCorrectElement.textContent` and `averageTimeElement.textContent`.
- [ ] Testing 1: Open `index.html` and browser.
- [ ] Testing 2: Make correct and incorrect guesses and verify percentage correct updates correctly.
- [ ] Testing 3: Verify average time updates only after correct guesses, and starts as "N/A".
- [ ] Testing 4: Check statistics display after several guesses.

### Prompt Set 4.6: Update Statistics on Incorrect Answer (Percentage Correct)
- [ ] Objective: Update `totalAttempts` on incorrect guess and percentage correct.
- [ ] Instruction 1: Modify day button event listener in `script.js`.
- [ ] Instruction 2: In `else` block (incorrect answer), increment `totalAttempts++;` and call `updateStatisticsDisplay()`.
- [ ] Testing 1: Open `index.html` and browser.
- [ ] Testing 2: Make correct and incorrect guesses.
- [ ] Testing 3: Verify both correct and incorrect guesses increase `totalAttempts` and affect percentage correct.
- [ ] Testing 4: Verify average time is not affected by incorrect guesses.

## Chunk 5: Keyboard Input and Reset Statistics

### Prompt Set 5.1: Implement Keyboard Input Handling (Numbers 0-6)
- [ ] Objective: Implement keyboard input (0-6) for day button selection.
- [ ] Instruction 1: In `script.js`, in `DOMContentLoaded` listener, add `document.addEventListener('keydown', function(event) { ... });`.
- [ ] Instruction 2: Inside listener, get `key = event.key`.
- [ ] Instruction 3: Check if `key >= '0' && key <= '6'`.
- [ ] Instruction 4: If yes, `keyIndex = parseInt(key)`.
- [ ] Instruction 5: Select `dayButtons = document.querySelectorAll('.day-button')`.
- [ ] Instruction 6: Simulate click: `dayButtons[keyIndex].click();`.
- [ ] Testing 1: Open `index.html` and browser.
- [ ] Testing 2: Press number keys 0-6 and verify it's equivalent to clicking day buttons.
- [ ] Testing 3: Verify feedback and statistics update with keyboard input.
- [ ] Testing 4: Press other keys and verify no effect.

### Prompt Set 5.2: Add "Reset Statistics" Button to HTML
- [ ] Objective: Add "Reset Statistics" button to `statistics-area` in `index.html`.
- [ ] Instruction 1: Open `index.html`.
- [ ] Instruction 2: In `statistics-area`, add `<button id="reset-button">Reset Statistics</button>`.
- [ ] Testing 1: Open `index.html` and verify "Reset Statistics" button is visible in "Statistics Area".
- [ ] Testing 2: Inspect button element to confirm `id` and `textContent`.

### Prompt Set 5.3: Implement Reset Statistics Functionality (JavaScript)
- [ ] Objective: Implement reset functionality when "Reset Statistics" button is clicked.
- [ ] Instruction 1: In `script.js`, in `DOMContentLoaded` listener, get `resetButton = document.getElementById('reset-button')`.
- [ ] Instruction 2: Add `click` event listener to `resetButton`.
- [ ] Instruction 3: Inside listener, reset statistics variables: `totalAttempts = 0;`, `correctAnswers = 0;`, `sumOfCorrectTimes = 0;`.
- [ ] Instruction 4: Call `updateStatisticsDisplay()`.
- [ ] Testing 1: Open `index.html` and browser. Play game and accumulate statistics.
- [ ] Testing 2: Click "Reset Statistics" button.
- [ ] Testing 3: Verify "Correct %" and "Avg. Time" reset to initial values in UI.
- [ ] Testing 4: Check in console if statistics variables are reset to 0.
- [ ] Testing 5: Play game again after reset and verify statistics start from zero.

## Chunk 6: "How to Play" Popup and Keyboard Navigation

### Prompt Set 6.1: Create Popup HTML Structure and Basic Styling
- [ ] Objective: Create "How to Play" popup HTML structure and basic CSS.
- [ ] Instruction 1: Open `index.html`.
- [ ] Instruction 2: In `popup-container`, add `<div id="how-to-play-popup">`.
- [ ] Instruction 3: Inside `how-to-play-popup`, add `<div class="popup-header"><h3>How to Play</h3><button id="popup-close-button">X</button></div>`.
- [ ] Instruction 4: Inside `how-to-play-popup`, add `<div class="popup-content"><p>...</p><p>...</p></div>` with game rules and input info.
- [ ] Instruction 5: Open `style.css` and add CSS rules for `#popup-container`, `#how-to-play-popup`, `.popup-header`, `#popup-close-button` (basic structure and visibility styles).
- [ ] Testing 1: Open `index.html` and verify "How to Play" popup is displayed (initially).
- [ ] Testing 2: Verify popup contains header, close button, and content paragraphs.
- [ ] Testing 3: Inspect popup elements in developer tools to confirm HTML and CSS structure.

### Prompt Set 6.2: Implement Popup Show/Hide Logic (JavaScript - Close Button)
- [ ] Objective: Implement popup hide logic with close button in `script.js`.
- [ ] Instruction 1: In `script.js`, declare global `const popupContainer = document.getElementById('popup-container');`.
- [ ] Instruction 2: In `DOMContentLoaded` listener, initially set `popupContainer.style.display = 'none';` (or ensure CSS sets it initially).
- [ ] Instruction 3: Get `popupCloseButton = document.getElementById('popup-close-button')`.
- [ ] Instruction 4: Add `click` event listener to `popupCloseButton`.
- [ ] Instruction 5: Inside listener, set `popupContainer.style.display = 'none';`.
- [ ] Testing 1: Open `index.html` and verify popup is initially hidden.
- [ ] Testing 2: Temporarily make popup visible (e.g., in CSS or JS). Reload and verify popup is visible.
- [ ] Testing 3: Click "X" close button and verify popup hides.

### Prompt Set 6.3: Implement Automatic Popup on First Visit (Session Storage)
- [ ] Objective: Show popup only on first visit per session using `sessionStorage`.
- [ ] Instruction 1: Modify `DOMContentLoaded` listener in `script.js`.
- [ ] Instruction 2: Check `sessionStorage.getItem('hasVisited')` before hiding popup.
- [ ] Instruction 3: If `null`, set `popupContainer.style.display = 'block';` and `sessionStorage.setItem('hasVisited', 'true')`.
- [ ] Instruction 4: Else (if not null), keep popup hidden (or set `popupContainer.style.display = 'none';` if needed).
- [ ] Testing 1: Open `index.html` in new browser/incognito window, verify popup shows on first visit.
- [ ] Testing 2: Close and reopen in same session, verify popup does NOT show automatically.
- [ ] Testing 3: Clear session storage and reload, verify popup shows again.

### Prompt Set 6.4: Add Question Mark Icon (HTML & CSS)
- [ ] Objective: Add question mark icon (help button) in HTML and style with CSS.
- [ ] Instruction 1: In `index.html`, in `<body>` before `date-display`, add `<button id="help-button">?</button>`.
- [ ] Instruction 2: In `style.css`, add CSS rules for `#help-button` (positioning, basic icon style).
- [ ] Testing 1: Open `index.html` and verify '?' icon is visible in top right corner.
- [ ] Testing 2: Check icon position, appearance, and cursor style.
- [ ] Testing 3: Inspect element in developer tools to confirm CSS rules are applied.

### Prompt Set 6.5: Wire Question Mark Icon to Toggle Popup
- [ ] Objective: Toggle popup visibility with question mark icon click in `script.js`.
- [ ] Instruction 1: In `script.js`, in `DOMContentLoaded` listener, get `helpButton = document.getElementById('help-button')`.
- [ ] Instruction 2: Add `click` event listener to `helpButton`.
- [ ] Instruction 3: Inside listener, check `popupContainer.style.display`.
- [ ] Instruction 4: If `'none'`, set `popupContainer.style.display = 'block';` (show popup).
- [ ] Instruction 5: Else, set `popupContainer.style.display = 'none';` (hide popup).
- [ ] Testing 1: Open `index.html` and verify popup is initially hidden (or first visit behavior).
- [ ] Testing 2: Click question mark icon and verify popup shows.
- [ ] Testing 3: Click question mark icon again and verify popup hides.
- [ ] Testing 4: Repeat clicks and confirm toggle functionality.

### Prompt Set 6.6: Implement Basic Keyboard Navigation and Tab Order
- [ ] Objective: Ensure basic keyboard navigation and logical tab order.
- [ ] Instruction 1: Review HTML source order in `index.html` for default tab order.
- [ ] Instruction 2: Verify `<button>` elements are focusable by default.
- [ ] Testing 1: Open `index.html` and use Tab key to navigate.
- [ ] Testing 2: Verify tab order: '?' icon -> Day buttons -> 'Reset' button.
- [ ] Testing 3: Verify buttons are activated by Enter and Spacebar when focused (day buttons, reset, help, close).
- [ ] Testing 4: Test Shift+Tab for reverse navigation.

## Chunk 7: Responsiveness and Polishing

### Prompt Set 7.1: Implement Responsive Design (CSS - Media Queries) - Initial Setup
- [ ] Objective: Set up basic CSS media query for smaller screens (`max-width: 768px`).
- [ ] Instruction 1: Open `style.css`.
- [ ] Instruction 2: Add `@media (max-width: 768px) { ... }` block.
- [ ] Instruction 3: Inside media query, add simple style (e.g., `body { background-color: #e0e0e0; }`).
- [ ] Testing 1: Open `index.html` in desktop browser (wide window). Verify default background color.
- [ ] Testing 2: Resize window to <768px width. Verify background color changes to darker gray.
- [ ] Testing 3: Resize window back and forth across 768px and observe background color switching.

### Prompt Set 7.2: Responsive Styling - Stack Day Buttons Vertically on Small Screens
- [ ] Objective: Stack day buttons vertically on small screens in media query.
- [ ] Instruction 1: In `@media (max-width: 768px) { ... }` in `style.css`, target `#input-area`.
- [ ] Instruction 2: Set `display: flex;` and `flex-direction: column;` for `#input-area`.
- [ ] Instruction 3: Optionally, adjust button margins in media query (e.g., `.day-button { margin: 5px 0; }`).
- [ ] Testing 1: Open `index.html` in wide browser window and verify day buttons are horizontal.
- [ ] Testing 2: Resize window to <768px, verify day buttons stack vertically.
- [ ] Testing 3: Check vertical button stacking looks reasonable on small screen simulation.

### Prompt Set 7.3: Responsive Styling - Adjust Font Sizes and Spacing (Small Screens)
- [ ] Objective: Adjust font sizes and spacing for smaller screens in media query.
- [ ] Instruction 1: In `@media (max-width: 768px) { ... }` in `style.css`, add rules to reduce font size for `date-display`, `feedback-area`, `statistics-area`, `.day-button` (optional).
- [ ] Instruction 2: Reduce vertical margins for `#date-display`, `#feedback-area`, `#statistics-area` (e.g., `margin: 15px 0;` or `margin: 10px 0;`).
- [ ] Instruction 3: Optionally adjust `#help-button` size/position in media query.
- [ ] Testing 1: Compare desktop vs. small screen view of the game.
- [ ] Testing 2: Verify smaller font sizes on small screens for text elements.
- [ ] Testing 3: Verify reduced vertical spacing on small screens for sections.
- [ ] Testing 4: Refine font sizes and spacing in CSS media query for balanced layout.

### Prompt Set 7.4: Visual/UI Testing and Refinement (Grayscale, Fonts, Spacing, Buttons)
- [ ] Objective: Visual UI testing across devices and browsers; refine grayscale, fonts, spacing, buttons.
- [ ] Instruction 1: Open `index.html` on Desktop, Tablet simulation, Mobile simulation (portrait & landscape).
- [ ] Instruction 2: Check Grayscale Palette consistency.
- [ ] Instruction 3: Check Font Consistency (single sans-serif).
- [ ] Instruction 4: Check Spacing and Alignment (balance, no overlap).
- [ ] Instruction 5: Check Day Button Styles (shape, color, no hover effects).
- [ ] Instruction 6: Check "How to Play" Popup styling.
- [ ] Instruction 7: Browser Compatibility Check (at least 2 browsers on desktop & mobile sim).
- [ ] Instruction 8: Refine CSS based on visual review (colors, fonts, spacing, button styles).
- [ ] Action: Make CSS adjustments in `style.css` based on visual testing.

### Prompt Set 7.5: Accessibility Testing (Keyboard Navigation, Tab Order, Contrast)
- [ ] Objective: Accessibility testing - keyboard nav, tab order, contrast.
- [ ] Instruction 1: Keyboard Navigation Testing: Tab order, Enter/Spacebar activation, Shift+Tab.
- [ ] Instruction 2: Tab Order Verification: '?' icon -> Day Buttons -> 'Reset' button -> Popup 'X' (if open).
- [ ] Instruction 3: Activation with Enter/Spacebar: Verify activation for all buttons when focused.
- [ ] Instruction 4: Shift+Tab Navigation: Verify reverse tab order works.
- [ ] Instruction 5: Color Contrast Check: Visual assessment of text readability in grayscale.
- [ ] Instruction 6: Use browser dev tools (if available) to check color contrast ratios.
- [ ] Instruction 7: Accessibility Refinement: Adjust HTML (`tabindex`) for tab order, CSS for contrast if needed.
- [ ] Action: Adjust HTML and CSS based on accessibility testing.

### Prompt Set 7.6: Functional Testing - Comprehensive Game Logic and Error Handling
- [ ] Objective: Comprehensive functional testing of game logic and error handling.
- [ ] Instruction 1: Date Generation Testing: Range (1582-3000), basic randomness check, error message "Unable to generate date".
- [ ] Instruction 2: Day of Week Calculation Testing: Verify `getCorrectDayIndex()` for diverse dates (use online calculator to confirm).
- [ ] Instruction 3: Input Methods Testing: Button input (all 7 days), Keyboard input (0-6 shortcuts), Invalid keyboard input (verify ignored).
- [ ] Instruction 4: Feedback Logic Testing: Correct feedback message, Incorrect feedback message (with day name), Time display accuracy.
- [ ] Instruction 5: Statistics Calculation and Display Testing: Percentage correct (various cases), Average time (correct guesses only, "N/A" initial), Reset Statistics button functionality.
- [ ] Instruction 6: "How to Play" Popup Testing: Initial popup (first visit), No popup (subsequent), Question mark icon toggle, Close button, Popup content review.
- [ ] Instruction 7: Error Handling (Invalid Input, Date Generation Error): Verify error message for date generation error, no errors for invalid input.
- [ ] Action: Document and fix any functional bugs found in `script.js`. Retest after fixes.

### Prompt Set 7.7: Final Review and Polishing
- [ ] Objective: Final overall review, polish, and specification checklist.
- [ ] Instruction 1: Final Playthrough: Play game extensively on different devices.
- [ ] Instruction 2: Specification Checklist: Systematically review original specification and check off implemented requirements.
- [ ] Instruction 3: User Experience (UX) Polish: Game flow smoothness, visual appeal, responsiveness, accessibility, overall impression.
- [ ] Instruction 4: Code Review (Optional): Code clarity, organization, basic efficiency, error handling review.
- [ ] Instruction 5: Final Bug Fixes: Address remaining bugs, visual imperfections, polish areas.
- [ ] Action: Make final HTML, CSS, and JavaScript adjustments for polish and bug fixes.

---

**Congratulations!** Once you have checked off all items in this `todo.md` checklist, your "Day of Week Game" should be complete and ready! Remember to save this as `todo.md` in your project directory. Good luck with your game!
