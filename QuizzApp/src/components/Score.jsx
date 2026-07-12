// Score.jsx
import React from 'react';

const Score = ({ score, totalQuestions, onRestart, questions, userAnswers }) => {
    const percentage = Math.round((score / totalQuestions) * 100);
    
    return (
        <div className="text-center w-100">
            <h2>Results</h2>
            <div className="my-4">
                <h4 className="display-4 font-weight-bold text-primary">{score} / {totalQuestions}</h4>
                <p className="text-muted">You scored {percentage}%</p>
            </div>
            
            <div className="text-start my-4 results-report" style={{ maxHeight: '250px', overflowY: 'auto', paddingRight: '8px' }}>
                <h5 className="mb-3 text">Answer Summary:</h5>
                {questions.map((q, idx) => {
                    const userAnswer = userAnswers[idx];
                    const isCorrect = userAnswer === q.answer;
                    
                    return (
                        <div key={q.id} className="mb-3 p-3 rounded" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                            <p className="fw-bold mb-2 small">{idx + 1}. {q.question}</p>
                            <div className="small">
                                <span className={isCorrect ? 'text-success' : 'text-danger'}>
                                    Your Answer: {userAnswer || 'Skipped'}
                                </span>
                                {!isCorrect && (
                                    <div className="text-success mt-1">Correct Answer: {q.answer}</div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            <button onClick={onRestart} className="btn btn-outline-primary btn-lg mt-2 w-100">
                Play Again
            </button>
        </div>
    );
};

export default Score;
