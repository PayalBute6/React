import "../styles/Editor.css";

interface EditorProps {

    markdown: string;

    setMarkdown: React.Dispatch<React.SetStateAction<string>>;

}

function Editor({

    markdown,

    setMarkdown

}: EditorProps) {

    return (

        <textarea

            className="editor"

            placeholder="Start typing your Markdown here..."

            value={markdown}

            onChange={(event) => setMarkdown(event.target.value)}

        />

    );

}

export default Editor;