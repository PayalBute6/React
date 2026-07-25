import "./styles/App.css";

import Editor from "./components/Editor";

import useMarkdown from "./hooks/useMarkdown";

import Preview from "./components/Preview";

import Toolbar from "./components/Toolbar";

function App() {

    const {

        markdown,

        setMarkdown

    } = useMarkdown();

    function handleClear() {
        setMarkdown("");
    };

    return (

    <div className="app-container">

        <Toolbar
    markdown={markdown}
    onClear={handleClear}
/>

        <main className="workspace">

            <Editor
                markdown={markdown}
                setMarkdown={setMarkdown}
            />

            <Preview
                markdown={markdown}
            />

        </main>

    </div>

);

}

export default App;