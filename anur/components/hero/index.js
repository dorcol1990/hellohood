import React from "react";
import Link from 'next/link'
import himg from '/public/images/slider/programing-hero-right.png'
import Image from "next/image";

const Hero =() => {
    return (
        <section className="wpo-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-6 col-lg-6">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title">
                                <h2><span>Postani</span><br /><span>Web</span><br /><span>Programer</span></h2>
                            </div>
                            <div className="btns">
                                <Link href="/kursevi" target='_blank'>Pogledaj naše kurseve</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">

            <div className="right-img">
                    <Image src={himg} alt=""/>
                </div>
                <div className="round-1"></div>
                <div className="round-2"></div>
                <div className="round-3"></div>
                <div className="round-4"></div>
            </div>

            <div className="social-link">
                <ul>
                    <li><Link href="/">Facebook</Link></li>
                    <li><Link href="/">LinkedIn</Link></li>
                    <li><Link href="/">Instagram</Link></li>
                </ul>
            </div>
        </section>
    )
}

export default Hero;