import React from 'react';

import Linux from './linux';
import Prog from './prog';

export interface ModalProps {
    show: boolean,
    flavor: string
}

export interface ModalState {
}


class Modal extends React.Component<ModalProps, ModalState> {
    render() {
        let modalBody;

        if (!this.props.show) {
            return null
        }

        switch (this.props.flavor) {
            case 'prog':
                modalBody = <Prog />
                break;

            case 'linux':
                modalBody = <Linux />
                break;
        }

        return (
            <div id='modal'>

                <div id='modal-content'>
                    {this.props.children}
                    {modalBody}
                </div>
            </div>
        )
    }
}


export default Modal;
