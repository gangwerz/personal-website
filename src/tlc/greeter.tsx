import React from "react";

const icons = [
    {
        name: "email",
        link: "mailto:web@gangwerz.xyz",
        img: <i className="fas fa-envelope-open-text" />,
    },
    {
        name: "gitlab",
        link: "https://gitlab.com/gangwerz",
        img: <i className="fab fa-gitlab" />,
    },
    {
        name: "github",
        link: "https://github.com/gangwerz",
        img: <i className="fab fa-github" />,
    },
];

class Greeter extends React.Component {
    render() {
        return (
            <div id="greeter" className="page">
                <h1>Zach Gangwer</h1>
                <ul>{this.parse_icons()}</ul>
            </div>
        );
    }

    parse_icons() {
        let out = [];

        for (let i = 0; i < icons.length; i++) {
            out.push(
                <li key={icons[i].name + "-icon"} className="icon">
                    <a href={icons[i].link}>{icons[i].img}</a>
                </li>
            );
        }

        return out;
    }
}

export default Greeter;
