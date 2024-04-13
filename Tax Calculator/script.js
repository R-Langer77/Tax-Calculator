// Function to validate input and display error icon if invalid
function validateInput(inputElement) {
    var inputValue = inputElement.value;
    var isError = isNaN(inputValue) || inputValue === '';

    // Get the error container
    var errorContainer = inputElement.parentElement.querySelector('.error-container');

    // Clear previous error and tooltip
    errorContainer.innerHTML = '';

    // If input is invalid, display error icon and tooltip
    if (isError) {
        var errorIcon = document.createElement('div');
        errorIcon.classList.add('error-icon');
        errorIcon.innerHTML = '!';
        errorIcon.setAttribute('title', 'Invalid input'); // Add tooltip title
        errorContainer.appendChild(errorIcon);
    }
}

// Add event listeners to input fields for input validation
var textInputs = document.querySelectorAll('input[type="text"]');
textInputs.forEach(function(input) {
    input.addEventListener('input', function() {
        validateInput(this);
    });
});


// Function to calculate tax and display result in a container box
function calculateTax() {
    // Validate input fields
    var valid = true;
    numberInputs.forEach(function(input) {
        validateInput(input);
        if (input.parentElement.querySelector('.error-icon')) {
            valid = false;
        }
    });

    // If any input is invalid, stop calculation
    if (!valid) {
        return;
    }

    // Rest of the code for calculating tax...
}
// Function to calculate tax and display result in a container box
function calculateTax() {
    // Get input values
    var grossIncome = parseFloat(document.getElementById("grossIncome").value);
    var extraIncome = parseFloat(document.getElementById("extraIncome").value);
    var deductions = parseFloat(document.getElementById("deductions").value);
    var age = document.getElementById("age").value;
  
    // Calculate overall income after deductions
    var overallIncome = grossIncome + extraIncome - deductions;
  
    // Initialize tax rate and threshold
    var taxRate = 0;
    var threshold = 800000; // 8 Lakhs threshold
  
    // Determine tax rate based on age
    if (age === "<40") {
        taxRate = 0.3; // 30% tax rate for age < 40
    } else if (age === "≥40 & <60") {
        taxRate = 0.4; // 40% tax rate for age ≥ 40 but < 60
    } else if (age === "≥60") {
        taxRate = 0.1; // 10% tax rate for age ≥ 60
    }
  
    // Calculate tax amount
    var taxAmount = 0;
    if (overallIncome > threshold) {
        taxAmount = taxRate * (overallIncome - threshold);
    }
  
    // Create a container box for displaying the result
    var resultContainer = document.createElement("div");
    resultContainer.classList.add("result-container");
    resultContainer.style.width = "600px"; // Width of the container
    resultContainer.style.height = "40%"; // Height of the container
    resultContainer.style.border = "1px solid #ccc"; // Border style
    resultContainer.style.borderRadius = "5px"; // Border radius
    resultContainer.style.padding = "20px"; // Padding
    resultContainer.style.position = "absolute"; // Positioning
    resultContainer.style.top = "40%"; // Center vertically
    resultContainer.style.left = "50%"; // Center horizontally
    resultContainer.style.transform = "translate(-50%, -50%)"; // Center the container
    resultContainer.style.backgroundColor = "#f0f0f0"; // Background color
    resultContainer.style.textAlign = "center"; // Center align text
    resultContainer.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"; // Font family
    
    // Prepare the message to display
    var resultMessage = "<h2>Your Overall Annual Income after tax deductions</h2>";
    resultMessage += "<p style='margin-bottom: 10px;'> " + overallIncome.toFixed(2) + " Lakhs</p>"; // Center align overall income
    resultMessage += "<h3>Calculated Tax Amount</h3>";
    resultMessage += "<p>" + taxAmount.toFixed(2) + " Lakhs</p>";
  
    // Set the result message inside the container
    resultContainer.innerHTML = resultMessage;
  
    // Append the container to the document body
    document.body.appendChild(resultContainer);
  }
  
  // Add event listener to the submit button
  document.getElementById("taxForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Call the function to calculate tax and display result
    calculateTax();
  });
 

  