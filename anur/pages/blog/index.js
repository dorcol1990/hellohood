import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle'
import BlogList from '../../components/BlogList'
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'

const BlogSingle = () => {

    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-5'}/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogList />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogSingle;
