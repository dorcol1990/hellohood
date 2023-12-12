import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Features from '../../components/Features'
import About2 from '../../components/about2'
import FunFact from '../../components/FunFact'
import Testimonial from '../../components/Testimonial'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'


const AboutPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-5'}/>
            <PageTitle pageTitle={'O nama'} pagesub={'O nama'}/> 
            <About2 abClass={'pt-120'}/>
            <Features wClass={'pt-0'}/>
            <FunFact fClass={'wpo-fun-fact-section-s3'}/>
            <Testimonial/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
