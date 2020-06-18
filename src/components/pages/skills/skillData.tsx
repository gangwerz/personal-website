import React from "react";

const mySkills = [
    {
        title: "Front-End Development",
        img: "skill-frontend.png",
        content: modalContent("Front-End Modal", ["Coming Soon"]),
    },
    {
        title: "Back-End Development",
        img: "skill-backend.jpg",
        content: modalContent("Back-End Modal", ["Coming Soon"]),
    },
    {
        title: "DevOps",
        img: "skill-devops.jpg",
        content: modalContent("DevOps Modal", ["Coming Soon"]),
    },
    {
        title: "Systems Administration",
        img: "skill-sysadmin.jpg",
        content: modalContent("SysAdmin Modal", ["Coming Soon"]),
    },
];

function modalContent(title: string, content: string[]) {
    return (
        <div className="modalContent">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
}

export default mySkills;
