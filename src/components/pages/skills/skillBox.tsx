import React from "react";

import styled from "styled-components";

import Modal from "../../shared/modal";

interface BackgroundProps {
    readonly img: string;
}

const SkillBoxWrapper = styled.div<BackgroundProps>`
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    display: float;
    height: 20rem;
    width: 40rem;
    justify-content: center;
    text-align; center;
    margin: 4rem;

    &:hover {
        .title {
            display: flex;
            justify-content: space-evenly;
            align-content: center;
            flex-flow: row wrap;
            background-color: rgba(15, 15, 15, 0.7);
        }
    }

    @media (pointer: coarse) {
        .title {
            display: flex;
            justify-content: space-evenly;
            align-content: center;
            flex-flow: row wrap;
            background-color: rgba(15, 15, 15, 0.7);
        }
    }

    // Addressing iOS Tomfoolery
    @media (-webkit-touch-callout: none) {
        background-size: 100%;
    }
`;

const BoxTitle = styled.div`
    color: white;
    display: none;
    height: 100%;
    width: 100%;
    text-align: center;
    font-size: 5rem;

    @media (max-width: 650px) {
        font-size: 4rem;
    }

    @media (max-width: 550px) {
        font-size: 3rem;
    }

    @media (max-width: 450px) {
        font-size: 2rem;
    }

    @media (max-width: 350px) {
        font-size: 1rem;
    }
`;

interface SkillBoxProps {
    title: string;
    img: string;
    modalContent: JSX.Element;
}

interface SkillBoxState {
    showModal: boolean;
}

class SkillBox extends React.Component<SkillBoxProps, SkillBoxState> {
    constructor(props: SkillBoxProps) {
        super(props);

        this.state = {
            showModal: false,
        };
    }

    render() {
        return (
            <SkillBoxWrapper
                img={process.env.PUBLIC_URL + "/" + this.props.img}
                onClick={() => this.toggleModal()}
            >
                <BoxTitle className="title">{this.props.title}</BoxTitle>
                <Modal show={this.state.showModal} unmount={() => this.toggleModal}>{this.props.modalContent}</Modal>
            </SkillBoxWrapper>
        );
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal })
    }
}

export default SkillBox;
