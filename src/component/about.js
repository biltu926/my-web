import React from "react";
import Box from '@mui/material/Box';
import Chart from "chart.js/auto";
import hackerrank from '../img/hackerrank.svg';
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
import geektrust from '../img/geektrust.ico';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
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
    "likedin": "https://www.linkedin.com/supratim-halder",
    "geektrust": "https://www.geektrust.com/coding/code-portfolio"
}

const redirectExternal = (social) => {
    window.open(socialLinks[social], '_blank');
}

const About = () => {

    const socialStyle = {
        fontSize: 20,
        color: "#1F618D",
        fontWeight: "bold",
    }
    const socialImg = {
        width: 30, 
        height: 30,
        marginLeft: '40%',
    }

    const socialDivStyle = {
        marginLeft: 20
    }

    return(
        <div className="Resume-container-low">
            <div style={{ display: "flex", 
                          alignItems: 'center',
                          marginTop: 10,
                          marginBottom: 20 }} >
                <Typography sx={{ fontSize: 30, fontWeight: 'light' }}> Socials: </Typography>
                <div onClick={() => redirectExternal("hackerrank")} style={socialDivStyle}>
                    <img src={hackerrank} alt="hackerrank" style={ socialImg }></img>
                    <Typography style={socialStyle}> Hackerrank </Typography>
                </div>

                <div onClick={() => redirectExternal("github")} style={socialDivStyle}>
                    <img src={github} alt="github" style={ socialImg } ></img>
                    <Typography style={socialStyle}> Github </Typography>
                </div>

                <div onClick={() => redirectExternal("linkedin")} style={socialDivStyle}>
                    <img src={linkedin} alt="linkedin" style={ socialImg }></img>
                    <Typography style={socialStyle}> Linkedin </Typography>
                </div>

                <div onClick={() => redirectExternal("geektrust")} style={socialDivStyle}>
                    <img src={geektrust} alt="geektrust" style={ socialImg }></img>
                    <Typography style={socialStyle}> Geektrust </Typography>
                </div>
                
            </div>
            <Divider style={{width:'40%', marginTop: 15, marginBottom: 15 }}>
                <Chip label="Or" />
            </Divider>
            <div className="Section-center-low">
                <ResumeComponent />
            </div>
        </div>

    )
}
export default About;