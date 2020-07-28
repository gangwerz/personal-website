import React from "react";

import styled from "styled-components";

const Background = styled.section`
    diplay: float;
    position: fixed;
    background-color: rgba(15, 15, 15, 0.7);

    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 1;
    top: 0;
    left: 0;
`;

const DisplayArea = styled.section`
    padding: 1rem;
    background-color: white;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (orientation: landscape) and (pointer: fine) {
        width: 50%;
        margin-top: 4rem;
        margin-bottom: 2rem;
    }

    @media (orientation: portrait) and (pointer: fine) {
        width: 100%-2rem;
        margin: 1rem;
    }

    @media (pointer: coarse) {
        width: 100%-2rem;
        margin: 1rem;
    }

    button {
        display: float;
        color: #aaa;
        float: right;
        font-weight: bold;
        top: 5px;
        right: 5px;
        text-decoration: none;
    }

    button:hover,
    button:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`;

interface ModalProps {
    children: JSX.Element;
    toggleModal: () => void;
    show: boolean;
}

function Modal(props: ModalProps) {
    return props.show ? (
        <Background>
            <DisplayArea>
                <button onClick={() => props.toggleModal()}>X</button>
                <div className="modal-content">{props.children}</div>
            </DisplayArea>
        </Background>
    ) : null;
}

export default Modal;
