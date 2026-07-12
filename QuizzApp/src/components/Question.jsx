// Question.jsx
import React from "react";
import Options from "./Options";

const Question = ({ question, selectedOption, onOptionChange, onSubmit, showFeedback, buttonText }) => {
    return (
        <div className="w-100">
            <h3>Question {question.id}</h3>
            <h5 className="mt-2 text">{question.question}</h5>
            <form onSubmit={onSubmit} className="mt-2 mb-2">
                <Options
                    options={question.options}
                    selectedOption={selectedOption}
                    onOptionChange={onOptionChange}
                    showFeedback={showFeedback}
                    correctAnswer={question.answer}
                />
                <button 
                    type="submit" 
                    className="btn btn-primary w-100 py-2 mt-2"
                    disabled={!selectedOption}
                >
                    {buttonText}
                </button>
            </form>
        </div>
    );
};

export default Question;
