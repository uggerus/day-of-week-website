Day of Week Game - Developer Specification
Version: 1.0
Date: October 26, 2023

1. Introduction
This document specifies the requirements for a simple, single-page website game called "Day of Week Game." The game presents the user with a random date, and the user must guess the correct day of the week as quickly as possible. The goal is a fun, personal project with a minimalist and clean design.

2. Functional Requirements
2.1. Game Flow
Date Generation:

The game shall generate a random date between October 15, 1582, and December 31, 3000, inclusive, using the Gregorian calendar.
Date generation should be uniformly random across this date range.
If date generation fails (unlikely), display the error message "Unable to generate date" in the date display area.
Date Display:

The generated date shall be prominently displayed to the user at the top of the game interface.
Font and styling of the date display should adhere to the minimalist grayscale visual style (see Section 3).
User Input:

The user shall input their guess for the day of the week.
Input Methods:
Day of Week Buttons: Seven buttons shall be displayed, each labeled with a day of the week (Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday).
Keyboard Number Shortcuts: The user can also press number keys 0-6 to select the day of the week, where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday. This mapping shall be explained in the "How to Play" popup.
Input Validation: Invalid input (e.g., typing letters, pressing keys outside 0-6 range) shall be ignored. No error messages should be displayed for invalid input.
Feedback:

Immediate Feedback: After the user selects a day of the week, the game shall immediately provide feedback.
Correct Answer:
Display "Correct" feedback.
Display the time taken for that attempt (measured in seconds with 4 decimal places).
Incorrect Answer:
Display "Incorrect" feedback.
Display the correct day of the week for the given date.
Still display the time taken for the attempt (measured in seconds with 4 decimal places), but this time will not contribute to the average time statistic.
Statistics Display:

Always Visible: Percentage correct and average time statistics shall be displayed at all times, below the feedback area.
Percentage Correct: Displayed with the label "Correct:", formatted to two decimal places. Calculated as (number of correct answers / total attempts) * 100%.
Average Time: Displayed with the label "Avg. Time:", formatted to four decimal places in seconds. Calculated as the average of times from all correctly answered questions. Display "N/A" initially and until the first correct answer is achieved.
Reset Statistics Button: A button labeled "Reset Statistics" shall be located to the right of the statistics display. Clicking this button resets both "Percentage Correct" to 0.00% and "Average Time" to "N/A".
How to Play Popup:

Accessible via a question mark icon in the top right corner of the screen.
When first entering the website, this popup should be displayed automatically.
Content should explain the game rules and input methods, including the keyboard number shortcuts (0=Sunday to 6=Saturday).
The popup should have a close button (e.g., "X") and should also close when the question mark icon is clicked again.
Popup should disappear immediately upon closing (no animations).
Keyboard Navigation & Accessibility:

Full keyboard navigation should be supported.
Tab Order:
"How to Play" question mark icon.
Day of week buttons (top-to-bottom, based on vertical stacking).
"Reset Statistics" button.
Interactive elements should be activatable via the Enter key or Spacebar when focused.
3. Non-Functional Requirements
Visual Style:

Minimalist and Clean: The website should have a minimalist and clean visual aesthetic.
Color Palette: Grayscale (various shades of gray, black, and white).
Font: Single sans-serif font for all text elements.
Spacing: Compact spacing between elements.
Day of Week Buttons: Rectangular buttons with rounded corners, solid light gray background, no hover or press effects.
Responsiveness:

The website should be responsive and function well on desktop computers, tablets, and mobile phones.
The layout (Date -> Input -> Feedback -> Statistics) should remain consistent across screen sizes, with day-of-week buttons stacking vertically on smaller screens.
Performance:

The game should be responsive and performant. Date generation, feedback, and statistic updates should be quick and seamless.
Technology:

The website shall be implemented as a single HTML page using plain HTML, CSS, and JavaScript. No JavaScript frameworks or backend databases are required.
4. Architecture
The game will be a single-page application (SPA) built with front-end technologies only (HTML, CSS, JavaScript).

HTML: Structure the game elements (date display, input buttons, feedback area, statistics, popup).
CSS: Style the elements to achieve the minimalist grayscale design and responsive layout.
JavaScript: Implement the game logic:
Date generation (within the specified range and Gregorian calendar).
Timer management (start, stop, calculate time).
User input handling (button clicks, keyboard shortcuts).
Feedback logic (correct/incorrect, display correct day, time).
Statistics calculation and display (percentage correct, average time, reset functionality).
"How to Play" popup functionality.
5. Data Handling
Data handling is minimal as this is a front-end only game.

Game State: Game state (current date, start time, number of attempts, number of correct answers, times for correct answers) will be managed in JavaScript variables within the user's browser session.
Statistics Persistence: Statistics are session-based and will be reset when the user closes the browser or manually resets them via the "Reset Statistics" button. No data persistence across sessions is required.
6. Error Handling
Date Generation Error: If date generation fails, display "Unable to generate date" in the date display area.
Invalid User Input: Invalid user input (typing letters, invalid key presses) should be ignored. No error messages are needed for invalid input.
7. Testing Plan
Basic testing should include:

Functional Testing:

Verify correct date generation within the specified range.
Verify correct day of week calculation for various dates.
Test all input methods (buttons, keyboard shortcuts).
Verify correct feedback for correct and incorrect answers.
Verify accurate timer functionality.
Verify correct calculation and display of percentage correct and average time statistics.
Test "Reset Statistics" button functionality.
Test "How to Play" popup functionality (opening, closing, content).
Test full keyboard navigation and correct tab order.
Test handling of date generation errors and invalid user input.
Visual/UI Testing:

Verify minimalist grayscale visual style is implemented correctly.
Verify responsive layout across different screen sizes (desktop, tablet, mobile).
Check font consistency, spacing, button styles.
Accessibility Testing:

Verify full keyboard navigation is functional and logical.
Ensure sufficient color contrast for readability (though grayscale design inherently helps with this).
