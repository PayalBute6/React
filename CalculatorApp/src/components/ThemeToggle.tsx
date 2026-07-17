interface Props{

    theme:"light"|"dark";

    toggleTheme:()=>void;
}

function ThemeToggle({

    theme,

    toggleTheme

}:Props){

    return(

        <button
            className="calc-btn"
            onClick={toggleTheme}
        >

            {theme==="light"
                ? "🌙"
                : "☀️"}

        </button>

    )

}

export default ThemeToggle;