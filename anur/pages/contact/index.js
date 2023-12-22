import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo2.png'

const ContactPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-5'}/>
            <PageTitle pageTitle={'Kontaktiraj nas'} pagesub={'Kontakt'}/> 
            <Contactpage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

