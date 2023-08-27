import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import python from '../img/python.png';
import mongo from '../img/leaf.png';
import react from '../img/atom.png';
import aws from '../img/amazon.png';
import celery from '../img/celery.png';
import '../App.css';

const textColor = "#17202A"

export const Greenarc = () => {

        return(
            <div className='Text-format-left'>
                    <Typography sx={{ color: textColor, fontWeight: "bold", fontSize: 25}}>
                      Greenarc Capital | Senior developer
                    </Typography>

                    <Typography sx={{ color: textColor, fontSize: 20, fontWeight: 'light' }}>Mumbai, jan 2022 – Present</Typography>
                        <div style={{flex: 1, 
                                    height: '1px', 
                                    backgroundColor: '#FF5733',
                                    marginTop: 5}} />

                    <Typography sx={{ color: textColor, 
                                      fontSize: 18, 
                                      fontWeight: 'bold', 
                                      marginTop: 5 }}>
                    Impact measurement and reporting platform (Impact GINI) frontend
                    </Typography>
                        <ul>
                        <Typography sx={{ color: "#ffff" }}>Migrating the frontend to Reactjs from HTML, Bootstrap.</Typography>
                        </ul>
                    
                    <Typography sx={{ color: textColor, 
                                      fontSize: 18, 
                                      fontWeight: 'bold', 
                                      marginTop: 5 }}>
                    Impact measurement and reporting platform (Impact GINI) backend
                    </Typography>
                        <ul>
                        <Typography sx={{ color: textColor }}> Working on building Greenarc’s impact measurement platform for Investors.
    </Typography>   
                        </ul>
                        
                        <ul>
                        <Typography sx={{ color: textColor}}>Shaping the backend of the product which works on the investment data and generates impact scores, analytics and reports for a variety of investments.</Typography>
                        </ul>

                        <ul>
                        <Typography sx={{ color: textColor}}>
                        Managing the implementation of the REST apis and the backend for the platform.
                        </Typography>
                        </ul>

                        <ul>
                        <Typography sx={{ color: textColor}}>
                        Adding features/functions to the product to cater to the changing business needs and requirements.
                        </Typography>
                        </ul>

                        <ul>
                        <Typography sx={{ color: textColor }}>
                        Optimising and enhancing the code, and architecture to improve user experience, and to boost the quality of the deliverables.
                        </Typography>
                        </ul>
                    <Typography sx={{ color: textColor, 
                                      fontSize: 18, 
                                      fontWeight: 'bold', 
                                      marginTop: 5 }}>
                    Implementing impact scoring algorithms and optimisation
                    </Typography>
                        <ul>
                        <Typography sx={{ color: "#ffff" }}>Implementing impact score and analytics generation algorithms for different sectors (Individual, Msme, Education).</Typography>
                        </ul>
                        <ul>
                        <Typography sx={{ color: textColor }}>Optimising existing algorithms to enhance the user experience, like improving the execution time for loan impact assessment algorithm to reduce the overall waiting time for the user.</Typography>
                        </ul>
                        <ul>
                        <Typography sx={{ color: textColor }}>Implemented changes in the architecture to cut down on network round trips between servers, and cloud in order to reduce the loading time for I/O operations.</Typography>
                        </ul>
                        <ul>
                        <Typography sx={{ color: textColor }}>Implemented design patterns to improve the code quality, and maintainability.</Typography>
                        </ul>

            </div>
        )
}

export const ParaboleTwo = () => {
    return(
        <div className='Text-format-left'>
        <Typography sx={{ color: textColor, fontWeight: "bold", fontSize: 25}}>
          Parabole.AI | Senior engineer
        </Typography>

        <Typography sx={{ color: textColor, fontSize: 20, fontWeight: 'light' }}>Bengaluru, India, Feb 2020 – Jan 2022</Typography>
            <div style={{flex: 1, 
                        height: '1px', 
                        backgroundColor: '#FF5733',
                        marginTop: 5}} />

        <Typography sx={{ color: textColor, 
                          fontSize: 18, 
                          fontWeight: 'bold', 
                          marginTop: 5 }}>
        Parabole ACE, a is machine driven order optimisation simulator (Digital twin).
        </Typography>
            <ul>
            <Typography sx={{ color: textColor }}>Co-designed the framework and architecture of Parabole ACE ( A SaaS platform to automate ML model training, and using the trained models to optimise order management).</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Wrote Rest APIs for the ACE services.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Helped in integration of ACE apis with third party UI.</Typography>
            </ul>
        
        <Typography sx={{ color: textColor, 
                          fontSize: 18, 
                          fontWeight: 'bold', 
                          marginTop: 5 }}>
        Feature addition, maintaining and supporting Parabole TRAIN.
        </Typography>
            <ul>
                <Typography sx={{ color: textColor }}> Wrote new apis for the TRAIN platform.
                </Typography>   
            </ul>
            
            <ul>
                <Typography sx={{ color: textColor}}>Addition/updation of testcases.</Typography>
            </ul>

            <ul>
                <Typography sx={{ color: textColor }}>
                Making structural changes based on requirements.
                </Typography>
            </ul>

        </div>
    )
}

