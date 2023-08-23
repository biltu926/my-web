import React from "react";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box, Typography } from "@mui/material";
import aboutImg from '../img/myself.png';
import galleryImg from '../img/gallery.jpeg';
import writingImg from '../img/blog.jpeg';
import projectsImg from '../img/projects.png';
import { useNavigate } from "react-router-dom";
import "../App.css";

const cardItems = [
    {"id": 1,
    "name": "about",
    "title": "_self_",
    "description": "A small bio about myself.",
    "img": aboutImg},
    {"id": 2,
    "name": "gallery",
    "title": "_gallery_",
    "description": "A bunch of mobile captures, drawings, and sketches.",
    "img": galleryImg},
    {"id": 3,
    "name": "writing",
    "title": "_techBlog_",
    "description": "Write ups and essays on different tech topics.",
    "img": writingImg},
    {"id": 4,
    "name": "projects",
    "title": "_projects_",
    "description": "Side gigs, and projects",
    "img": projectsImg}
]

const itemToImageMap = {
    "about": null,
    "gallery": null,
    "writing": null
}


const CustomCards = (props) => {

    const handleCardClick = (data) => {
        console.log("Clicked");
        if(data["name"] === "about"){
            props.navigate("/about")
        }
        else if(data["name"] === "writing"){
            window.location.href = `https://technicaldopamine.tech.blog/`;
        }
    }

    return(
            <ImageListItem sx={{
                boxShadow: 1,
                border: 1,
                borderRadius: '10px',
                width: '50%',
                "@media (max-width: '767px')": {
                    width: 'auto'
                  },
                color: "#FDFEFE",
                "&:hover": {
                    transform: 'scale(1.06)'
                }
            }}
            onClick={() => handleCardClick(props.data) }
            >
                    <img src={props.data.img} 
                         style={{ height: '350px', borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}/>
                    <ImageListItemBar
                        title={
                                <Typography variant="h4" fontWeight="bold" color="#F5FB7E">
                                    {props.data.title}
                                </Typography>
                            }
                        position="below"
                    />
                    <Box sx={{
                                padding: '5px',
                                width: '50%'
                            }}
                            >
                            <p className="Card-description-text">
                                {props.data.description}
                            </p>
                    </Box>
            </ImageListItem>

    )
}


export default function Home() {
    const navigate = useNavigate();

    return(
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    '& > :not(style)': {
                    m: 2,  
                    },
                    width: '80%',
                    "@media (max-width: '767px')": {
                        width: 'auto'
                      },
                    marginTop: 20,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    overflowX: 'auto',
                }}
                padding='2%'
                align='center'
            >
                {Object.keys(cardItems).map( (obj, i) => (
                    <CustomCards key={i} data={cardItems[obj]} navigate={navigate}/>
                ))}                
            </Box>
    )
}