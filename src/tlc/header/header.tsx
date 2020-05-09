import React from "react";

import NavBar from "./navbar";

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <h1>Zach Gangwer</h1>
                <NavBar />
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener("scroll", () => {
            const offset = window.pageYOffset;
            const header = document.getElementById("header");

            if (header !== null) {
                if (offset > 0) {
                    header.classList.add("shrunk");
                } else if (offset === 0) {
                    header.classList.remove("shrunk");
                } else {
                    console.error(
                        "== NEGATIVE VALUE IN HEADER.componentDidMount =="
                    );
                }
            } else {
                console.log("header ID is null");
            }
        });
    }
}

export default Header;
