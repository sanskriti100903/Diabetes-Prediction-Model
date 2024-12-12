 # Overview
The Diabetes Prediction Model is a machine learning-based web application that predicts the likelihood of diabetes in an individual based on clinical parameters. The system uses Logistic Regression to make predictions based on inputs such as glucose levels, BMI, age, and others. The web application is built using HTML, CSS, JavaScript, with the backend powered by Node.js and Flask. This project aims to provide users with real-time diabetes risk predictions based on their clinical data.<br>

# Key Features
Real-time Diabetes Prediction: Users input clinical data, and the model predicts their likelihood of having diabetes.<br>
Interactive Web Interface: A simple, responsive front-end built using HTML, CSS, and JavaScript.<br>
Backend Communication: Node.js server that communicates with a Flask-based Python backend to handle data processing and prediction.<br>
Machine Learning Model: Logistic Regression model trained using the scikit-learn library to predict diabetes risk based on clinical parameters.<br>

# Technologies Used
Frontend: HTML, CSS, JavaScript<br>
Backend: Node.js<br>
Machine Learning: Python, scikit-learn, Flask <br>
Model: Logistic Regression <br>
Model Persistence: Pickle<br>

# Clinical Parameters
The following clinical parameters are required for the prediction:<br>
Pregnancies: Number of pregnancies the patient has had.<br>
Glucose: Plasma glucose concentration after 2 hours in an oral glucose tolerance test.<br>
Blood Pressure: Diastolic blood pressure (mm Hg).<br>
Skin Thickness: Triceps skin fold thickness (mm).<br>
Insulin: 2-Hour serum insulin (mu U/ml).<br>
BMI: Body Mass Index (weight in kg / height in m^2).<br>
Diabetes Pedigree Function: A function that represents the likelihood of diabetes based on family history.<br>
Age: Age of the patient.<br>
