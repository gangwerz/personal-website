import React from "react";

import SkillBox from "./skillBox";
import mySkills from "./skillData";

class Skills extends React.Component {
    render() {
        return (
            <div id="skills" className="page">
                {this.buildBoxes()}
            </div>
        );
    }

    buildBoxes() {
        let out = [];

        for (let i = 0; i < mySkills.length; i++) {
            out.push(<SkillBox title={mySkills[i].title} />);
        }

        return out;
    }
}

export default Skills;
