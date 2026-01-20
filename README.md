🔹 Project Overview

The Mini ATM Application is a frontend project built using React and Redux to simulate basic ATM functionalities.
It focuses on state management, UI logic, and clean component-based architecture, making it suitable for demonstrating beginner-to-intermediate frontend skills.

This project was built incrementally to practice real-world React development patterns such as global state management, conditional rendering, and user feedback handling.

🔹 Features

🔐 User login with PIN validation

📊 Dashboard with ATM options

💰 Deposit money

💸 Withdraw money with balance validation

🧾 View account balance

📄 Mini statement (transaction history)

✅ Inline success and error messages (no browser alerts)

🎨 Clean UI with glassmorphism-style cards

🔹 Tech Stack

React – UI development

Redux – Global state management

JavaScript (ES6+)

CSS3 – Styling and layout

🔹 Concepts Demonstrated

Local state vs global state

Redux store, reducers, and actions

Conditional rendering in React

Controlled form inputs

Component-based UI design

Basic UX principles (user feedback, validation)

🔹 Project Structure (High Level)
src/
├── Components/
│   ├── Dashboard.jsx
│   ├── Deposit.jsx
│   ├── Withdraw.jsx
│   ├── Balance.jsx
│   ├── MiniStatement.jsx
│   └── PinScreen.jsx
├── redux/
│   ├── store.js
│   └── reducers.js
├── App.jsx
└── index.js

🔹 How to Run the Project

Clone the repository

git clone https://github.com/Safin-Sulthan/mini-atm-react-redux.git


Navigate to the project directory

cd mini-atm-react-redux


Install dependencies

npm install


Start the application

npm start

🔹 Learning Outcome

This project helped me understand:

How to manage shared application state using Redux

How React re-renders UI based on state changes

How to design clean and predictable UI logic

How to structure a small-to-medium React project

🔹 Future Enhancements

Persist account data using localStorage

Create reusable UI components

Improve accessibility and responsiveness

👤 Author

Safin Sulthan
Frontend Developer (React)
GitHub: https://github.com/Safin-Sulthan
