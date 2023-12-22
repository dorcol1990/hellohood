import React from 'react'
import Link from 'next/link'
import erimg from '/public/images/logo2.png'
import Image from 'next/image'


const Error = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <Image src={erimg} alt=""/>
                            </div>
                            <div className="error-message">
                                <h3>Izvinjavamo se, stranica nije pronađena</h3>
                                <p>Žao nam je što moramo da vas obavestimo da ova stranica nije pronađena, molim vas pokušatejte kasnije.</p>
                                <Link onClick={ClickHandler} href="/home" className="theme-btn"> Vrati se na početnu stranu</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;