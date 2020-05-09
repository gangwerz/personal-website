import React from "react";

import About from "./about";
import Blog from "./blog";

class Welcome extends React.Component {
    render() {
        return (
            <div id="home">
                <h2>Welcome!</h2>
                <About />
                <Blog />
            </div>
        );
    }
}

export default Welcome;
