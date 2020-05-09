import React from "react";

class About extends React.Component {
    render() {
        return (
            <div id="about">
                <ul>
                    <li className="extern">
                        <a href="http://gitlab.com/gangwerz">Gitlab</a>
                    </li>
                    <li className="extern">
                        <a href="http://github.com/gangwerz">Github</a>
                    </li>
                    <li className="extern">
                        <a href="mailto://web@gangwerz.xyz">E-Mail</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default About;
