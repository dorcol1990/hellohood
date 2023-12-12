import React, { Fragment } from 'react';
import Slider from "react-slick";
import Link from 'next/link';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Portfolio from '../../api/portfolio'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo-3.png'
import Image from 'next/image';

const PortfolioSlide = () => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-5'} />
            <PageTitle pageTitle={'Kursevi'} pagesub={'Kursevi'} />
            <div className="protfolio-slide-area section-padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-md-12">
                            <div className="gallery-active owl-carousel row">
                                <Slider {...settings}>
                                    {Portfolio.slice(0, 3).map((portfolio, pot) => (
                                        <div className="protfolio-wrapper" key={pot}>
                                            <div className="wpo-protfolio-single">
                                                <div className="wpo-protfolio-img">
                                                    <Image src={portfolio.pImg} alt="" />
                                                </div>
                                                <div className="wpo-protfolio-text">
                                                    <h2>{portfolio.cTitle}</h2>
                                                    <span>{portfolio.subtitle}</span>
                                                    <Link onClick={ClickHandler} href="/portfolio-single/[slug]" as={`/portfolio-single/${portfolio.slug}`}>Pogledaj detalje</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
}

export default PortfolioSlide;

