import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import ts1 from '/public/images/testimonial/img-1.jpg'
import ts2 from '/public/images/testimonial/img-2.jpg'
import ts3 from '/public/images/testimonial/img-3.jpg'


const Testimonial = () => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
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

    const testimonial = [
        {
            tsImg: ts1,
            Des: "Naučio sam zaista mnogo, pre svega jedna zdrava atmosfera, instruktori te ne ostavljaju na miru dok zaista ne naučiš i ne razumeš materiju u potpunosti.",
            Title: 'Marko Blažić',
            Sub: "PHP developer",
        },
        {
            tsImg: ts2,
            Des: "Neverovatno je koliko ovi ljudi imaju živaca i vremena. Bila sam apsolutni početnik, da mi je neko rekao da ću ovoliko naučiti, ne bih verovala. Definitivno, pravi izbor!",
            Title: 'Danica Lazić',
            Sub: "Grafički dizajner",
        },
        {
            tsImg: ts3,
            Des: "Sjajna ekipa i saradnici, puno truda ulažu u svaku lekciju, svakom studentu se posvete maksimalno, ako samo i jedan ne razume gradivo, 100% mu se posvete na individualnoj nastavi.",
            Title: 'Jelena Planić',
            Sub: "Full stack developer",
        }
    ]
    return (
        <section className="wpo-testimonials-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-12">
                        <div className="testimonials-left">
                            <span>Reč polaznika</span>
                            <h3>Drugi o nama</h3>
                            <p>"Sjajna ekipa, mnogo rada, i puno znanja! Definitivno pravi izbor!"</p>
                            <a href="/contact" className="theme-btn" target="_blank">Kontaktirajte nas</a>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-12">
                        <div className="testimonials-wrapper owl-carousel">
                            <Slider {...settings}>
                                {testimonial.map((tesmnl, tsm) => (
                                    <div className="testimonials-item" key={tsm}>
                                        <div className="testimonials-item-top">
                                            <p>{tesmnl.Des}</p>
                                        </div>
                                        <div className="testimonials-item-bottom">
                                            <div className="testimonials-item-bottom-author">
                                                <Image src={tesmnl.tsImg} alt="" />
                                            </div>
                                            <div className="testimonials-item-bottom-author-text">
                                                <h3>{tesmnl.Title}</h3>
                                                <span>{tesmnl.Sub}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;