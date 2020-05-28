//1st-Party React
import React from "react";
import ReactDOM from "react-dom";

//Components
import Greeter from "./components/greeter/greeter";
import About from "./components/about/about";
import Skills from "./components/skills/skills";

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <Greeter />
                <About />
                <Skills />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
