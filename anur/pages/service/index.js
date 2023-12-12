import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo-3.png'
import ServiceSection from '../../components/Services';

const ServicePage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-5'}/>
            <PageTitle pageTitle={'Service'} pagesub={'Service'}/> 
            <ServiceSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServicePage;

