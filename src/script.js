// Get the display element and buttons from the HTML document
const display = document.getElementById('calc-display');
const buttons = document.getElementsByClassName('btn');

// Store the current value of the calculator expression
let currentValue = "";

// Function to evaluate and display the result
function evaluateResult() {
    // Replace certain symbols with their JavaScript equivalents
    const convertedValue = currentValue
        .replace("×" , "*")
        .replace("÷","/")
        .replace('%','*0.01')
        .replace('sin','Math.sin')
        .replace('cos','Math.cos')
        .replace('ln','Math.log')
        .replace('π','Math.PI')
        .replace('log','Math.log10')
        .replace('e','Math.E')
        .replace('tan','Math.tan')
        .replace('√','Math.sqrt');

    // Evaluate the converted expression
    const result = eval(convertedValue);

    // Update current value and display
    currentValue = result.toString();
    display.value = currentValue;
}

// Loop through each button and attach a click event listener
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener('click', function () {
        // Get the text content of the clicked button
        const value = button.innerText;

        try {
            // Check button value and perform corresponding action
            if (value == "AC") {
                // Clear the calculator
                currentValue = ""
                display.value = currentValue;
            } else if (value == "=") {
                // Evaluate and display the result
                evaluateResult();
            } else {
                // Update the current value and display
                currentValue += value;
                display.value = currentValue;
            }
        } catch (error) {
            // Handle any errors that may occur during evaluation
            console.error(error);
            currentValue = "ERROR!";
            display.value = currentValue;
        }
    });
}
