import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Error from '../../components/404'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo2.png'
import Footer from '../../components/footer';

const ErrorPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-5'}/>
            <PageTitle pageTitle={'404'} pagesub={'404'}/> 
            <Error/>
            <Footer />
            <Scrollbar/>
        </Fragment>
    )
};
export default ErrorPage;

