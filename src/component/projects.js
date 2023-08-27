import React from "react";
import Box from '@mui/material/Box';
import back from '../img/back.png';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ControlledAccordions from "./accordionCustom";

import '../App.css';


const socialLinks = {
    "columbus": "http://columbus-frontend.s3-website.ap-south-1.amazonaws.com",
}

const redirectExternal = (social) => {
    window.open(socialLinks[social], '_blank');
}

const Projects = () => {

    const navigate = useNavigate();

    const projectLinkStyle = {
        fontSize: 30,
        color: "#0F3964",
        fontWeight: "light",
    }

    const projectsWrap = {
        display: 'flex', 
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '30%',
        marginTop: '10%'
    }

    const Back = () => {
        return(
            <div onClick={() => navigate(-1)} style={{
                color: '#A119E5',
                display: 'flex',
                fontWeight: 'bold',
                fontSize: 15,
                marginTop: 2,
            }}>
                <img src={back} alt="back" width={20} height={20} style={{ marginRight: 5 }}></img>
                Home
        </div>
        )
    }

    return(
        <div style={projectsWrap}>
            <Back/>
                <ul>
                    <li>
                        <div onClick={() => redirectExternal("columbus")} >
                            <Typography style={projectLinkStyle}> An AI based travel itinerary <a href="#">app(work in progress)</a> </Typography>
                        </div>
                    </li>

                    <li>
                        <div>
                            <Typography style={projectLinkStyle}> This website </Typography>
                        </div>
                    </li>

                </ul>
        </div>

    )
}
export default Projects;