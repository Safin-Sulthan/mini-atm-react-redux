# Mini ATM Application 💳

A **single-page, single-account Mini ATM application** built using **React and Redux**.  
This is my **first complete project after learning the fundamentals of React and Redux**.

---

## 🔹 Project Description

This project simulates the core functionality of an ATM for **one user account**.  
All operations are handled within a **single-page React application**, where different screens are rendered conditionally without using routing.

The goal of this project was to apply **React component logic**, **Redux state management**, and **CSS layout handling** in a practical, end-to-end application.

---

## 🔹 Key Characteristics

- 🧑‍💼 **Single ATM account** (one user, one balance)
- 🧭 **Single-page application** (no React Router)
- 🔄 Screen switching handled using component state
- 🎯 Focused on fundamentals, not advanced patterns

---

## 🔹 Features

- 🔐 PIN-based login authentication
- 💰 Deposit money into the account
- 💸 Withdraw money from the account
- 📊 Check current account balance
- 🧾 View mini statement (transaction history)
- 🔄 Centralized state management using Redux
- 🎨 Glassmorphism-style UI
- 📱 Basic responsive design

---

## 🔹 Tech Stack

- **Frontend:** React
- **State Management:** Redux
- **Styling:** CSS
- **Version Control:** Git & GitHub

---

## 🔹 Learning Context

This is my **first hands-on project after learning React and Redux**, built to strengthen my understanding of:

- React functional components
- useState for UI control
- Conditional rendering for screen navigation
- Redux store, reducers, and global state
- Handling shared state like balance and transactions
- Separating layout responsibility between components
- Debugging real-world UI and CSS issues
- Maintaining clean Git commits

---

## 🔹 Project Structure (Simplified)

## File Structure
src/
├── Components/
│ ├── PinScreen.jsx
│ ├── Dashboard.jsx
│ ├── Deposit.jsx
│ ├── Withdraw.jsx
│ ├── Balance.jsx
│ └── MiniStatement.jsx
├── redux/
│ ├── store.js
│ └── reducers.js
├── assets/
└── App.jsx


---

## 🔹 Notable Implementation Detail

During development, I identified and fixed a **layout responsibility issue** where a parent component was incorrectly controlling screen centering.  
This was resolved by refactoring the CSS so that:

- Navigation/controller components handle screen logic only
- Individual screens manage their own layout and positioning

This improved UI consistency and prevented modal-like behavior across screens.

---

## 🔹 Limitations (Intentional)

- Single-user ATM simulation
- No backend or database
- No routing (React Router not used)
- No authentication persistence

These limitations were intentional to keep the project **focused on learning core concepts**.

---

## 🔹 Future Improvements

- Add multiple account support
- Add proper routing with React Router
- Improve input validation and error handling
- Replace alert messages with UI notifications
- Enhance responsiveness and animations

---

## 🔹 Project Level

- **Level:** Beginner / Fresher
- **Type:** First React + Redux project
- **Application Type:** Single-page, single-account ATM simulation
- **Purpose:** Learning + Interview Portfolio Project

---

## 🔹 Author

**Safin Sulthan
M.Sc. Artificial Intelligence & Data Science  
Aspiring Frontend Developer

---

## 🔹 Note

This project is intentionally kept simple to demonstrate strong fundamentals rather than advanced or production-level optimizations.
