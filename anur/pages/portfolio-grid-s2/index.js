import React, { Fragment } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Portfolio from '../../api/portfolio'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo-3.png'
import Image from 'next/image';

const PortfolioGrid = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-5'} />
            <PageTitle pageTitle={'Portfolio'} pagesub={'Portfolio'} />
            <div className="wpo-protfolio-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-container gallery-fancybox masonry-gallery row">
                                {Portfolio.slice(1, 10).map((portfolio, pot) => (
                                    <div className="col-lg-4 col-md-6 col-12 custom-grid" key={pot}>
                                        <div className="">
                                            <div className="wpo-protfolio-single">
                                                <div className="wpo-protfolio-img">
                                                    <Image src={portfolio.pImg} alt="" />
                                                </div>
                                                <div className="wpo-protfolio-text">
                                                    <h2>{portfolio.cTitle}</h2>
                                                    <span>Illustration . Art Direction</span>
                                                    <Link onClick={ClickHandler} href="/portfolio-single/[slug]" as={`/portfolio-single/${portfolio.slug}`}>View Work</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default PortfolioGrid;

