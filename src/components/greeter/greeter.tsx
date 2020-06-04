import React from "react";

import styled from "styled-components";

import Badge from "./badge";
import badges from "./badgeData";

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
            <GreeterWrapper className="page">
                <GreeterTitle>Zach Gangwer</GreeterTitle>
                <Badges>{this.parseIcons()}</Badges>
            </GreeterWrapper>
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
