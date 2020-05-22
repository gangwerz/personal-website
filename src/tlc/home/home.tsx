import React from "react";

import About from "./about";

class Welcome extends React.Component {
    render() {
        return (
            <div id="home">
                <About />
            </div>
        );
    }
}

export default Welcome;
