import React from "react";
import Box from '@mui/material/Box';
import Chart from "chart.js/auto";
import hackerrank from '../img/hackerrank.svg';
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
import geektrust from '../img/geektrust.ico';
import { CategoryScale } from "chart.js";
import { Typography } from "@mui/material";
import ControlledAccordions from "./accordionCustom";

import '../App.css';



Chart.register(CategoryScale);

const HighlightComponent = () => {
    return (
        <Box sx={{
            width: '100%',
            height: 100,
            marginBottom: 7,
            color: '#ffff'
          }}>
            I work on:
            <Typography fontSize={30} fontWeight='light'>
                Python, Javascript, ReactJS, Golang, CSS, HTML, Cloud Technologies, Application architecture, System design.
            </Typography>
        </Box>
    )
}
const ResumeComponent = () => {
    return(
        <Box align="center" >
            <ControlledAccordions/>
        </Box>

    )
}

const socialLinks = {
    "github": "https://github.com/biltu926",
    "hackerrank": "https://www.hackerrank.com/spiral_bomb",
    "likedin": "https://www.linkedin.com/in/supratim-halder",
    "geektrust": "https://www.geektrust.com/coding/code-portfolio"
}

const redirectExternal = (social) => {
    window.open(socialLinks[social], '_blank');
}

const About = () => {

    const socialStyle = {
        fontSize: 20,
        color: "#ffff",
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 10
    }

    return(
        <div className="Resume-container-low">
            <div className="Section-side-low">

                <div style={{ display: "flex", color: "#ffff" }} onClick={() => redirectExternal("hackerrank")}>
                    <img src={hackerrank} alt="hackerrank" width={30} height={30}></img>
                    <Typography style={socialStyle}> Hackerrank </Typography>
                </div>

                <div style={{ display: "flex", color: "#ffff" }} onClick={() => redirectExternal("github")}>
                    <img src={github} alt="github" width={30} height={30}></img>
                    <Typography style={socialStyle}> Github </Typography>
                </div>

                <div style={{ display: "flex", color: "#ffff" }} onClick={() => redirectExternal("linkedin")}>
                    <img src={linkedin} alt="linkedin" width={30} height={30}></img>
                    <Typography style={socialStyle}> Linkedin </Typography>
                </div>

                <div style={{ display: "flex", color: "#ffff" }} onClick={() => redirectExternal("geektrust")}>
                    <img src={geektrust} alt="geektrust" width={20} height={20}></img>
                    <Typography style={socialStyle}> Geektrust </Typography>
                </div>
                
            </div>
            <div className="Section-center-low">
                <ResumeComponent />
            </div>
        </div>

    )
}
export default About;