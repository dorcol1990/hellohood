import React from "react";
import Slider from "react-slick";
import Projects from '../../api/project';
import Link from 'next/link';
import Image from "next/image";


const ProjectSection = () => {

    var settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className="wpo-project-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="project-section-title">
                            <span>Portfolio</span>
                            <h2>Our Project project</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="project-active owl-carousel">
                    <Slider {...settings}>
                        {Projects.map((project, prj) => (
                            <div className="wpo-project-item" key={prj}>
                                <div className="wpo-project-text">
                                    <h2><Link onClick={ClickHandler} href="/project/[slug]" as={`/project/${project.slug}`}>{project.cTitle}</Link></h2>
                                </div>
                                <div className="wpo-project-img">
                                    <Link onClick={ClickHandler} href="/project/[slug]" as={`/project/${project.slug}`}><Image src={project.pImg} alt="" /></Link>
                                </div>
                                <div className="wpo-project-thumb">
                                    <span>{project.Id}</span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="section-title-s4">
                    <div className="transparent-text">Project</div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;