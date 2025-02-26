
let startTime = null;
let endTime = null;
let timeTaken = null;

let totalAttempts = 0;
let correctAnswers = 0;
let sumOfCorrectTimes = 0;

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

function updateStatisticsDisplay() {
    const percentageCorrectElement = document.getElementById('percentage-correct');
    const averageTimeElement = document.getElementById('average-time');

    const percentage = (totalAttempts === 0) ? 0 : (correctAnswers / totalAttempts) * 100;
    const formattedPercentage = percentage.toFixed(2);
    const averageTime = (correctAnswers === 0) ? "N/A" : (sumOfCorrectTimes / correctAnswers).toFixed(4);


    percentageCorrectElement.textContent = "Correct: " + formattedPercentage + "%";
    averageTimeElement.textContent = "Avg. Time: " + averageTime;
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

    updateStatisticsDisplay(); // Call to set initial display

    // Add event listeners to day buttons
    const dayButtons = document.querySelectorAll('.day-button');
    dayButtons.forEach(button => {
        button.addEventListener('click', function() {
            endTime = performance.now(); // Stop timer on button click
            timeTaken = (endTime - startTime) / 1000; // Calculate time taken

            const userGuessIndex = parseInt(this.dataset.dayIndex);
            const correctAnswerIndex = getCorrectDayIndex(dateDisplayElement.textContent);
            const formattedTime = timeTaken.toFixed(4);

            if (userGuessIndex === correctAnswerIndex) {
                feedbackElement.textContent = "Correct. Time: " + formattedTime + " seconds";
                totalAttempts++;
                correctAnswers++;
                sumOfCorrectTimes += timeTaken;
                updateStatisticsDisplay();
            } else {
                const correctDayName = dayNames[correctAnswerIndex];
                feedbackElement.textContent = "Incorrect. Correct day: " + correctDayName + ". Time: " + formattedTime + " seconds";
                totalAttempts++;
                updateStatisticsDisplay();
            }
        });
    });

    // Add keyboard input handling
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key >= '0' && key <= '6') { // Check if key is 0-6
            const keyIndex = parseInt(key);
            dayButtons[keyIndex].click(); // Simulate click on corresponding day button
        }
    });

    // Add reset statistics functionality
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', function() {
        totalAttempts = 0;
        correctAnswers = 0;
        sumOfCorrectTimes = 0;
        updateStatisticsDisplay(); // Update display to reset values
    });
});
