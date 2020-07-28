import React, { useState } from "react";

import styled from "styled-components";

import Modal from "../../shared/modal";
import Parallax from "../../shared/parallax";
import ProjectModal, { ProjectProps } from "./projectModal";

const ProjectStyle = styled.div`
    display: flex;
    align-content: center;

    height: 50vh;
    width: 80%;
    margin: 15vh;
`;

const ProjectBox = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin: auto;
    font-size: 5rem;

    backdrop-filter: blur(4px);
    transition: backdrop-filter 0.5s;

    h1 {
        background-color: white;
        color: black;
        padding: 1rem;
        padding-top: 0;
        padding-bottom: 0;
        border-radius: 25px;
    }

    &:hover {
        backdrop-filter: blur(0);
    }
`;

function Project(props: ProjectProps) {
    const [modalize, setModalize] = useState(false);

    function toggleModal() {
        setModalize(!modalize);
    }

    return (
        <ProjectStyle
            onClick={() => {
                if (!modalize) toggleModal();
            }}
        >
            <Parallax img_url={props.img}>
                <ProjectBox>
                    <h1>{props.title}</h1>
                </ProjectBox>
            </Parallax>

            <Modal show={modalize} toggleModal={() => toggleModal()}>
                <ProjectModal {...props} />
            </Modal>
        </ProjectStyle>
    );
}

export default Project;
