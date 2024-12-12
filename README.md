 # Overview
The Diabetes Prediction Model is a machine learning-based web application that predicts the likelihood of diabetes in an individual based on clinical parameters. The system uses Logistic Regression to make predictions based on inputs such as glucose levels, BMI, age, and others. The web application is built using HTML, CSS, JavaScript, with the backend powered by Node.js and Flask. This project aims to provide users with real-time diabetes risk predictions based on their clinical data.<br>

# Key Features
Real-time Diabetes Prediction: Users input clinical data, and the model predicts their likelihood of having diabetes.
Interactive Web Interface: A simple, responsive front-end built using HTML, CSS, and JavaScript.
Backend Communication: Node.js server that communicates with a Flask-based Python backend to handle data processing and prediction.
Machine Learning Model: Logistic Regression model trained using the scikit-learn library to predict diabetes risk based on clinical parameters.<br>

#Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js
Machine Learning: Python, scikit-learn, Flask
Model: Logistic Regression
Model Persistence: Pickle

#Clinical Parameters
The following clinical parameters are required for the prediction:
Pregnancies: Number of pregnancies the patient has had.
Glucose: Plasma glucose concentration after 2 hours in an oral glucose tolerance test.
Blood Pressure: Diastolic blood pressure (mm Hg).
Skin Thickness: Triceps skin fold thickness (mm).
Insulin: 2-Hour serum insulin (mu U/ml).
BMI: Body Mass Index (weight in kg / height in m^2).
Diabetes Pedigree Function: A function that represents the likelihood of diabetes based on family history.
Age: Age of the patient.
