//1st-Party React
import React from "react";
import ReactDOM from "react-dom";

//Components
import Greeter from "./components/pages/greeter/greeter";
import About from "./components/pages/about/about";
import Skills from "./components/pages/skills/skills";

function App() {
    return (
        <div id="app">
            <Greeter />
            <About />
            <Skills />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
