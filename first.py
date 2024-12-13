import numpy as np
import pandas as pd
import pickle
from flask import Flask, request, jsonify
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
import warnings

# Suppress the feature name warning from sklearn
warnings.filterwarnings("ignore", message="X does not have valid feature names")

# Load the dataset
data = pd.read_csv("C:\\Users\\HP\\OneDrive\\Desktop\\diabetes.csv")

# Display the first few rows
print(data.head())

# Define features (X) and target (y)
X = data.drop("Outcome", axis=1)  # All columns except 'Outcome'
y = data["Outcome"]  # Target variable

# Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Standardize the features
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Initialize logistic regression model
model = LogisticRegression()

# Train the model
model.fit(X_train, y_train)

# Evaluate the model on the test data
y_pred = model.predict(X_test)

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100:.2f}%")

# Classification report
print("\nClassification Report:")
print(classification_report(y_test, y_pred))

# Confusion matrix
print("\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))

# Save the model
with open("model.pkl", "wb") as model_file:
    pickle.dump(model, model_file)

# Save the scaler
with open("scaler.pkl", "wb") as scaler_file:
    pickle.dump(scaler, scaler_file)

print("Model and scaler saved successfully.")

# Initialize the Flask app
app = Flask(__name__)

# Load the saved model and scaler
try:
    model = pickle.load(open("model.pkl", "rb"))
    scaler = pickle.load(open("scaler.pkl", "rb"))
except Exception as e:
    print(f"Error loading model or scaler: {e}")