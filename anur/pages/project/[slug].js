import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import Projects from '../../api/project';
import Services from '../../api/service'
import Footer from '../../components/footer';
import Logo from '/public/images/logo-3.png'
import Image from 'next/image'
import Link from 'next/link'
import Benefits from '../service/single/benefits';
import ServiceSidebar from '../service/single/sidebar';



const projectDetailsPage = (props) => {
    const router = useRouter()

    const projectDetails = Projects.find(item => item.slug === router.query.slug)


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-header-style-5'} />
            <PageTitle pageTitle={projectDetails?.cTitle} pagesub={'Project'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={projectDetails?.pImg} alt="" />
                                </div>

                                <div className="wpo-project-details-list">
                                    <div className="row">
                                        <div className="col co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="wpo-project-details-text">
                                                <span>Client Name</span>
                                                <h2>Robert William</h2>
                                            </div>
                                        </div>
                                        <div className="col co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="wpo-project-details-text-3">
                                                <span>Project Value</span>
                                                <h2>$500</h2>
                                            </div>
                                        </div>
                                        <div className="col co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="wpo-project-details-text">
                                                <span>Date</span>
                                                <h2>25 Dec 2020</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>{projectDetails?.cTitle}</h2>
                                        <p>{projectDetails?.description}</p>
                                        <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise.</p>
                                        <div className="wpo-service-single-sub-img">
                                            <ul>
                                                <li><Image src={projectDetails?.ssImg1} alt="" /></li>
                                                <li><Image src={projectDetails?.ssImg2} alt="" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-related-section">
                                    <h2>Our work process</h2>
                                    <div className="row">
                                        {Services.slice(0, 3).map((service, Sitem) => (
                                            <div className="col-lg-4 col-md-6 col-12" key={Sitem}>
                                                <div className="wpo-related-item">
                                                    <div className="wpo-related-icon">
                                                        <div className="icon">
                                                            <i><Image src={service.icon} alt="" /></i>
                                                        </div>
                                                    </div>
                                                    <div className="wpo-related-text">
                                                        <h2><Link onClick={ClickHandler} href='/service/slug' as={`/service/${service.slug}`}>{service.sTitle}</Link></h2>
                                                        <p>{service.des2}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Benefits />
                            </div>
                        </div>
                        <ServiceSidebar />
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default projectDetailsPage;
