import React from "react";
import Box from '@mui/material/Box';
import hackerrank from '../img/hackerrank.svg';
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
import geektrust from '../img/geektrust.ico';
import back from '../img/back.png';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ControlledAccordions from "./accordionCustom";

import '../App.css';

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
    "likedin": "https://www.linkedin.com/in/supratim-halder/",
    "geektrust": "https://www.geektrust.com/coding/code-portfolio"
}

const redirectExternal = (social) => {
    window.open(socialLinks[social], '_blank');
}

const About = () => {

    const navigate = useNavigate();

    const socialStyle = {
        fontSize: 20,
        color: "#0F3964",
        fontWeight: "bold",
    }
    const socialImg = {
        width: 50, 
        height: 50,
        marginRight: 'inherit'
    }

    const socialDivStyle = {
        marginLeft: 30,
        padding: 20,
        marginTop: '15px',
        flexWrap: 'wrap',
    }

    const socialContainer = {
        display: 'flex', 
        flexWrap: 'wrap',
    }

    const Back = () => {
        return(
            <div onClick={() => navigate(-1)} style={{
                color: '#A119E5',
                display: 'flex',
                fontWeight: 'bold',
                fontSize: 15,
                marginTop: 20
            }}>
                <img src={back} alt="back" width={20} height={20} style={{ marginRight: 5 }}></img>
                Home
        </div>
        )
    }

    return(
        <div className="Resume-container-low">
            <Back/>
            <div style={socialContainer}>

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
                
            </div>
            <Divider  style={{width:'40%', 
                             marginTop: '5%', 
                             marginBottom: '5%'}}>
                <Chip label="Bio" />
            </Divider>
            <div className="Section-center-low">
                <ResumeComponent />
            </div>
        </div>

    )
}
export default About;