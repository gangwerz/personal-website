import React from "react";

import styled from "styled-components";

import Badge from "./badge";
import badges from "./badgeData";
import Parallax from "../../shared/parallax";

const GreeterWrapper = styled.div`
    background-color: var(--primary);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const GreeterTitle = styled.h1`
    margin: 0;
    width: 100%;
    color: whitesmoke;
`;

const Badges = styled.div`
    display: inline-flex;
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
`;

class Greeter extends React.Component {
    render() {
        return (
<<<<<<< HEAD:src/components/greeter/greeter.tsx
            <GreeterWrapper className="page">
                <GreeterTitle>Zach Gangwer</GreeterTitle>
                <Badges>{this.parseIcons()}</Badges>
            </GreeterWrapper>
=======
            <div id="greeter" className="page">
                <Parallax
                    img_url={
                        "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg"
                    }
                ></Parallax>
                <h1>Zach Gangwer</h1>
                <div id="badges">{this.parseIcons()}</div>
            </div>
>>>>>>> feature/parallax:src/components/pages/greeter/greeter.tsx
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
