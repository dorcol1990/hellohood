import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/hero';
import Features from '../../components/Features';
import About from '../../components/about';
import ServiceSection from '../../components/Services';
import FunFact from '../../components/FunFact';
// import ProjectSection from '../../components/Projects';
import Testimonial from '../../components/Testimonial';
import Support from '../../components/support';
// import BlogSection from '../../components/BlogSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '/public/images/logoo.png'

const HomePage = (props) => {

    return (
        <div>
            <Navbar Logo={Logo} hclass={'wpo-header-style-1'} />
            <Hero />
            <Features />
            <About />
            <ServiceSection />
            <FunFact />
            {/* <ProjectSection /> */}
            <Testimonial />
            <Support />
            {/* <BlogSection/> */}
            <Footer />
            <Scrollbar />
        </div>
    )
};

export default HomePage;


