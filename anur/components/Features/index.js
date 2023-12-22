import Image from 'next/image'
import React from 'react'
import SectionTitle from '../SectionTitle'

import fIcon1 from '/public/images/work/1.png'
import fIcon2 from '/public/images/work/2.png'
import fIcon3 from '/public/images/work/3.png'
import fIcon4 from '/public/images/work/4.png'


const Features = (props) => {

     const featres = [
         {
            id:'1',
            fIcon:fIcon1,
            title:'Predavanja 2X nedeljno',
         },
         {
            id:'2',
            fIcon:fIcon2,
            title:'Domaći zadaci',   
         },
         {
            id:'3',
            fIcon:fIcon3,
            title:'Dan sa mentorom',    
         },
         {
            id:'4',
            fIcon:fIcon4,
            title:'Rad na projektima',    
         },
         
     ]


    return(
        <section className={`wpo-work-section section-padding ${props.wClass}`}>
            <div className="container">
                <SectionTitle subTitle={'Plan kursa'} MainTitle={'Predavanja * Vežbe * Mentorstvo * Projekti'}/>
                <div className="wpo-work-wrap">
                    <div className="row">
                        {featres.map((featres, fitem) => (
                            <div className="col col-lg-3 col-md-6 col-12" key={fitem}> 
                                <div className="wpo-work-iem">
                                    <div className="wpo-work-icon-wrap">
                                        <div className="wpo-work-icon">
                                            <Image src={featres.fIcon} alt=""/>
                                        </div>
                                        <div className="wpo-work-icon-thumb">
                                            <span>{featres.id}</span>
                                        </div>
                                    </div>
                                    <div className="wpo-work-text">
                                        <h4>{featres.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;