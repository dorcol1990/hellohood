import React from 'react'
import Link  from 'next/link'
import Logo from '/public/images/logo.png'
import Services from '../../api/service';
import Project from '../../api/project';
import Image from 'next/image';



const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <Image src={Logo} alt="logo"/>
                            </div>
                            <p>Postani Web Programer <br />
                            Kontaktiraj nas još danas!</p>
                            <ul>
                                <li>
                                    <Link onClick={ClickHandler} href="/">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} href="/">
                                        <i className="ti-twitter-alt"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} href="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} href="/">
                                        <i className="ti-google"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Kursevi</h3>
                            </div>
                            <ul>
                                {Services.slice(0, 6).map((service, Sitem) => (
                                    <li key={Sitem}><Link onClick={ClickHandler} href='[/service/slug]' as={`/service/${service.slug}`}>{service.sTitle}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Kontakt</h3>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-placeholder"></i>Dr Aleksandra Kostića 4, 11000 Beograd</li>
                                    <li><i className="fi flaticon-phone-call"></i>+1 800 123 456 789</li>
                                    <li><i className="fi flaticon-email"></i>anur@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    
        

                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                    <div className="widget instagram">
                        {/* 
                            <div className="widget-title">
                                <h3>Projects</h3>
                            </div>
                            <ul className="d-flex">
                                {Project.slice(0, 6).map((project, Pitem) => (
                                    <li key={Pitem}><Link onClick={ClickHandler} href='/project/[slug]' as={`/project/${project.slug}`}><Image src={project.pImg} alt="" /></Link></li>
                                ))}
                            </ul>
                        </div> */}
                        <section className="wpo-contact-map-section">
             
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d595.0860325918062!2d20.45644736320222!3d44.806850313830445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa98720158f%3A0xc38695577f023936!2sIzrada%20web%20sajta!5e0!3m2!1sen!2srs!4v1700841720953!5m2!1sen!2srs"></iframe>
            
            </section>
            </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> Copyright &copy; 2023 <Link onClick={ClickHandler} href="/">by hellohood.rs </Link>.
                            All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;