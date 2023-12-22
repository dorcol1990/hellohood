import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Service from '../../../api/service';
import { useRouter } from 'next/router';


const Benefits = (props) => {
  const router = useRouter()
 
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const ServiceDetails = Service.find(item => item.slug === router.query.slug)

    return (
        <div className="wpo-benefits-section">
            <h2>Česta pitanja</h2>
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="wpo-benefits-item">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography>{ServiceDetails?.pitanjeHtml1}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                {ServiceDetails?.odgovorHtml1}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography>{ServiceDetails?.pitanjeHtml2}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                {ServiceDetails?.odgovorHtml2}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography>{ServiceDetails?.pitanjeHtml3}</Typography>
                
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                {ServiceDetails?.odgovorHtml3}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={""}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Typography>{ServiceDetails?.pitanjeHtml4}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                {ServiceDetails?.odgovorHtml4}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Benefits;