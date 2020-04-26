import React from 'react';

import Modal from './modals/modal';

export interface ToolboxProps {
}

export interface ToolboxState {
    show: boolean,
    flavor: string
}

let tools = [
    {
        "title": "Programming Languages",
        "flavor": "prog"
    },
    {
        "title": "Linux Distributions",
        "flavor": "linux"
    }
];


class Toolbox extends React.Component<ToolboxProps, ToolboxState> {
    constructor(props: ToolboxProps) {
        super(props);

        this.state = {
            show: false,
            flavor: ""
        };
    }

    toolBuilder() {
        return tools.map((tool) =>
            <button key={tool.title} className='tool-item' onClick={() => this.showModal(tool.flavor)}>
                {tool.title}
            </button>
        );
    }

    showModal(flavor: string) {
        this.setState({
            show: true,
            flavor
        });
    }

    hideModal() {
        this.setState({
            show: false,
            flavor: ""
        });
    }

    render() {
        return (
            <div id='toolbox-page'>
                <h2>TOOLS</h2>
                <p>Here is some info about what I have used</p>

                <div id='tool-collection'>
                    {this.toolBuilder()}
                </div>

                <Modal show={this.state.show} flavor={this.state.flavor}>
                    <button onClick={() => this.hideModal()}>X</button>
                </Modal>
            </div>
        )
    }
}


export default Toolbox;