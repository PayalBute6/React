import "./styles/App.css";

import Editor from "./components/Editor";

import useMarkdown from "./hooks/useMarkdown";

import Preview from "./components/Preview";


function App() {

    const {

        markdown,

        setMarkdown

    } = useMarkdown();

    return (

        <div className="app">

    <Editor
        markdown={markdown}
        setMarkdown={setMarkdown}
    />

    <Preview
        markdown={markdown}
    />

</div>

    );

}

export default App;