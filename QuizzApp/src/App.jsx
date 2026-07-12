// App.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./components/Question.jsx";
import qBank from "./components/QuestionBank.jsx";
import Score from "./components/Score.jsx";
import "./App.css";

const App = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [quizEnd, setQuizEnd] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);

    const handleOptionChange = (e) => {
        if (!showFeedback) {
            setSelectedOption(e.target.value);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Step 1: Show Feedback and Check Answer
        if (!showFeedback) {
            // Save user answer
            setUserAnswers(prev => [...prev, selectedOption]);
            
            if (selectedOption === qBank[currentQuestion].answer) {
                setScore(prev => prev + 1);
            }
            setShowFeedback(true);
        } else {
            // Step 2: Navigate to next question
            setShowFeedback(false);
            setSelectedOption("");
            if (currentQuestion + 1 < qBank.length) {
                setCurrentQuestion(prev => prev + 1);
            } else {
                setQuizEnd(true);
            }
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setSelectedOption("");
        setScore(0);
        setUserAnswers([]);
        setQuizEnd(false);
        setShowFeedback(false);
    };

    // Calculate progress percentage
    const progressPercent = (currentQuestion / qBank.length) * 100;

    return (
        <div className="App d-flex flex-column align-items-center justify-content-center">
            <h1 className="app-title text-center">QUIZ APP</h1>
            
            {!quizEnd && (
                <div className="w-100 progress-bar-container">
                    <div 
                        className="progress-bar-fill" 
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                </div>
            )}

            {!quizEnd ? (
                <Question
                    question={qBank[currentQuestion]}
                    selectedOption={selectedOption}
                    onOptionChange={handleOptionChange}
                    onSubmit={handleFormSubmit}
                    showFeedback={showFeedback}
                    buttonText={showFeedback ? (currentQuestion + 1 === qBank.length ? "Finish Quiz" : "Next Question") : "Submit Answer"}
                />
            ) : (
                <Score
                    score={score}
                    totalQuestions={qBank.length}
                    onRestart={handleRestart}
                    questions={qBank}
                    userAnswers={userAnswers}
                />
            )}
        </div>
    );
};

export default App;
