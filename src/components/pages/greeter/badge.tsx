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

    @media (hover: hover) {
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
    displayIcon: boolean;
}

class Badge extends React.Component<BadgeProps, BadgeState> {
    constructor(props: BadgeProps) {
        super(props);

        this.state = {
            displayIcon: true,
        };
    }

    render() {
        return (
            <BadgeWrapper
                className="badge"
                onMouseEnter={() => this.showName()}
                onMouseLeave={() => this.showIcon()}
            >
                <BadgeLink
                    href={this.props.link}
                    target="blank"
                    className={this.state.displayIcon ? "icon" : "name"}
                >
                    {this.state.displayIcon ? this.props.icon : this.props.name}
                </BadgeLink>
            </BadgeWrapper>
        );
    }

    showName() {
        this.setState({
            displayIcon: false,
        });
    }

    showIcon() {
        this.setState({
            displayIcon: true,
        });
    }
}

export default Badge;
