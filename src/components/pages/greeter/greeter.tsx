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

    min-width: 100%;
    min-height: 100vh;
    background-color: rgba(15, 15, 15, 0.5);
    backdrop-filter: blur(3px);
`;

const GreeterTitle = styled.h1`
    display: flex;
    flex-flow: wrap row;
    align-content: center;
    justify-content: center;
    width: 100%;
    color: white;
    font-size: 9em;
    margin: 0;

    p {
        margin: 0;
        margin-left: 0.2em;
        margin-right: 0.2em;
    }

    @media (max-width: 600px) {
        font-size: 5rem;
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

function Greeter() {
    return (
        <Parallax img_url="http://assets.gangwerz.xyz/img/homepage/greeter-bg_code.png">
            <GreeterWrapper>
                <GreeterTitle>
                    <p>Zach</p> <p>Gangwer</p>
                </GreeterTitle>
                <Badges>{parseIcons()}</Badges>
            </GreeterWrapper>
        </Parallax>
    );
}

function parseIcons() {
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

export default Greeter;
