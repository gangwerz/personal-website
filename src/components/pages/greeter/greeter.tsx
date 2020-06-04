import React from "react";

import styled from "styled-components";

import Badge from "./badge";
import badges from "./badgeData";
import Parallax from "../../shared/parallax";

const GreeterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: rgba(15, 15, 15, 0.7);
`;

const GreeterTitle = styled.h1`
    margin: 0;
    width: 100%;
    color: white;
    font-size: 10em;

    @media only screen and (pointer: coarse) {
        font-size: 9rem;
        overflow-wrap: break-word;
    }
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
            <Parallax img_url="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg">
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
