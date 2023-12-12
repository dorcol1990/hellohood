import simg from '/public/images/service/html.png'
import simg2 from '/public/images/service/css-3.png'
import simg3 from '/public/images/service/bootstrap.png'
import simg4 from '/public/images/service/javascript.png'
import simg5 from '/public/images/service/git.png'
import simg6 from '/public/images/service/structure.png'


import sIcon from '/public/images/service/html.png'
import svIcon2 from '/public/images/service/2.png'
import sIcon3 from '/public/images/service/css-3.png'
import svIcon3 from '/public/images/service/4.png'
import sIcon4 from '/public/images/service/bootstrap.png'
import svIcon4 from '/public/images/service/6.png'
import sIcon5 from '/public/images/service/javascript2.png'
import svIcon5 from '/public/images/service/8.png'
import sIcon6 from '/public/images/service/git.png'
import svIcon6 from '/public/images/service/10.png'
import sIcon7 from '/public/images/service/structure.png'

import sSingleimg1 from '/public/images/service-single/2.jpg'
import sSingleimg2 from '/public/images/service-single/3.jpg'


import ins1 from '/public/images/instragram/14.jpg'
import ins2 from '/public/images/instragram/13.jpg'
import ins3 from '/public/images/instragram/15.jpg'
import ins4 from '/public/images/instragram/16.jpg'
import ins5 from '/public/images/instragram/17.jpg'
import ins6 from '/public/images/instragram/18.jpg'


const Services = [
    {
        Id: '1',
        sImg:simg,
        sTitle: '<HTML>',
        slug:'html',
        description:'HTML je jezik kojim počinje svako putovanje u svet Web programiranja. On "dekodira" naš mozak, podešava ga na programerski mode, i predstavlja prvi ozbiljan izazov za svakog developera početnika.',
        des2:'Čak i oni koji nikada nisu pomišljali da svoju karijeru počnu da grade u svetu web programiranja, najverovatnije su dosad već čuli za famoznu skraćenicu HTML. I zaista, najveći procenat onih koji se otisnuo u programiranje, svoje prve korake napravio je upravo u ovom jeziku. Mnogi od njih će vam kao iz topa reći da je HTML skraćenica za Hyper Text Markup Language. Ali šta to zapravo znači? Ovo je u stvari jezik koji browseru šalje poruku kakvi se sve elementi nalaze na našoj stranici. Recimo da odlučite da posetite neki od popularnih news portala, a tamo vas zatekne stranica na kojoj ne možete da razaznate šta je naslov, a šta glavni tekst, pasusi ne postoje, a slike su razbacane svida po displeju bez ikakvog reda. Verovatno bi pomislili da je neko hakovao vašu omiljenu stranicu, ili da je Chrome, ili već neki drugi browser, načisto pobrljavio. E pa HTML služi upravo tome, da jasno odvoji naslove, podnaslove, pasuse i linkove, da istakne određene delove teksta kao važnije od drugih, da navigacione kategorije postavi onde gde ih i očekujemo, a određene segmente stranice smesti u skup odeljaka sa određenim smislom. A kad smo već kod naziva, pa on zapravo to i znači: Hyper na gričkom označava predlog "na", pa bi ceo njegov naziv u bukvalnom prevodu značio - Jezik za obeležavanje teksta na (displeju). Međutim, jedan jedini pasus kao ovaj koji ste upravo pročitali, mali je da objasni svu važnost HTML-a. Pridružite se zato najboljem kursu u regionu da zajedno zakoračimo u svet programiranja.', 
        icon:sIcon,
        icon2:svIcon2,
        ssImg1:sSingleimg1,
        ssImg2:sSingleimg2,
        sinst:ins1,
    },
    {
        Id: '2',
        sImg:simg2,
        sTitle: '{CSS}',
        slug:'css',
        description:'CSS je moćan alat za "ulepšavanje" naših stranica. Učeći CSS i postavljajući njime "prave stvari na pravo mesto", učimo da razvijamo logiku i pripremamo se za prve izazove web programiranja u JavaScript programskom jeziku.',
        des2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon:sIcon3,
        icon2:svIcon3,
        ssImg1:sSingleimg1,
        ssImg2:sSingleimg2,
        sinst:ins2,
    },
    {
        Id: '3',
        sImg:simg3,
        sTitle: 'SASS/Bootstrap',
        slug:'sass-bootstrap',
        description:'SASS je moćan preprocesor koji olakšava snalaženje u često obimnim CSS fajlovima, strukturiše ih i uz pomoć popularnog frameworka Bootstrapa, čini naše kodiranje efikasnim i brzim, a našu organizaciju koda jednostavnijom.',
        des2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon:sIcon4,
        icon2:svIcon4,
        ssImg1:sSingleimg1,
        ssImg2:sSingleimg2,
        sinst:ins3,
    },
    {
        Id: '4',
        sImg:simg4,
        sTitle: 'JavaScript',
        slug:'javascript',
        description:'JavaScript je programski jezik Weba. Legenda kaže da je nastao za samo 6 dana, ali je potrebno mnogo više da bi se proniklo u sve tajne ovog popularnog jezika. Od weba do igrica, Javascript se danas koristi u svakoj grani IT industrije.',
        des2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon:sIcon5,
        icon2:svIcon5,
        ssImg1:sSingleimg1,
        ssImg2:sSingleimg2,
        sinst:ins4,
    },
    {
        Id: '5',
        sImg:simg5,
        sTitle: 'Git i GitHub',
        slug:'git-github',
        description:'Git je program za verzioniranje koda, on omogućava njegovu kontrolu i pamti različite verzije našeg koda u dugom procesu programiranja, kao sekvence prošlosti kojima možemo da se vratimo kao kroz vreme.',
        des2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon:sIcon6,
        icon2:svIcon5,
        ssImg1:sSingleimg1,
        ssImg2:sSingleimg2,
        sinst:ins5,
    },
    {
        Id: '6',
        sImg:simg6,
        sTitle: 'React',
        slug:'react',
        description:'React je popularna JavaScript biblioteka nastala u "radionici" programera zaposlenih u kompaniji Facebook koja nam omogućava da pišemo složen kod u malim sekvencama koje se nazivaju komponente.',
        des2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon:sIcon7,
        icon2:svIcon6,
        ssImg1:sSingleimg1,
        ssImg2:sSingleimg2,
        sinst:ins6,
    },
]
export default Services;