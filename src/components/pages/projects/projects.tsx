import React from "react";

import styled from "styled-components";

import Project from "./project";

const imgDir = "http://assets.gangwerz.xyz/img/homepage/projects/";

const ProjectData = [
    {
        title: "School Work",
        img: imgDir + "school.png",
        repo: "https://gitlab.com/gangwerz/school",
        website: "",
        description:
            "This repo includes all the code from my time at Oregon State University that I was not explicitly told no to upload to Github. I have been known to go through it from time to time and clean up some of the stupid I left in it, but the feature set is the same as when it was submitted.",
    },
    {
        title: "Homepage",
        img: imgDir + "homepage.png",
        repo: "https://gitlab.com/gangwerz.xyz/frontend",
        website: "http://gangwerz.xyz",
        description:
            "If you are seeing this, you likely are already aware that this is the website you are currently on, or the repo you are currently perusing. If you are looking for the inverse page, you are in the right place, just follow the link you need above.",
    },
    {
        title: "Todo - A Rails Story",
        img: imgDir + "todo.png",
        repo: "https://gitlab.com/gangwerz/todo-rails-tale",
        website: "",
        description:
            "After applying to Gitlab and Farm Girl Flowers, I decided to spin up a Rails app to get reacquainted with the framework. This todo app is the result. It is one step above a simple Todo app, as it allows for multiple lists, but it is still extremely simple.",
    },
    {
        title: "Blog",
        img: imgDir + "blog.png",
        repo: "https://gitlab.com/gangwerz.xyz/blog",
        website: "https://blog.gangwerz.xyz",
        description:
            "I have been wanting to set up a personal blog for some time now. However, I wanted to use something new. After hearing about Gatsby on several episodes of the Syntax.fm podcast, I decided to dive in. I have been enjoying the Static-Site generator so far, and I was able to get up and running in no time at all. It is built with some of my favorite pieces of tech -- markdown and React -- and allowed me to use more GraphQL. You can read more about my experiences with Gatsby on this blog, so go ahead and click the link!",
    },
];

const PageStyle = styled.section`
    display: flex
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

function Projects() {
    return <PageStyle>{parseProjects()}</PageStyle>;
}

function parseProjects() {
    let out = [];

    for (let i = 0; i < ProjectData.length; i++) {
        out.push(<Project key={i} {...ProjectData[i]} />);
    }

    return out;
}

export default Projects;
