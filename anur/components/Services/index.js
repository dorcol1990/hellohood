import React from 'react';
import Link from 'next/link';
import Services from '../../api/service';
import SectionTitle from '../SectionTitle'
import Image from 'next/image';


const ServiceSection = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return (
        <section className={`wpo-service-section ${props.sClass}`}>
            <div className="container">
                <SectionTitle subTitle={'Način rada'} MainTitle={'Šta dobijaju polaznici'} vTitle={'Način rada'}/>
                <div className="row">
                    {Services.map((service, Sitem) => (
                        <div className="col-lg-4 col-md-6 col-12"  key={Sitem}>
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <Image src={service.icon} alt=""/>
                                </div>
                                <div className="wpo-service-text">
                                    <h2><Link onClick={ClickHandler} href='[/service/slug]' as={`/service/${service.slug}`} target="_blank" rel="noopener noreferrer">{service.sTitle}</Link></h2>
                                    <p>{service.description}</p>
                                </div>
                                <div className="visible-icon">
                                    <Image src={service.icon2} alt=""/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default ServiceSection;