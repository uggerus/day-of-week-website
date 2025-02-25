
let startTime = null;
let endTime = null;
let timeTaken = null;

function generateDate() {
    try {
        // Base date: October 15, 1582 (Start of Gregorian calendar)
        const startDate = new Date(1582, 9, 15); // Month is 0-indexed in JS, so 9 = October
        
        // End date: December 31, 3000
        const endDate = new Date(3000, 11, 31); // 11 = December
        
        // Calculate time difference in milliseconds
        const timeDiff = endDate.getTime() - startDate.getTime();
        
        // Generate a random number within the time range
        const randomTime = Math.random() * timeDiff;
        
        // Create new date by adding random time to start date
        const randomDate = new Date(startDate.getTime() + randomTime);
        
        // Format the date in a user-friendly format: "Month Day, Year"
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return randomDate.toLocaleDateString(undefined, options);
    } catch (error) {
        console.error("Error generating random date:", error);
        return null;
    }
}

function getCorrectDayIndex(dateString) {
    const date = new Date(dateString); 
    return date.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
}


document.addEventListener('DOMContentLoaded', function() {
    const dateDisplayElement = document.getElementById('date-display');
    const generatedDate = generateDate();

    if (generatedDate === null) {
        dateDisplayElement.textContent = "Unable to generate date";
    } else {
        dateDisplayElement.textContent = generatedDate;
        startTime = performance.now(); // Start timer when date is displayed
        endTime = null;
        timeTaken = null;
    }

    const feedbackElement = document.getElementById('feedback-area');
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Add event listeners to day buttons
    const dayButtons = document.querySelectorAll('.day-button');
    dayButtons.forEach(button => {
        button.addEventListener('click', function() {
            endTime = performance.now(); // Stop timer on button click (at the beginning of event handler)
            timeTaken = (endTime - startTime) / 1000; // Calculate time taken in seconds

            const userGuessIndex = parseInt(this.dataset.dayIndex);
            const correctAnswerIndex = getCorrectDayIndex(dateDisplayElement.textContent);

            if (userGuessIndex === correctAnswerIndex) {
                feedbackElement.textContent = "Correct";
            } else {
                const correctDayName = dayNames[correctAnswerIndex];
                feedbackElement.textContent = "Incorrect. Correct day: " + correctDayName;
            }
        });
    });
});

