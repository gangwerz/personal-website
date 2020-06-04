import React from "react";

import Badge from "./badge";
import badges from "./badgeData";
import Parallax from "../../shared/parallax";

class Greeter extends React.Component {
    render() {
        return (
            <div id="greeter" className="page">
                <Parallax
                    img_url={
                        "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg"
                    }
                ></Parallax>
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
                    key={i}
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
