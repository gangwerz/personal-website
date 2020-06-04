import React from "react";

import styled from "styled-components";

const ParagraphCollection = styled.div`
    text-align: left;
    background-color: white;
    border-radius: 2rem;
    max-width: 60%;
`;

const Paragraph = styled.p`
    text-indent: 2ch;
    margin: 1rem;
`;

const ParagraphLink = styled.a`
    text-decoration: none;
    color: var(--font_std);
`;

function paragraphs() {
    return (
        <ParagraphCollection>
            <Paragraph>
                Hello! My name is Zach Gangwer and I am a Full-Stack Developer.
                I have worn many hats, with experience in IT support, Linux, and
                DevOps in addition to programming.
            </Paragraph>
            <Paragraph>
                The website you are viewing was written in React, hosted on AWS
                and features icons from{" "}
                <ParagraphLink href="https://fontawesome.com/" target="blank">
                    <u>Font Awesome</u>
                </ParagraphLink>
                . I utilized the{" "}
                <ParagraphLink
                    href="https://github.com/petervanderdoes/gitflow-avh"
                    target="blank"
                >
                    <u>Git Flow</u>
                </ParagraphLink>{" "}
                utility for my Git version control, and stored the repo on{" "}
                <ParagraphLink
                    href="https://gitlab.com/gangwerz/website"
                    target="blank"
                >
                    <u>Gitlab</u>
                </ParagraphLink>
                .
            </Paragraph>
            <Paragraph>
                This site is a space for me to experiment, so the content should
                be considered dynamic, volitile, and may be (temporarily) full
                of{" "}
                <ParagraphLink
                    href="https://en.wikipedia.org/wiki/Spaghetti_code"
                    target="blank"
                >
                    <u>pasta</u>
                </ParagraphLink>
                . If you have any styling suggestions, found any bugs, or just
                want to check my development plan and progress, you can create a
                Gitlab{" "}
                <ParagraphLink
                    href="https://gitlab.com/gangwerz/website/-/issues"
                    target="blank"
                >
                    <u>issue</u>
                </ParagraphLink>{" "}
                .
            </Paragraph>
        </ParagraphCollection>
    );
}

export default paragraphs;
