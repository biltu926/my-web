import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import python from '../img/python.png';
import mongo from '../img/leaf.png';
import react from '../img/atom.png';
import aws from '../img/amazon.png';
import pandas from '../img/pandas.png';
import celery from '../img/celery.png';
import graphql from '../img/graphql.png';
import postgre from '../img/postgresql.png';
import kafka from '../img/kafka.png';
import flask from '../img/flask.png';
import cloud from '../img/cloud.jpg';
import redis from '../img/redis.png';
import azure from '../img/azure.png';
import html from '../img/html.png';
import algorithm from '../img/algorithm.png';

import '../App.css';

const textColor = "#00000"

const chipBgColor = '#fff9'
const chipTextColor = '#0839BA'

export const Greenarc = () => {

        return(
            <div className='Text-format-left'>
                    <Typography sx={{ color: textColor, fontWeight: "bold", fontSize: 25}}>
                      Greenarc Capital | Senior developer
                    </Typography>

                    <Typography sx={{ color: textColor, fontSize: 20, fontWeight: 'light' }}>Mumbai, jan 2022 – Present</Typography>
                    <ColorLine/>
                    <Typography sx={{ color: textColor, 
                                      fontSize: 18, 
                                      fontWeight: 'bold', 
                                      marginTop: 5 }}>
                    Impact measurement and reporting platform (Impact GINI) frontend
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip icon={<img src={react} alt="react" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="ReactJs" variant="outlined"/>
                        <Chip icon={<img src={html} alt="html" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Html" variant="outlined"/>
                    </Stack>
                        <ul>
                        <Typography sx={{ color: textColor }}>Leading the migration of the javascript, html, css based frontend to Reactjs.</Typography>
                        </ul>
                    
                    <Typography sx={{ color: textColor, 
                                      fontSize: 18, 
                                      fontWeight: 'bold', 
                                      marginTop: 5 }}>
                    Impact measurement and reporting platform (Impact GINI) backend
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip icon={<img src={html} alt="html" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Html" variant="outlined"/>
                        <Chip icon={<img src={python} alt="python" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Python" variant="outlined"/>
                        <Chip icon={<img src={flask} alt="flask" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Flask" variant="outlined"/>
                        <Chip icon={<img src={aws} alt="aws" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="AWS" variant="outlined"/>
                        <Chip icon={<img src={algorithm} alt="algo" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Algorithm" variant="outlined"/>
                    </Stack>

                        <ul>
                        <Typography sx={{ color: textColor }}> Developed Greenarc’s impact measurement and assessment SAAS application backend.
                        </Typography>   
                        </ul>
                        
                        <ul>
                        <Typography sx={{ color: textColor}}>Implemented the backend system of the product which works on the investment data and generates impact scores, analytics and reports for a variety of investor portfolios.</Typography>
                        </ul>

                        <ul>
                        <Typography sx={{ color: textColor}}>
                        Wrote the REST based apis and python services.
                        </Typography>
                        </ul>

                        <ul>
                        <Typography sx={{ color: textColor}}>
                        Adding features/functions to the product to cater to the changing business needs and requirements.
                        </Typography>
                        </ul>

                        <ul>
                        <Typography sx={{ color: textColor }}>
                        Optimised the overall architecture to boost performance. i.e, including Celery for async task management in the backend, included parquet, polars to speed up analytics computations etc.
                        </Typography>
                        </ul>

                        <ul>
                        <Typography sx={{ color: textColor }}>
                        Included unittetsts for the backend python classes and functions.
                        </Typography>
                        </ul>

                        <ul>
                        <Typography sx={{ color: textColor }}>
                        Used libraries like coverage to maintain test coverage of the backend code as it grows in size.
                        </Typography>
                        </ul>
                    <Typography sx={{ color: textColor, 
                                      fontSize: 18, 
                                      fontWeight: 'bold', 
                                      marginTop: 5 }}>
                    Implementing impact scoring algorithms and optimisation
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip icon={<img src={python} alt="python" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Python" variant="outlined"/>
                        <Chip icon={<img src={flask} alt="flask" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Flask" variant="outlined"/>
                        <Chip icon={<img src={aws} alt="aws" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="AWS" variant="outlined"/>
                        <Chip icon={<img src={algorithm} alt="algo" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Algorithm" variant="outlined"/>
                        <Chip icon={<img src={mongo} alt="mongo" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Mongo" variant="outlined"/>
                    </Stack>
                        <ul>
                        <Typography sx={{ color: textColor }}>Wrote impact score and analytics generation algorithms for different sectors (Individual, Msme, Education).</Typography>
                        </ul>
                        <ul>
                        <Typography sx={{ color: textColor }}>Optimised existing algorithms to boost performance, and reduce error margin.</Typography>
                        </ul>
                        <ul>
                        <Typography sx={{ color: textColor }}>Incorporated clean code principals, and design patterns to improve the modularity, and maintainability of the existing algorithms.</Typography>
                        </ul>
                        <ul>
                        <Typography sx={{ color: textColor }}>Wrote code to compute the analytics for different investment portfolios.</Typography>
                        </ul>
                        <ul>
                        <Typography sx={{ color: textColor }}>Contributed to data modelling, and schema design for Mongo collections to facilitate better felxibility in object mapping, performance and design.</Typography>
                        </ul>


                        <Typography sx={{ color: textColor, 
                                      fontSize: 18, 
                                      fontWeight: 'bold', 
                                      marginTop: 5 }}>
                    Security enhancements of the web application and the cloud resources
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip icon={<img src={python} alt="python" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Python" variant="outlined"/>
                        <Chip icon={<img src={cloud} alt="cloud" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Cloud" variant="outlined"/>
                    </Stack>
                        <ul>
                        <Typography sx={{ color: textColor }}>Maintained the frontend, and the backend code to adhere to the security best practices like enabling CORS, enabling CSP, CSRF tokens, including SRI attributes, reducing inline scripting etc.</Typography>
                        </ul>
                        <ul>
                        <Typography sx={{ color: textColor }}>Periodically monitored the security audit reports(ZAP, Heyhack) and making necessary changes to keep the application secured.</Typography>
                        </ul>
                        <ul>
                        <Typography sx={{ color: textColor }}>Took steps to implement the security of the user data by ensuring encryption of the data at rest, data in transit.</Typography>
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
        <ColorLine/>
        <Typography sx={{ color: textColor, 
                          fontSize: 18, 
                          fontWeight: 'bold', 
                          marginTop: 5 }}>
        Parabole ACE, a is machine driven order optimisation simulator (Digital twin).
        </Typography>
        <Stack direction="row" spacing={1}>
                <Chip icon={<img src={python} alt="python" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Python" variant="outlined"/>
                <Chip icon={<img src={flask} alt="flask" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Flask" variant="outlined"/>
                <Chip icon={<img src={azure} alt="azure" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Azure" variant="outlined" />
                <Chip icon={<img src={kafka} alt="kafka" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Kafka" variant="outlined" />
                <Chip style={{ color: chipTextColor, background: chipBgColor }} label="Microservice" variant="outlined" />
        </Stack>
            <ul>
            <Typography sx={{ color: textColor }}>Co-designed the framework and architecture of Parabole ACE ( A SaaS platform to automate ML model training, and using the trained models to optimise order management).</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Wrote backend python services (order processing service, order optimisation service etc).</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Wrote Rest APIs for the ACE services.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Optimized performance by implementing design patterns, db query optimization.</Typography>
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
        <ColorLine/>
        <Typography sx={{ color: textColor, 
                          fontSize: 18, 
                          fontWeight: 'bold', 
                          marginTop: 5 }}>
        Parabole TRAIN, a platform to build trained ML models, Knowledge graphs, Ontology and Glossary from text data.
        </Typography>
        <Stack direction="row" spacing={1}>
                <Chip icon={<img src={python} alt="python" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Python" variant="outlined"/>
                <Chip icon={<img src={flask} alt="flask" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Flask" variant="outlined"/>
                <Chip icon={<img src={azure} alt="azure" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Azure" variant="outlined" />
                <Chip icon={<img src={kafka} alt="kafka" width={20} height={20}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Kafka" variant="outlined" />
        </Stack>
            <ul>
            <Typography sx={{ color: textColor }}>Integrated Kafka bus for python services.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Wrote document parser using python, apache tika for text extraction.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Wrote webcrawler for pdf/text/html data scrapping.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Implemented restful APIs for TRAIN..</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Wrote shell scripts for automating tasks.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor}}>Deployed services on Azure VMs.</Typography>
            </ul>
        
        <Typography sx={{ color: textColor, 
                          fontSize: 18, 
                          fontWeight: 'bold', 
                          marginTop: 5 }}>
        Voice of Customer, Using tweets to analyse user sentiment to boost customer experience.
        </Typography>
        <Stack direction="row" spacing={1}>
                <Chip icon={<img src={python} alt="python" width={15} height={15}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Python" variant="outlined"/>
                <Chip icon={<img src={flask} alt="flask" width={15} height={15}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Flask" variant="outlined"/>
                <Chip icon={<img src={graphql} alt="graphql" width={15} height={15}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Graphql" variant="outlined" />
                <Chip icon={<img src={pandas} alt="pandas" width={15} height={15}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Pandas" variant="outlined" />
                <Chip icon={<img src={kafka} alt="kafka" width={15} height={15}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Kafka" variant="outlined" />
        </Stack>
            <ul>
                <Typography sx={{ color: textColor }}> Implemented the kafka pipeline to distribute scrapped tweet data among different services running sentiment analysis models.
                </Typography>   
            </ul>
            
            <ul>
                <Typography sx={{ color: textColor }}>Implemented the GraphQL APIs for the dashboard using Gremlin in python for VOC.</Typography>
            </ul>

            <ul>
                <Typography sx={{ color: textColor }}>
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
        <ColorLine/>
        <Typography sx={{ color: textColor, 
                          fontSize: 18, 
                          fontWeight: 'bold', 
                          marginTop: 5 }}>
        Algorithm trading and Strategy
        </Typography>

        <Stack direction="row" spacing={1}>
                <Chip icon={<img src={python} alt="python" width={15} height={15}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Python Flask" variant="outlined"/>
                <Chip icon={<img src={pandas} alt="pandas" width={15} height={15}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Pandas" variant="outlined" />
        </Stack>
            <ul>
            <Typography sx={{ color: textColor }}>Wrote python code for downloading stock trading data. </Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Wrote python code for automatic stock analytics generation.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Wrote python based backend to model different trading strategies.</Typography>
            </ul>
            <ul>
            <Typography sx={{ color: textColor }}>Wrote functions to send emails, slack messages about the stock reports for each day.</Typography>
            </ul>

        </div>
    )
}

const ColorLine = () => {
    return(
            <div style={{flex: 1, 
                        height: '3px', 
                        background: 'linear-gradient(90deg, rgba(145,172,237,1) 0%, rgba(192,5,76,1) 100%)',
                        marginTop: 5}} />
    )
}

export const TravelItinerary = () => {
    return(
        <div className='Text-format-left'>
        <Typography sx={{ color: textColor, fontWeight: "bold", fontSize: 25}}>
          Personal projects
        </Typography>

        <Typography sx={{ color: textColor, fontSize: 20, fontWeight: 'light' }}>WFH, India, Jun 2023 – Present</Typography>
        <ColorLine/>
        <Typography sx={{ color: textColor, 
                          fontSize: 18, 
                          fontWeight: 'bold', 
                          marginTop: 5 }}>
        Travel itinerary web app using chatGPT, Flask and Reactjs(Fullstack).
        </Typography>
            <Stack direction="row" spacing={1}>
                <Chip icon={<img src={python} alt="python" width={15} height={15}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Python Flask" variant="outlined"/>
                <Chip icon={<img src={mongo} alt="mongo" width={15} height={15}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Mongodb" variant="outlined" />
                <Chip icon={<img src={react} alt="react" width={15} height={15}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Reactjs" variant="outlined" />
                <Chip icon={<img src={aws} alt="aws" width={15} height={15}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="AWS" variant="outlined" />
                <Chip icon={<img src={celery} alt="celery" width={15} height={15}></img>} style={{ color: chipTextColor, background: chipBgColor }} label="Celery" variant="outlined" />
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