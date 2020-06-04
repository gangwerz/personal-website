import React from "react";

import styled from "styled-components";

import paragraphs from "./paragraphs";

const AboutWrapper = styled.section`
    background-color: var(--secondary_light);
    display: flex;
    justify-content: center;
    padding: 1.5rem;
    min-width: calc(100vw - 3rem);
    min-height: calc(100vh - 3rem);
    text-align: center;
    text-align: left;
    font-size: 1.7rem;
    white-space: pre-line;
`;

class About extends React.Component {
    render() {
        return (
            <AboutWrapper id="about" className="page">
                {paragraphs()}
            </AboutWrapper>
        );
    }
}

export default About;
