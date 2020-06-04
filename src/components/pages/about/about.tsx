import React from "react";

import aboutMe from "./aboutData";

class About extends React.Component {
    render() {
        return (
            <div id="about" className="page">
                {aboutMe()}
            </div>
        );
    }
}

export default About;
