import React from "react";

import styled from "styled-components";

import Badge from "./badge";
import badges from "./badgeData";
import Parallax from "../../shared/parallax";

const GreeterWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    background-color: rgba(15, 15, 15, 0.7);
`;

const GreeterTitle = styled.h1`
    width: 100%;
    color: white;
    font-size: 9em;

    @media (max-width: 600px) {
        font-size: 5rem;
        overflow-wrap: break-word;
    }
`;

const Badges = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: space-evenly;
`;

class Greeter extends React.Component {
    render() {
        return (
            <Parallax img_url={process.env.PUBLIC_URL + "/code-bg.jpg"}>
                <GreeterWrapper className="page">
                    <GreeterTitle>Zach Gangwer</GreeterTitle>
                    <Badges>{this.parseIcons()}</Badges>
                </GreeterWrapper>
            </Parallax>
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
