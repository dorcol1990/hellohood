import React, { useState } from 'react'
import Image from 'next/image';
import cimg from '/public/images/contact.png'
import SimpleReactValidator from 'simple-react-validator';


const ContactHome = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (

        <section className="wpo-contact-section section-padding">
            <div className="container">
                <div className="wpo-contact-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="contact-form">
                                <div className="contact-form-title">
                                    <h2>Contact Us</h2>
                                    <p>Reach out to us for any kind of inquiry.</p>
                                </div>
                                <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
                                    <div className="form-field">
                                        <input
                                            value={forms.name}
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            onBlur={(e) => changeHandler(e)}
                                            onChange={(e) => changeHandler(e)}
                                            placeholder="Your Name" />
                                        {validator.message('name', forms.name, 'required|alpha_space')}
                                    </div>
                                    <div className="form-field">
                                        <input
                                            value={forms.email}
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            onBlur={(e) => changeHandler(e)}
                                            onChange={(e) => changeHandler(e)}
                                            placeholder="Your Email" />
                                        {validator.message('email', forms.email, 'required|email')}
                                    </div>
                                    <div className="form-field">
                                        <textarea
                                            onBlur={(e) => changeHandler(e)}
                                            onChange={(e) => changeHandler(e)}
                                            value={forms.message}
                                            className="form-control"
                                            type="text"
                                            name="message"
                                            placeholder="Message">
                                        </textarea>
                                        {validator.message('message', forms.message, 'required')}
                                    </div>

                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn">Submit Now</button>
                                    </div>
                                </form >

                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="contact-img">
                                <Image src={cimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactHome;







