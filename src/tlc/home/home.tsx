import React from "react";

import About from "./about";
import Blog from "./blog";

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
