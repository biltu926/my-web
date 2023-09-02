import React from "react";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import back from '../img/back.png';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import '../App.css';


const socialLinks = {
    "columbus": "http://columbus-frontend.s3-website.ap-south-1.amazonaws.com",
    "dsa_problems": "https://github.com/biltu926/dsa_problems"
}

const redirectExternal = (social) => {
    window.open(socialLinks[social], '_blank');
}

const Projects = () => {

    const navigate = useNavigate();

    const projectLinkStyle = {
        fontSize: 20,
        color: "#0F3964",
        
    }

    const projectsWrap = {
        display: 'flex', 
        flexDirection: 'column',
        "@media (maxWidth: 768px)": {
            flexDirection: "row"
        },
        alignItems: 'center',
        marginBottom: '2%',
        "@media (maxWidth: 768px)": {
            marginBottom: "5%"
        },
        marginTop: '5%',

    }

    const containerBox = {
        display: 'flex'
    }

    const sectionHeadingColor = "#545AA7" 

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
                <div style={{ marginBottom: 5 }}>
                    <div style={projectsWrap}>
                        <Typography fontWeight='bold' fontSize={20} color={sectionHeadingColor}> Projects </Typography>
                    </div>

                    <div >
                        <ol>
                            <li>    
                                <div onClick={() => redirectExternal("columbus")} style={containerBox} >
                                        <Typography style={projectLinkStyle}> An AI based travel itinerary <a href="#" target="_blank">app </a> (work in progress). </Typography>
                                </div>
                            </li>


                            <li>
                                <div style={containerBox}>
                                    <Typography style={projectLinkStyle}> This website. </Typography>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>


                <div style={{ marginBottom: 5 }}>
                    <div style={projectsWrap}>
                        <Typography fontWeight='bold' fontSize={20} color={sectionHeadingColor}> Competitive code submissions </Typography>
                    </div>

                    <div>
                        <ol>
                            <li>
                            <div style={containerBox} onClick={() => redirectExternal("dsa_problems")}>
                                <Typography style={projectLinkStyle}> Github repo <a href="#" target="_blank">link.</a></Typography>
                            </div>
                            </li>
                        </ol>
                    </div>
                </div>


        </div>

    )
}
export default Projects;