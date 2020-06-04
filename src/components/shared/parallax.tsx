import React from "react";

import styled from "styled-components";

interface BackgroundProps {
    readonly img: string;
}

interface ParallaxProps {
    img_url: string;
}

// interface ParallaxState {}

const ParallaxBackground = styled.div<BackgroundProps>`
    background-image: url(${(props) => props.img});
    height: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

// class Parallax extends React.Component<ParallaxProps, ParallaxState> {
//     render() {}
// }

function Parallax(props: ParallaxProps) {
    return <ParallaxBackground img={props.img_url}></ParallaxBackground>;
}

export default Parallax;
