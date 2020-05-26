import React from "react";

import Badge from "./badge";

const badges = [
    {
        name: "E-Mail",
        link: "mailto:web@gangwerz.xyz",
        icon: <i className="fas fa-envelope-open-text" />,
    },
    {
        name: "Resume",
        link:
            "https://s3-us-west-2.amazonaws.com/assets.gangwerz.xyz/Zach_Gangwer-Resume.pdf",
        icon: <i className="far fa-file"></i>,
    },
    {
        name: "Gitlab",
        link: "https://gitlab.com/gangwerz",
        icon: <i className="fab fa-gitlab" />,
    },
    {
        name: "Github",
        link: "https://github.com/gangwerz",
        icon: <i className="fab fa-github" />,
    },
];

class Greeter extends React.Component {
    render() {
        return (
            <div id="greeter" className="page">
                <h1>Zach Gangwer</h1>
                <div id="badges">{this.parseIcons()}</div>
            </div>
        );
    }

    parseIcons() {
        let out = [];

        for (let i = 0; i < badges.length; i++) {
            out.push(
                <Badge
                    name={badges[i].name}
                    link={badges[i].link}
                    icon={badges[i].icon}
                />
            );
        }

        return out;
    }
}

export default Greeter;
