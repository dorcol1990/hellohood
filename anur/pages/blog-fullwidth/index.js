import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle'
import BlogList from '../../components/BlogList'
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'

import { createClient } from 'contentful';

export async function getStaticProps() {
  
  const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    }
);

const res = await client.getEntries({ content_type: 'hellohoodBlog' })

return {
  props: {
    helloblog: res.items,
  }
}
}

const BlogSingle = ({helloblog}) => {
console.log(helloblog);
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-5'}/>
            <PageTitle pageTitle='Poslednji tekstovi' pagesub="Hellohood blog" />
            <BlogList blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'} helloblog={helloblog}/>
            <Footer />
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogSingle;
