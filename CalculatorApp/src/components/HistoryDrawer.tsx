import type { HistoryItem } from "../types/history";

interface HistoryProps {
    history: HistoryItem[];
    isOpen: boolean;
    onClose: () => void;
    onClear: () => void;
}

function History({ history, isOpen, onClose, onClear }: HistoryProps) {
    return (
        <div className={`history-drawer ${isOpen ? "open" : ""}`}>
            <div className="history-header">
                <h3>History</h3>
                <div style={{ display: "flex", gap: "8px" }}>
                    {history.length > 0 && (
                        <button className="close-btn" onClick={onClear} title="Clear history" style={{ fontSize: "1rem" }}>
                            🗑️
                        </button>
                    )}
                    <button className="close-btn" onClick={onClose} title="Close history">
                        ✕
                    </button>
                </div>
            </div>

            <div className="history-list">
                {history.length === 0 ? (
                    <div className="no-history">No history yet</div>
                ) : (
                    history.slice().reverse().map((item, index) => (
                        <div key={index} className="history-item">
                            <span className="expr">{item.expression}</span>
                            <span className="res">= {item.result}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default History;