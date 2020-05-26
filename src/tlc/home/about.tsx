import React from "react";

class About extends React.Component {
    render() {
        return (
            <div id="about">
                <p className="first">
                    Hello! My name is Zach Gangwer and I am a Full-Stack
                    Software Developer. I have worn many hats, with experience
                    in IT support, Linux, and DevOps in addition to programming.
                </p>
                <p>
                    The website you are viewing was written in React and hosted
                    on AWS, and features icons from{" "}
                    <a href="https://fontawesome.com/" target="blank">
                        <u>Font Awesome</u>.
                    </a>
                </p>
                <p className="last">
                    This site is a space for me to experiment, so the content
                    should be considered dynamic, volitile, and may be
                    (temporarily) full of{" "}
                    <a
                        href="https://en.wikipedia.org/wiki/Spaghetti_code"
                        target="blank"
                    >
                        <u>pasta</u>
                    </a>
                    . If you have any styling suggestions, found any bugs, or
                    just want to check my development plan and progress, go
                    checkout my{" "}
                    <a
                        href="https://gitlab.com/gangwerz/website"
                        target="blank"
                    >
                        <u>Gitlab</u>
                    </a>{" "}
                    repo.
                </p>
            </div>
        );
    }
}

export default About;
