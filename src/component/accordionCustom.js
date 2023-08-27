import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import { Greenarc, ParaboleTwo, ParaboleOne, Freelance, TravelItinerary } from './WorkExp';

import '../App.css';


const CustomAccordion = styled(Accordion)(({ theme }) => {
    return {
      boxShadow: 'none', // this styles directly apply to accordion,
      background: 'linear-gradient(90deg, rgba(235,235,247,1) 17%, rgba(225,225,223,0.24555759803921573) 49%)',
      border: `1px solid gray`,
      width: 'auto',
      "@media (max-width: 767px)": {
        width: 'calc(100% - 20vh)'
      },
      maxWidth: 'auto',
      "@media (max-width: 767px)": {
        maxWidth: 350
      },
      '.MuiAccordionDetails-root': {
      },
      '.MuiAccordionSummary-root': {
        fontFamily: `Quicksand`,
        color: 'linear-gradient(90deg, rgba(192,144,247,1) 0%, rgba(114,5,160,1) 100%)'
      }, // this apply to Summary
    };
  });

  {/* 820b38*/ }
const accordionHeadingColor = "linear-gradient(90deg, rgba(192,144,247,1) 0%, rgba(114,5,160,1) 100%)";
const textColor = "#000000";
const accordionExpandIcon = "#ffff";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ 

    }}>
        
        { /* Academics */ }
          <div style={{ padding: 5 }}>
          <CustomAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            
            <AccordionSummary
              expandIcon={<AddIcon style={{ color: accordionExpandIcon }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <div className='Resume-section'>

                <div>
                  <Typography sx={{ fontWeight: 'bold', 
                                    backgroundColor: accordionHeadingColor,
                                    fontSize: 30}}>
                    Academic background
                  </Typography>
                </div>
              </div>

            </AccordionSummary>

            <AccordionDetails>
              <ol style={{ color: textColor }}>
                <li>
                  <div className='Text-format-left'>
                    <Typography sx={{ color: textColor}}>
                      Master in computer applications (MCA). CGPA 8.
                    </Typography>

                    <Typography sx={{ color: textColor }}>
                      RCC Institute of Information Technology, Kolkata 2017.
                    </Typography>
                  </div>
                </li>

                <li>
                  <div className='Text-format-left'>
                    <Typography sx={{ color: textColor }}>
                      Bachelor of science (BSc) in Computer science. First class honours.
                    </Typography>

                    <Typography sx={{ color: textColor }}>
                      University of Calcutta, Kolkata 2014.
                    </Typography>
                  </div>
                </li>

              </ol>


            </AccordionDetails>
          </CustomAccordion>
          </div>

        { /* Certifications and courses */ }
          <div style={{ padding: 5 }}>
            <CustomAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              
              <AccordionSummary
                expandIcon={<AddIcon style={{ color: accordionExpandIcon }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div className='Resume-section'>

                  <div>
                    <Typography sx={{ fontWeight: "bold", 
                                      color: accordionHeadingColor,
                                      fontSize: 30}}>
                      Certification and courses
                    </Typography>
                  </div>
                </div>

              </AccordionSummary>

              <AccordionDetails>              
                <div className='Text-format-left'>
                  <ol style={{ color: textColor }}>
                    <li>
                      <Typography sx={{ color: textColor }}>
                        Certificate in Python, JavaScript and Problem Solving by
                        <a href='https://www.hackerrank.com/spiral_bomb' 
                        target="_blank"
                        className='Href-text-color'> Hackerrank</a>
                      </Typography>
                    </li>

                    <li>
                      <Typography sx={{ color: textColor }}>
                        Certificate on Chemicals and health by 
                        <a href="https://www.coursera.org/account/accomplishments/verify/VZ2BX4LVLYZ5" 
                        target="_blank"
                        className='Href-text-color'> Johns Hopkins University</a>
                      </Typography>
                    </li>

                    <li>
                      <Typography sx={{ color: textColor }}>
                      Online course on Climate Change International Legal Regime by
                        <a href="https://www.coursera.org/account/accomplishments/verify/VZ2BX4LVLYZ5" 
                        target="_blank"
                        className='Href-text-color'> United Nations Institute for Training and Research </a>
                      </Typography>
                    </li>

                    <li>
                      <Typography sx={{ color: textColor }}>
                        Certificate on Data structures and algorithms by 
                        <a href="https://courses.edx.org/certificates/1d6f9a2443b849c9b6e6b098d8eb228a" 
                        target="_blank"
                        className='Href-text-color'> University Of Pennsilvaniya</a>
                      </Typography>
                    </li>

                    <li>
                      <Typography sx={{ color: textColor }}>
                        Certificate on The Sustainable Development Goals by 
                        <a href="https://www.coursera.org/account/accomplishments/verify/PKNWE9NQUHYU" 
                        target="_blank"
                        className='Href-text-color'> University Of Copenhagen</a>
                      </Typography>
                    </li>

                    <li>
                      <Typography sx={{ color: textColor }}>
                        Certificate on Impact measurement and management for the SDGs by 
                        <a href="https://www.coursera.org/account/accomplishments/verify/N5TEKRK55TEZ" 
                        target="_blank"
                        className='Href-text-color'> Duke University</a>
                      </Typography>
                    </li>
                  </ol>
                </div>
              </AccordionDetails>
            </CustomAccordion>
          </div>

        { /* Awards and achievements */ }
          <div style={{ padding: 5 }}>
            <CustomAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              
              <AccordionSummary
                expandIcon={<AddIcon style={{ color: accordionExpandIcon }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div className='Resume-section'>

                  <div>
                    <Typography sx={{ fontWeight: "bold", 
                                      color: accordionHeadingColor,
                                      fontSize: 30}}>
                      Achievements and awards
                    </Typography>
                  </div>
                </div>

              </AccordionSummary>

              <AccordionDetails>
                
                <div className='Text-format-left'>
                  <ol style={{ color: textColor }}>
                    <li>
                      <Typography sx={{ color: textColor }}>
                      Obtained gold badge in Problem solving, Python and SQL in 
                      <a href="https://www.hackerrank.com/spiral_bomb" 
                      target="_blank"
                      className='Href-text-color'> Hackerrank</a>
                      </Typography>
                    </li>

                    <li>
                      <Typography sx={{ color: textColor }}>
                      Obtained silver membership in coding at 
                      <a href="https://www.geektrust.com/coding/code-portfolio" 
                      target="_blank"
                      className='Href-text-color'> Geektrust</a>
                    </Typography>
                    </li>

                    <li>
                      <Typography sx={{ color: textColor }}>
                      Won Employee award for successfully executing the Komida (BNP Pariba) pilot project at 
                      <a href="https://greenarccapital.com/" 
                      target="_blank"
                      className='Href-text-color'> Greenarc Capital</a>
                      </Typography>
                    </li>

                    <li>
                      <Typography sx={{ color: textColor }}>
                      Cleared IBM Master the mainframe contest 2016 (Level - 2).
                      <a href="https://www.ibm.com/z?utm_content=SRCWW&p1=Search&p4=43700068084919892&p5=p&gclid=Cj0KCQjwldKmBhCCARIsAP-0rfxuIaVakl1KJT0WMkEUKsdy9uAKBCIe43Hx0n2ORpOv7FchrZiXDrYaAh4OEALw_wcB&gclsrc=aw.ds" 
                      target="_blank"
                      className='Href-text-color'> IBM </a>
                      </Typography>
                    </li>

                  </ol>

                </div>

              </AccordionDetails>

            </CustomAccordion>
          </div>

        { /* Work experience  */ }
          <div style={{ padding: 5 }}>
            <CustomAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              
              <AccordionSummary
                expandIcon={<AddIcon style={{ color: accordionExpandIcon }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <div className='Resume-section'>

                  <div>
                    <Typography sx={{ fontWeight: "bold", 
                                      color: accordionHeadingColor,
                                      fontSize: 30}}>
                      Work experience
                    </Typography>
                  </div>
                </div>

              </AccordionSummary>

              <AccordionDetails>
                <div style={{ overflow: 'auto', maxHeight: 500 }}>
                  <Greenarc/>
                  <ParaboleTwo/>
                  <ParaboleOne/>
                  <Freelance/>
                  <TravelItinerary/>
                </div>
              </AccordionDetails>
            </CustomAccordion>
          </div>

    </div>


    
  );
}
