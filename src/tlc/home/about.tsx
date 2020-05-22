import React from "react";

class About extends React.Component {
    render() {
        return (
            <div id="about">
                <p className="first">
                    I am a Software Engineer currently located in Eugene, OR. I
                    have experience as a IT Support Tech, in addition to my
                    Programming, Linux, and DevOps skills. I am currently
                    looking for an in-office or remote opportunity that will
                    allow me to exercise my coding skills and relocate to a
                    larger city either.
                </p>
                <p className="last">
                    This website is a space for me to experiment, so the content
                    should be considered dynamic and volitile. If you have any
                    suggestions, found any bugs, or just want to check my
                    development progess go checkout my{" "}
                    <a href="https://gitlab.com/gangwerz/website">
                        <u>Gitlab</u>
                    </a>{" "}
                    repo.
                </p>
            </div>
        );
    }
}

export default About;
