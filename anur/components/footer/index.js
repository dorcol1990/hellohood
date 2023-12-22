import React from 'react'
import Link  from 'next/link'
import Logo from '/public/images/logoo.png'
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
                <div className="row justify-content-around">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <Image src={Logo} alt="logo"/>
                            </div>
                            <p>Postani Web Programer! <br />
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
                                <h3>Tehnologije koje učimo</h3>
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
                                    <li><i className="fi flaticon-phone-call"></i>+381 64 1295 196</li>
                                    <li><i className="fi flaticon-email"></i>anur@gmail.com</li>
                                </ul>
                            </div>
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