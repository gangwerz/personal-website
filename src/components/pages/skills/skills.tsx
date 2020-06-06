import React from "react";

import styled from "styled-components";

import SkillBox from "./skillBox";
import mySkills from "./skillData";

const SkillsStyle = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    flex-flow: row wrap;
`;

class Skills extends React.Component {
    render() {
        return <SkillsStyle className="page">{this.buildBoxes()}</SkillsStyle>;
    }

    buildBoxes() {
        let out = [];

        for (let i = 0; i < mySkills.length; i++) {
            out.push(
                <SkillBox
                    key={i}
                    title={mySkills[i].title}
                    img={mySkills[i].img}
                />
            );
        }

        return out;
    }
}

export default Skills;
