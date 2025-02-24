

function generateDate() {
    const today = new Date();
    return today.toLocaleDateString();
}

document.addEventListener('DOMContentLoaded', function() {
    const dateDisplayElement = document.getElementById('date-display');
    const generatedDate = generateDate();
    dateDisplayElement.textContent = generatedDate;
});
