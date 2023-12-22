import React from 'react'
import abimg from '/public/images/programing-pair-two.png'
import Link from 'next/link'
import Image from 'next/image'


const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return(
        <section className={`wpo-about-section ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <Image src={abimg} alt=""/>
                            <div className="shape-1"></div>
                            <div className="shape-2"></div>
                            <span className="ab-btn">Svaki učenik je važan</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title">
                                <span>O nama</span>
                                <h2>Programer nije proizvod 
                                    <span>Programer je način života</span>
                                </h2>
                                <div className="transparent-text">O nama</div>
                            </div>
                            <p>Hellohood je revolucionarna škola programiranja, koja polaznicima nudi akademski pristup učenju sa fokusom na odnos između 
                            instruktora i učenika. Školu je oformila grupa programera sa dugogodišnjim iskustvom u radu na freelance projektima, želeći da ponudi
                            svoje veštine i znanje ali i da donese novi način predavanja koji se razlikuje od ostalih škola. Uviđajući sve mane i nedoslednosti 
                            brojnih kurseva programiranja koji nude uglavnom bezvredne diplome, ideja Hellohood škole je jačanje veze između instruktora i učenika, 
                            neograničeno vreme za dopunsku nastavu i insistiranje na tome da svakom učeniku ili učenici celokupno gradivo bude u potpunosti jasno. Ono na
                            čemu naša škola insistira su domaći zadaci i redovno vežbanje u grupama, kao i sa mentorima koje dobija svaka grupa, a najistaknutijim đacima biće ponuđen
                            i određeni vid saradnje na nekom od naših startup projekata.</p>
                            <ul>
                                <li><i className="ti-plus"></i> Neograničeno vreme za dopunsku nastavu </li>
                                <li><i className="ti-plus"></i> Redovni domaći zadaci i vežbe sa mentorom </li>
                                <li><i className="ti-plus"></i> Svaki učenik i učenica su važni </li>
                                <li><i className="ti-plus"></i> Trajanje svakog kursa je 8 nedelja </li>
                                <li><i className="ti-plus"></i> Najistaknutiji dobijaju priliku za rad na projektima</li>
                            </ul>
                            <Link onClick={ClickHandler} className="theme-btn-s2" href="/kursevi" target='_blank'>Pogledaj sve kurseve</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;