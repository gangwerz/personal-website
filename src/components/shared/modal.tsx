import React from "react";

import styled from "styled-components";

const ModalBackground = styled.section`
    diplay: float;
    position: fixed;
    padding: 2rem;
    background-color: rgba(15, 15, 15, 0.7);

    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 1;
    top: 0;
    left: 0;
`;

const ModalDisplayArea = styled.section`
    padding: 1rem;
    background-color: white;
    min-height: 90%;
    max-height: 95%;
    max-width: 95%;
    min-width: 75%;

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
    return props.show
        ? (
            <ModalBackground>
                <ModalDisplayArea>
                    <button onClick={() => props.toggleModal()}>X</button>
                    <div className="modal-content">{props.children}</div>
                </ModalDisplayArea>
            </ModalBackground >
        )
        : null;
}

export default Modal;
