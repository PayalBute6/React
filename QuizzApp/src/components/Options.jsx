// Options.jsx
import React from 'react';

const Options = ({ options, selectedOption, onOptionChange, showFeedback, correctAnswer }) => {
    return (
        <div className="options-container">
            {options.map((option, index) => {
                let statusClass = "";
                if (selectedOption === option) {
                    statusClass = "selected";
                }
                
                // If feedback is active, style options accordingly
                if (showFeedback) {
                    if (option === correctAnswer) {
                        statusClass = "correct";
                    } else if (selectedOption === option) {
                        statusClass = "incorrect";
                    }
                }

                return (
                    <label key={index} className={`option-label ${statusClass}`}>
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            checked={selectedOption === option}
                            onChange={onOptionChange}
                            disabled={showFeedback} // Prevent changing selection after submit
                            className="form-check-input me-3"
                        />
                        <span>{option}</span>
                    </label>
                );
            })}
        </div>
    );
};

export default Options;
