import React from 'react';
import Link from 'next/link'
// import BlogSidebar from '../BlogSidebar'
import VideoModal from '../../components/ModalVideo'
import Image from 'next/image';
import blogs from '../../api/blogs'


export default function BlogList ({helloblog}) {
  

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="wpo-blog-content">
                            {helloblog.map((blog) => (
                                <div className={`post  ${blog.blClass}`} key={blog.sys.id}>
                                    <div className="entry-media video-holder">
                                        <Image src={'https:' + blog.fields.thumbnail.fields.file.url}
                                               width={blog.fields.thumbnail.fields.file.details.image.width} 
                                               height={blog.fields.thumbnail.fields.file.details.image.height}
                                               alt=""/>
                                        <VideoModal/>
                                    </div>
                                    {/* <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi flaticon-user"></i> By <Link onClick={ClickHandler} href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`}>{blog.authorTitle}</Link> </li>
                                            <li><i className="fi flaticon-comment-white-oval-bubble"></i> Comments {blog.comment} </li>
                                            <li><i className="fi flaticon-calendar"></i> {blog.create_at}</li>
                                        </ul>
                                    </div> */}
                                    <div className="entry-details">
                                        <h3><Link onClick={ClickHandler} href={'/blog-single/' + blog.fields.slug } as={`/blog-single/${blog.fields.slug}`}>{blog.fields.naslov}</Link></h3>
                                        <p>Samo neki text</p>
                                        <Link onClick={ClickHandler} href={'/blog-single/' + blog.fields.slug } as={`/blog-single/${blog.fields.slug}`} className="read-more">READ MORE...</Link>
                                    </div>
                                </div>
                            ))}

                            {/* <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link href="/blog-left-sidebar" aria-label="Previous">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link href="/blog-left-sidebar">1</Link></li>
                                    <li><Link href="/blog-left-sidebar">2</Link></li>
                                    <li><Link href="/blog-left-sidebar">3</Link></li>
                                    <li>
                                        <Link href="/blog-left-sidebar" aria-label="Next">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    {/* <BlogSidebar/> */}
                </div>
            </div>
        </section>

     )
        
}


