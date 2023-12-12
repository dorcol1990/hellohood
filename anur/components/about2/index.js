import React from 'react'
import abimg from '/public/images/about2.jpg'
import abimg2 from '/public/images/ab-shape.png'
import Link from 'next/link'
import Image from 'next/image'


const About2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return(
        <section className="wpo-about-section-s2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <Image src={abimg} alt=""/>
                            <div className="shape-1"></div>
                            <div className="shape-2"></div>
                            <div className="shape-3"><Image src={abimg2} alt=""/></div>
                            <span className="ab-btn">Tim iskusnih developera</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title">
                                <span>ABOUT US</span>
                                <h2>Kodiranje kao način života</h2>
                                <div className="transparent-text">Ko smo mi</div>
                            </div>
                            <p>We create award-winning websites, remarkable brands and cutting-edge apps. Nullam
                                imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh. </p>
                            <Link onClick={ClickHandler} className="theme-btn-s2" href="/portfolio-grid">Pogledaj kurseve</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;