import React from "react";

import Badge from "./badge";
import badges from "./badgeData";

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
