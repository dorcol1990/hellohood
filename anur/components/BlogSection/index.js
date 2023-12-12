import React from 'react'
import blogs from '../../api/blogs'
import Link from 'next/link'
import Image from 'next/image'

const BlogSection = () => {
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="wpo-blog-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="section-title-s4">
                            <span>Hellohood blog</span>
                            <h2>Poslednji tekstovi</h2>
                            <div className="transparent-text">Blog</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogs.map((blog, Bitem) => (
                        <div className="col col-lg-4 col-md-6 col-12" key={Bitem}>
                            <div className="wpo-blog-item">
                                <div className="wpo-blog-img">
                                    <Image src={blog.screens} alt=""/>
                                    <div className="blog-thumb"><span>{blog.thumb}</span></div>
                                    <Link onClick={ClickHandler} href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`} className="blog-favorite"><i className="ti-heart"></i></Link>
                                </div>
                                <div className="wpo-blog-text">
                                    <span>{blog.create_at}</span>
                                    <h2><Link onClick={ClickHandler} href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                    <Link onClick={ClickHandler} className="theme-btn-s2" href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`}>Read More <i className="ti-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogSection;