import React from "react";

interface SkillBoxProps {
    title: string;
}

interface SkillBoxState {}

class SkillBox extends React.Component<SkillBoxProps, SkillBoxState> {
    render() {
        return <button className="skillbox">{this.props.title}</button>;
    }
}

export default SkillBox;
