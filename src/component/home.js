import React from "react";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box, Typography } from "@mui/material";
import aboutImg from '../img/myself.png';
import galleryImg from '../img/gallery.png';
import writingImg from '../img/blog.png';
import projectsImg from '../img/projects.png';
import { useNavigate } from "react-router-dom";
import "../App.css";

const cardItems = [
    {"id": 1,
    "name": "about",
    "title": "self.details",
    "description": "All about myself.",
    "img": aboutImg},
    {"id": 2,
    "name": "gallery",
    "title": "self.media",
    "description": "Mobile captures, drawings etc.",
    "img": galleryImg},
    {"id": 3,
    "name": "writing",
    "title": "self.blogs",
    "description": "Tech writeups, essays, articles.",
    "img": writingImg},
    {"id": 4,
    "name": "projects",
    "title": "self.projects",
    "description": "Side gigs, and projects",
    "img": projectsImg}
]

const responsiveBox = {

}

const cardTextColor = '#1C2833'


const CustomCards = (props) => {

    const handleCardClick = (data) => {
        if(data["name"] === "about"){
            props.navigate("/about")
        }
        else if(data["name"] === "writing"){
            window.location.href = `https://technicaldopamine.tech.blog/`;
        }
        else if(data["name"] === "projects"){
            props.navigate("/projects")
        }
    }

    const cardContainerStyle = {
        display: 'flex',
        padding: 10, 
        marginTop: '10%',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '60%',
        height: '40%'
    }

    return(
        <div style={ cardContainerStyle }>
            <ImageListItem sx={{
                boxShadow: 1,
                border: 1,
                background: "#ffff",
                borderRadius: '10px',
                boxShadow: 6,
                color: "#FDFEFE",
                "&:hover": {
                    transform: 'scale(1.06)'
                }
            }}
            onClick={() => handleCardClick(props.data) }
            >
                    <img src={props.data.img} 
                         style={{ height: 'auto', borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}/>
                    <ImageListItemBar
                        title={
                                <Typography variant="h4" fontWeight="bold" color="#34495E">
                                    {props.data.title}
                                </Typography>
                            }
                        position="below"
                    />
                    <Box sx={{ color: '#566573'}}>
                        <p className="Card-description-text">{props.data.description}</p>
                    </Box>
            </ImageListItem>
        </div>

    )
}


export default function Home() {
    const navigate = useNavigate();

    return(
        <div style={{ width: "100%" }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    "@media(max-width: 768px)": {flexDirection: 'column'},
                    overflow: 'auto',
                    width: 'auto',
                    background: ''
                }}
                padding='2%'
                align='center'
            >
                {Object.keys(cardItems).map( (obj, i) => (
                    <CustomCards key={i} data={cardItems[obj]} navigate={navigate}/>
                ))}                
            </Box>
        </div>

    )
}