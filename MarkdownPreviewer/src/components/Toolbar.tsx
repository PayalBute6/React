import "../styles/Toolbar.css";

import CopyButton from "./CopyButton";
import { parseMarkdown } from "../utils/parser";

interface ToolbarProps {
    markdown: string;
    onClear: () => void;
}

function Toolbar({
    markdown,
    onClear
}: ToolbarProps) {

    const html = parseMarkdown(markdown);

    return (

        <div className="toolbar">

            <div className="toolbar-title">

                <h1>Markdown Previewer</h1>

                <span>
                    React + TypeScript
                </span>

            </div>

            <div className="toolbar-actions">

                <button className="toolbar-btn">
                    Templates
                </button>

                <CopyButton
                    label="Copy Markdown"
                    text={markdown}
                />

                <CopyButton
                    label="Copy HTML"
                    text={html}
                />

                <button
                    className="toolbar-btn danger"
                    onClick={onClear}
                >
                    Clear
                </button>

            </div>

        </div>

    );

}

export default Toolbar;