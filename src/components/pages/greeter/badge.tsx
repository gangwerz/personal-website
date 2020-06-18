import React, { useState } from "react";

import styled from "styled-components";

const BadgeWrapper = styled.div`
    background-color: white;
    border-radius: 50%;

    font-size: 5rem;
    margin: 0.25em;
    padding: 0.25em;
    height: 1em;
    width: 1em;

    @media (max-width: 350px) {
        font-size: 3.5rem;
    }

    @media (pointer: fine) {
        &:hover {
            border-radius: 15px;
            width: auto;
        }
    }
`;

const BadgeLink = styled.a`
    display: inline-block;
    color: black;
    text-decoration: none;
`;

interface BadgeProps {
    name: string;
    link: string;
    icon: JSX.Element;
}

interface BadgeState {
    display: boolean;
}

function Badge(props: BadgeProps) {
    const [icon, showIcon] = useState(true);

    return (
        <BadgeWrapper
            className="badge"
            onMouseEnter={() => showIcon(false)}
            onMouseLeave={() => showIcon(true)}
        >
            <BadgeLink
                href={props.link}
                target="blank"
                className={icon ? "icon" : "name"}
            >
                {icon ? props.icon : props.name}
            </BadgeLink>
        </BadgeWrapper>
    );
}

export default Badge;
