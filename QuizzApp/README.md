# Quiz App

A modern, responsive React quiz application built with Vite and styled using Bootstrap and custom CSS. This application supports custom quiz questions, interactive answer submissions, score tracking, and visual correctness feedback.

## Features

- **Interactive Quiz Interface**: Clean structure with radio-based option selections.
- **Visual Feedback**: Real-time correctness highlight (green for correct, red for incorrect) upon submitting each answer.
- **Dynamic Score Tracking**: Calculates and shows the final score and percentage at the end of the quiz.
- **Play Again Option**: Retake the quiz at any time without refreshing.
- **Modern Responsive Design**: Optimized for both mobile and desktop screens using Bootstrap's responsive layout tools and custom dark-theme glassmorphism.

---

## Tech Stack

- **Framework**: React 19 (Functional Components & State Hooks)
- **Build Tool**: Vite
- **Styling**: Bootstrap 5 + Vanilla CSS

---

## File Structure

```
QuizzApp/
├── public/                 # Static assets
└── src/
    ├── components/
    │   ├── Options.jsx     # Option list component with selection & correctness colors
    │   ├── Question.jsx    # Displays individual question text and wraps options
    │   ├── QuestionBank.jsx # Mock database of questions
    │   └── Score.jsx       # Quiz results screen with score & restart button
    ├── App.css             # Main application layout styles & animations
    ├── App.jsx             # Main container holding the logic and state flow
    ├── index.css           # Global typography and theme configurations
    └── main.jsx            # Application mount point
```

---

## Getting Started

### Prerequisites

Make sure you have Node.js (version 18 or above recommended) installed on your system.

### Installation

1. Navigate to the project root directory:
   ```bash
   cd QuizzApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To run the development server:
```bash
npm run dev
```

Open the local URL (usually `http://localhost:5173` or `http://localhost:5174`) in your browser to play the quiz.

---

## Configuration

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
