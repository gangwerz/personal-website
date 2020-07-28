import React from "react";

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

function Badge(props: BadgeProps) {
    return (
        <BadgeWrapper className="badge">
            <BadgeLink href={props.link} target="_blank" rel="noopener">
                {props.icon}
            </BadgeLink>
        </BadgeWrapper>
    );
}

export default Badge;
