import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';


const ContactForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = (e) => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            try {
                const response = await fetch('https://formspree.io/f/xeqbybdp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(forms),
                });
                if (response.ok) {
                    console.log('Podaci su uspešno poslati!');
                    setSuccessMessage('Hvala što ste nas kontaktirali!');
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 500);
                } else {
                    console.error('Greška prilikom slanja podataka.');
                }
            } catch (error) {
                console.error('Došlo je do greške:', error);
            }
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: '',
            });
        } else {
            validator.showMessages();
        }
    };
    return (
        <form onSubmit={submitHandler} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Ime" />
                        {validator.message('name', forms.name, 'required|alpha_dash')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Vaša Email adresa" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.phone}
                            type="phone"
                            name="phone"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Vaš broj telefona"/>
                        {validator.message('phone', forms.phone, 'any|phone')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <select
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.subject}
                            type="text"
                            name="subject"
                            >
                            <option >Kurs</option>
                            <option >Plaćanje</option>
                            <option >Informacije</option>
                            <option >Hitno</option>
                            <option >Priključi se našem timu</option>
                            <option >Zakažite ZOOM meeting</option>
                        </select>
                        {validator.message('subject', forms.subject, 'required')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <textarea
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        type="text"
                        name="message"
                        placeholder="Tekst poruke">
                    </textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">Pošalji</button>
            </div>
        </form>
    );
};
export default ContactForm;