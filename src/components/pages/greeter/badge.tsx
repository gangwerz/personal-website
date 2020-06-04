import React from "react";

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
            <div
                className="badge"
                onMouseEnter={() => this.showName()}
                onMouseLeave={() => this.showIcon()}
            >
                <a
                    href={this.props.link}
                    target="blank"
                    className={this.state.displayIcon ? "icon" : "name"}
                >
                    {this.state.displayIcon ? this.props.icon : this.props.name}
                </a>
            </div>
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
