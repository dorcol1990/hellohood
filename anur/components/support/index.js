import React from 'react'
import Link from 'next/link'

const Support = (props) => {
    return(
        <section className="wpo-support-section section-padding">
            <div className="container">
                <div className="wpo-support-wrap">
                    <div className="wpo-support-item-left">
                        <h3>Postavite nam pitanje</h3>
                        <p>Ukoliko imate nekih nedoumica u vezi sa samim programom kursa, 
                        kao i načinima plaćanja, voljini smo da vam odgovorimo na svako pitanje!</p>
                    </div>
                    <div className="wpo-support-item-right">
                        <Link href="/contact" className="theme-btn">Kontaktirajte nas</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support;