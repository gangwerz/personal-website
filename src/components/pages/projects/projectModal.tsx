import React from "react";

import styled from "styled-components";

export interface ProjectProps {
    title: string;
    img: string;
    description: string;
    repo: string;
    website: string;
}

const Style = styled.section`
    img {
        width: 100%;
        height: auto;
    }

    h1 {
        font-size: 5rem;
        margin: 1rem;
    }

    p {
        font-size: 2rem;
        margin-left: 2rem;
        margin-right: 2rem;
        text-align: left;
    }
`;

function ProjectModal(props: ProjectProps) {
    return (
        <Style>
            <h1>{props.title}</h1>
            <a href={props.repo}>REPO</a>
            <a href={props.website}>
                {" "}
                {props.website !== "" ? "WEBSITE" : null}
            </a>
            <img src={props.img} alt={props.title} />
            <p>{props.description}</p>
        </Style>
    );
}

export default ProjectModal;
