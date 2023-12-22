import React from 'react'
import Services from '../../../api/service';
import Link from  'next/link'
import Image from 'next/image';

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return (
        <div className="col-lg-4 col-md-8">
            <div className="wpo-single-sidebar">
                <div className="wpo-service-widget widget">
                    <h2>Tehnologije na kursu</h2>
                    <ul>
                        {Services.map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} href='/service/slug' as={`/service/${service.slug}`}>{service.sTitle}</Link></li>
                        ))}
                    </ul>
                </div>
                {/* <div className="wpo-newsletter-widget widget">
                    <h2>Newsletter</h2>
                    <p>Join 20,000 Sabscribers!</p>
                    <form className="form" onSubmit={SubmitHandler}>
                        <input type="email" placeholder="Email Address" required/>
                        <button type="submit">Sign Up</button>
                    </form>
                    <span>By signing up you agree to our <Link href="/">Privecy Policy</Link></span>
                </div>
                <div className="wpo-instagram-widget widget">
                    <h2>Instagram Shot</h2>
                    <ul>
                        {Services.map((service, Sitem) => (
                            <li key={Sitem}><Image src={service.sinst} alt="" /></li>
                        ))}
                    </ul>
                </div> */}
                <div className="wpo-contact-widget widget">
                    <h2>Imate li nekih pitanja?<br/> Pošaljite nam upit još danas!</h2>
                    <p>Na sva vaša pitanja ćemo odgovoriti blagovremeno u cilju što jasnijih uslova pohađanja Hellohood škole</p>
                    <Link href="/contact">Pošaljite nam upit</Link>
                </div>
            </div>
        </div>

    )
}

export default ServiceSidebar;