export const ParaboleOne = () => {
    return(
        <div className='Text-format-left'>
        <Typography sx={{ color: textColor, fontWeight: "bold", fontSize: 25}}>
          Parabole.AI | Engineer
        </Typography>

        <Typography sx={{ color: textColor, fontSize: 20, fontWeight: 'light' }}>Bengaluru, India, Jun 2017 – Feb 2020</Typography>
            <div style={{flex: 1, 
                        height: '1px', 
                        backgroundColor: '#FF5733',
                        marginTop: 5}} />

        <Typography sx={{ color: textColor, 
                          fontSize: 18, 
                          fontWeight: 'bold', 
                          marginTop: 5 }}>
        Parabole TRAIN, a platform to build trained ML models, Knowledge graphs, Ontology and Glossary from text data.
        </Typography>
            <ul>
            <Typography sx={{ color: textColor }}>Implemented Kafka pipeline.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Implemented document parser using apache tika.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Implemented webcrawler for pdf/text/html data scrapping.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Wrote Flask hosted rest apis for the platform.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Wrote shell scripts for server operations.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor}}>Running, maintaining, deploying services on Azure VMs..</Typography>
            </ul>
        
        <Typography sx={{ color: "#ffff", 
                          fontSize: 18, 
                          fontWeight: 'bold', 
                          marginTop: 5 }}>
        Voice of Customer, Using tweets to analyse user sentiment to boost customer experience.
        </Typography>
            <ul>
                <Typography sx={{ color: "white" }}> Implemented the kafka pipeline to distribute scrapped tweet data among different services running sentiment analysis models.
                </Typography>   
            </ul>
            
            <ul>
                <Typography sx={{ color: "white" }}>Implemented the GraphQL APIs for the dashboard using Gremlin in python for VOC.</Typography>
            </ul>

            <ul>
                <Typography sx={{ color: "white" }}>
                Making structural changes based on requirements.
                </Typography>
            </ul>

        </div>
    )
}

export const Freelance = () => {
    return(
        <div className='Text-format-left'>
        <Typography sx={{ color: textColor, fontWeight: "bold", fontSize: 25}}>
        Freelancing
        </Typography>

        <Typography sx={{ color: textColor, fontSize: 20, fontWeight: 'light' }}>Kolkata, India, Nov 2022 – December 2022</Typography>
            <div style={{flex: 1, 
                        height: '1px', 
                        backgroundColor: '#FF5733',
                        marginTop: 5}} />

        <Typography sx={{ color: textColor, 
                          fontSize: 18, 
                          fontWeight: 'bold', 
                          marginTop: 5 }}>
        Algorithm trading and Strategy
        </Typography>
            <ul>
            <Typography sx={{ color: textColor }}>Wrote backend code for downloading stock trading data (cronjobs). </Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Wrote code for automatic stock analytics generation.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Wrote python based backend to model different trading strategies.</Typography>
            </ul>

        </div>
    )
}

export const TravelItinerary = () => {
    return(
        <div className='Text-format-left'>
        <Typography sx={{ color: "#17202A", fontWeight: "bold", fontSize: 25}}>
          Personal projects
        </Typography>

        <Typography sx={{ color: "#17202A", fontSize: 20, fontWeight: 'light' }}>WFH, India, Jun 2023 – Present</Typography>
            <div style={{flex: 1, 
                        height: '1px', 
                        backgroundColor: '#FF5733',
                        marginTop: 5}} />

        <Typography sx={{ color: "#17202A", 
                          fontSize: 18, 
                          fontWeight: 'bold', 
                          marginTop: 5 }}>
        Travel itinerary web app using chatGPT, Flask and Reactjs(Fullstack).
        </Typography>
            <Stack direction="row" spacing={1}>
                <Chip icon={<img src={python} alt="python" width={15} height={15}></img>} style={{ color: textColor }} label="Python Flask" variant="outlined"/>
                <Chip icon={<img src={mongo} alt="mongo" width={15} height={15}></img>} style={{ color: textColor }} label="Mongodb" variant="outlined" />
                <Chip icon={<img src={react} alt="react" width={15} height={15}></img>} style={{ color: textColor }} label="Reactjs" variant="outlined" />
                <Chip icon={<img src={aws} alt="aws" width={15} height={15}></img>} style={{ color: textColor }} label="AWS" variant="outlined" />
                <Chip icon={<img src={celery} alt="celery" width={15} height={15}></img>} style={{ color: textColor }} label="Celery" variant="outlined" />
            </Stack>
            <ul>
            <Typography sx={{ color: textColor }}>Implemented prompts for dynamic itinerary generation using ChatGPT.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Developed the backend Flask application service.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Developed the Reactjs frontend.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Defined the documents for MongoDB, implemented Mongo Atlas cloud setup.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Deployed the app on AWS EC2, and S3. </Typography>
            </ul>

        </div>
    )
}