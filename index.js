const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a GET route for "/"
app.get("/", (req, res) => {
    res.send("Welcome to the Node.js server! Use the '/predict' endpoint for predictions.");
});

// Forward requests to Flask backend
app.post("/predict", async (req, res) => {
    try {
        const response = await axios.post("http://127.0.0.1:5000/predict", req.body);
        res.json(response.data); // Relay Flask's response to the frontend
    } catch (error) {
        console.error("Error communicating with Flask:", error.message);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Node.js server running on http://localhost:${PORT}`);
})

