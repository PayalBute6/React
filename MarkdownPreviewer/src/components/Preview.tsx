import "../styles/Preview.css";

import { parseMarkdown } from "../utils/parser";

interface PreviewProps {

    markdown: string;

}

function Preview({

    markdown

}: PreviewProps) {

    const html = parseMarkdown(markdown);

    return (

        <div

            className="preview"

            dangerouslySetInnerHTML={{

                __html: html

            }}

        />

    );

}

export default Preview;