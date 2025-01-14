document.getElementById("predictionForm").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const formData = {
        pregnancies: document.getElementById("pregnancies").value,
        glucose: document.getElementById("glucose").value,
        bloodPressure: document.getElementById("bloodPressure").value,
        skinThickness: document.getElementById("skinThickness").value,
        insulin: document.getElementById("insulin").value,
        bmi: document.getElementById("bmi").value,
        diabetesPedigreeFunction: document.getElementById("diabetesPedigreeFunction").value,
        age: document.getElementById("age").value,
    };
  
    try {
        // Sending the data to the backend
        const response = await fetch("http://localhost:5000/predict", {  // Ensure Flask is running on port 5000
            method: "POST",
            headers: { "Content-Type": "application/json" },// sends as json format
            body: JSON.stringify(formData),  // Send form data as JSON
        });
  
        const result = await response.json();
        // Display the prediction result in the frontend
        if (result.prediction) {
            document.getElementById("result").innerText = result.prediction;
        } else if (result.error) {
            document.getElementById("result").innerText = result.error;
        }
    } catch (error) {
        // In case of error, display a message
        document.getElementById("result").innerText = "Error occurred. Please try again.";
    }
  });
 