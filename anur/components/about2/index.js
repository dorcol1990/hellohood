import React from 'react'
import abimg from '/public/images/zajednica.jpg'
import abimg2 from '/public/images/ab-shape.png'
import Link from 'next/link'
import Image from 'next/image'


const About2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return(
        <section className="wpo-about-section-s2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <Image src={abimg} alt="zajednica" style={{opacity: 0.6 }} />
                            <div className="shape-1"></div>
                            <div className="shape-2"></div>
                            <div className="shape-3"><Image src={abimg2} alt=""/></div>
                            <span className="ab-btn">Gradimo timski duh</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title">
                                <span>O nama</span>
                                <h2>Kodiranje kao način života</h2>
                                <div className="transparent-text">Ko smo mi</div>
                            </div>
                            <p><strong>Hellohood škola programiranja</strong> nastala je kao potreba grupe developera da onima koji žele da se otisnu u <em>svet programiranja</em> ponude najbolju edukaciju po <strong>najnižim cenama u regionu</strong>, svesni izazova i teškoća sa kojima se svaka osoba susreće kada odluči da promeni karijeru i počne svoj novi profesionalni život od nule.</p>
                            <p>Kao i svi prvi koraci u novom okruženju, i odluka da svoju karijeru počnete da gradite u <em>web programiranju</em> predstavlja odlučan korak u neko novo, bolje sutra. Danas postoji veliki broj kurseva koji polaznicima nude brzu prekvalifikaciju i ono čuveno, "završi naš kurs i postani programer preko noći", i sve to po astronomskim cenama. Ne treba biti previše intuitivan da bi ste sami zaključili da je takvo nešto nemoguće.</p>
                            <p>Hellohood škola nudi <strong>revolucionarni novi način učenja</strong>, u kojem su učenik i zajednica koju gradimo na kursu, na prvom mestu. U našoj školi dobićete potpunu posvećenost instruktora, <em>kompletnu obuku za Front-end developera/ku</em>, uz redovne domaće zadatke, dopunsku nastavu, savete na temu programiranja i nastavka karijere, i mogućnost da budete među prvim učenicima sa zlatnom članskom kartom Hellohood zajednice u nastajanju.</p>
                            <p>Hellohood je škola koja ne nudi precenjene i bezvredne diplome koje danas i onako malo čemu služe, već nudimo rad i znanje, podršku i stalni podstrek. Niko vas neće zaposliti zbog diplome, već zbog znanja koje steknete i <strong>razumevanja web tehnologija</strong>, koje iz dana u dan rastu i razvijaju se. Ukoliko želite da steknete znanje, da razvijete kolegijalnost, da gradite prijateljstvo i zajednicu sa vašim kolegama, budućim programerima, onda ste na pravom mestu, a sve što instruktori naše škole mogu da vam obećaju su rad, disciplina i znoj.</p><br />
                            <Link onClick={ClickHandler} className="theme-btn-s2" href="/kursevi">Pogledaj kurseve</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;