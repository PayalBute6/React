# ❓ Quiz App

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

A modern, responsive React quiz application built with **Vite** and styled using **Bootstrap 5** and custom CSS. This application supports custom quiz questions, interactive answer submissions, score tracking, and visual correctness feedback.

---

## ✨ Features

- **❓ Interactive Quiz Interface**: Clean structure with radio-based option selections.
- **🎯 Visual Feedback**: Real-time correctness highlight (green for correct, red for incorrect) upon submitting each answer.
- **📊 Dynamic Score Tracking**: Calculates and shows the final score and percentage at the end of the quiz.
- **🔄 Play Again Option**: Retake the quiz at any time without refreshing the page.
- **📱 Responsive Design**: Optimized for mobile and desktop screens using Bootstrap's responsive layout and dark-theme glassmorphism.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) (Functional Components & State Hooks)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: Bootstrap 5 + Vanilla CSS

---

## 📂 File Structure

```text
QuizzApp/
├── public/                 # Static assets
└── src/
    ├── components/
    │   ├── Options.jsx     # Option list component with selection & correctness colors
    │   ├── Question.jsx    # Displays question text and wraps options
    │   ├── QuestionBank.jsx # Mock database of quiz questions
    │   └── Score.jsx       # Quiz results screen with score & restart button
    ├── App.css             # Application layout styles & animations
    ├── App.jsx             # Main container holding state flow and question counter
    ├── index.css           # Global typography and theme configurations
    └── main.jsx            # Application mount point
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18+ recommended) installed.

### Installation & Run

1. Navigate to the `QuizzApp` directory:
   ```bash
   cd QuizzApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open `http://localhost:5173` in your browser to play the quiz.

---

## ⚙️ Configuration

You can customize the quiz content by modifying the questions array in [src/components/QuestionBank.jsx](file:///f:/React/React/QuizzApp/src/components/QuestionBank.jsx):

```javascript
const qBank = [
    {
        id: 1,
        question: "Your custom question text?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option C" // Must match one of the options exactly
    },
    ...
];
```

---

## 📝 License

This project is open-source under the MIT License.
