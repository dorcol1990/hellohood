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
        des2:'Čak i oni koji nikada nisu pomišljali da svoju karijeru počnu da grade u svetu web programiranja, najverovatnije su dosad već čuli za famoznu skraćenicu HTML. I zaista, najveći procenat onih koji se otisnuo u programiranje, svoje prve korake napravio je upravo u ovom jeziku. Mnogi od njih će vam kao iz topa reći da je HTML skraćenica za Hyper Text Markup Language. Ali šta to zapravo znači? Ovo je u stvari jezik koji browseru šalje poruku kakvi se sve elementi nalaze na našoj stranici. Recimo da odlučite da posetite neki od popularnih news portala, a tamo vas zatekne stranica na kojoj ne možete da razaznate šta je naslov, a šta glavni tekst, pasusi ne postoje, a slike su razbacane svida po displeju bez ikakvog reda. Verovatno bi pomislili da je neko hakovao vašu omiljenu stranicu, ili da je Chrome, ili već neki drugi browser, načisto pobrljavio. E pa HTML služi upravo tome, da jasno odvoji naslove, podnaslove, pasuse i linkove, da istakne određene delove teksta kao važnije od drugih, da navigacione kategorije postavi onde gde ih i očekujemo, a određene segmente stranice smesti u skup odeljaka sa određenim smislom. A kad smo već kod naziva, pa on zapravo to i znači: Hyper na gričkom označava predlog "na", pa bi ceo njegov naziv u bukvalnom prevodu značio - Jezik za obeležavanje teksta na (displeju). Međutim, jedan jedini pasus kao ovaj koji ste upravo pročitali, mali je da objasni svu važnost HTML-a. Pridružite se zato najboljem Hellohood kursu u regionu, da zajedno zakoračimo u svet programiranja.', 
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
        des2:'Jednom kada napravimo strukturu naše stranice, sa glavnim naslovom, podnaslovima, pasusima itd, dobićemo jedva nešto više od običnog teksta na beloj pozadini našeg sajta. Takav sadržaj čini srž informacija za koje želimo da dopru do posetilaca naših strana. I da, u ranoj fazi razvoja weba, tamo neki 90-ih pa i početkom 2000-tih, stilizovanje, odnosno "ukrašavanje" sajtova bilo je još uvek tek nešto više od pukih boldiranih slova unutar tekstova upotpunjenih fotografijama niske rezolucije. Tek s pojavom CSS-a, odnosno Cascading Style Sheets-a, tačnije njegovom verzijom 3, ovaj moćni alat, takođe markup jezik, počeo je da se raste munjevitom brzinom, i danas predstavlja izuzetno razvijenu tehnologiju kojom je moguće praviti čak i prilično složene animacije. Iako jednostavne sintakse, CSS mnogim početnicima predstavlja ozbiljan izazov, kroz koji se prvi put susrećemo sa osnovnim logičkim rešenjima, složenim pravilima o pozicioniranju elemenata na stranici, bojama, gnežđenjem i naslđivanjem stilova, itd, itd...Međutim, jednom kada ovladate ovim moćnim alatom za stilizovanje, može se reći da ste kompletirali onaj deo web developmenta koji se tiče samog dizajna naših strana i da ste spremni da zakoračite u svet prgogramskih jezika i njihovih biblioteka i frameworka. Zbog svega toga, pozivamo vas da se priključite našoj Hellohood školi programiranja i postanete master u stilizovanju web sajtova.   ',
        icon:sIcon3,
        icon2:svIcon3,
        ssImg1:sSingleimg1,
        ssImg2:sSingleimg2,
        sinst:ins2,
    },
    {
        Id: '3',
        sImg:simg3,
        sTitle: '$Sass/Bootstrap',
        slug:'sass-bootstrap',
        description:'Sass je moćan preprocesor koji olakšava snalaženje u često obimnim CSS fajlovima, strukturiše ih i uz pomoć popularnog frameworka Bootstrapa, čini naše kodiranje efikasnim i brzim, a našu organizaciju koda jednostavnijom.',
        des2:'Sass, odnosno Syntactically awesome style sheets, predstavlja preprocesor, odnosno kompajler, napravljen sa idejom da pojednostavi kod kucan u našem CSS-u. Naime, stilizovanje stranica u CSS-u ponekad može biti prilično obimno i detaljno, sa bezbroj linija koda koji sintaksički i nije toliko komplikovan, koliko je ponekad teško u njemu pronaći targetirane selektore u dugom nizu vitičastih zagrada. Sass je zapravo nastao upravo zbog toga, da sekvencioniše naš CSS, parcijalizuje ga i učini lakšim za manipulisanje i snalaženje, jednom kada naša folderska struktura na projektu postane složena. Osim toga, Sass je uneo i određene novine kao što su varijable, mixins, parcijale itd... I upravo na platformi Sass-a nastao je i jedan od najpopularnijih frameworka za stilizovanje naših stranica Bootstrap. On je zapravo framework koji nam omogućava da u naše HTML elemente unosimo već predefinisane stilove, ubrzavajući tako sam proces izrade web sajtova. Brz, moćan i prefinjenih stilskih rešenja, Boostrap je danas pored Tailwinda, jedan od najčešće korišćenih frameworka za stilizovanje. Dobro razumevanje Boostrapa, omogući će vam da razumete i svaki sledeći CSS framework za koji se odlučite da ga koristite.',
        icon:sIcon4,
        icon2:svIcon4,
        ssImg1:sSingleimg1,
        ssImg2:sSingleimg2,
        sinst:ins3,
    },
    {
        Id: '4',
        sImg:simg4,
        sTitle: '[JavaScript]',
        slug:'javascript',
        description:'JavaScript je programski jezik Weba. Legenda kaže da je nastao za samo 6 dana, ali je potrebno mnogo više da bi se proniklo u sve tajne ovog popularnog jezika. Od weba do igrica, Javascript se danas koristi u svakoj grani IT industrije.',
        des2:'Javascript je programski jezik, i jedan je od temeljnih tehnologija WWW, odnosno World Wide Weba. Prema poslednjim podacima, čak 98% sajtova na klijentskoj strani koristi Javascript, a praktično svi browseri imaju engine podešen tako da omogućava izvršavanje Javascript koda na korisničkom uređaju. Iako je od 1993. godine promenio više imena, Javascript je ostao ustaljeni naziv za ovaj programski jezik, ali uprkos sličnosti sa Java programskim jezikom u nazivu, ova dva jezika po svojoj arhitekturi zapravo su toliko različita, da se njihova različitost može uporediti sa engleskim imenicama Car (automobil) i Carpet (tepih), jedino što im je zajedničko je prefix Car, dakle, to su dva potpuno odvojena jezika koji svaki za sebe imaju potpuno drugačiju svrhu i značaj. Javascript je tako, ušavši na mala vrata weba, postao njegov najznačajniji deo, koji korisnicima omogućava interakciju sa stranicama, poput klikova i unošenja podataka u forme, ali i komunikaciju sa serverom u cilju dopremanja informacija na klijentsku stranu ove "programerske jednačine". Ukoliko želite da savladate Javascript na nivou koji će vam omogućiti duboko razumevanje funkcionisanja ovog ali nekih drugih jezika, upišite jedan od Hellohood kurseva, a naši instruktori potrudiće se da vam do poslednjeg detalja razjasne sve nedoumice u vezi sa ovim zanimljivim programskim jezikom. ',
        icon:sIcon5,
        icon2:svIcon5,
        ssImg1:sSingleimg1,
        ssImg2:sSingleimg2,
        sinst:ins4,
    },
    {
        Id: '5',
        sImg:simg5,
        sTitle: '--@Git-GitHub',
        slug:'git-github',
        description:'Git je program za verzioniranje koda, on omogućava njegovu kontrolu i pamti različite verzije našeg koda u dugom procesu programiranja, kao sekvence prošlosti kojima možemo da se vratimo kao kroz vreme.',
        des2:'Git je program koji je napisao čuveni Linus Torvalds, tvorac operativnog sistema Linux, i koji je u mnogome olakšao ono što zovemo "verzioniranjem koda". Git je postao prihvaćen u mnogim softverskim projektima kao standard u praćenju razvoja softvera u svim njegovim fazama. Ali šta to u stvari znači?  On omogućava praćenje istorije našeg koda, koji u toku samog procesa doživi hiljade i hiljade prepravki i novih linija. Prednost ovog praćenja je u tome što znamo šta je u kodu menjano, kada je menjano, ko je menjao i zašto ga je menjao. Na kraju svega, sve ove izmene u različitim delovima našeg projekta, odnosno u različitim folderima i na različitim fajlovima, mogu biti spojene u zajednički projekat koji daje celovit proizvod, iako je na njemu radilo na desetine developera u različitim vremenskim periodima. Da, zvuči komplikovano, ali vežba i iskustvo u radu sa gitom, učiniće nas istinskim developerima spremnim da se uhvate u koštac sa složenim projektima u korporativnom okruženju.',
        icon:sIcon6,
        icon2:svIcon5,
        ssImg1:sSingleimg1,
        ssImg2:sSingleimg2,
        sinst:ins5,
    },
    {
        Id: '6',
        sImg:simg6,
        sTitle: '({React})',
        slug:'react',
        description:'React je popularna JavaScript biblioteka nastala u "radionici" programera zaposlenih u kompaniji Facebook koja nam omogućava da pišemo složen kod u malim sekvencama koje se nazivaju komponente.',
        des2:'React je, ako bi baš u jednoj reči morala da se objasni ova moćna biblioteka, u stvari jedan sasvim novi koncept programiranja. Razvili su ga developeri Facebooka, a nastao je kao potreba da se obimni sadržaj smesti u delove koda, komponente, koje mogu da se koriste nebrojeno puta na različitim mestima na stranici, onda kada je to svrsishodno. To je međutim samo delić mogućnosti i inovacija koje je doneo React. Renderovanje koda sada je, uz pomoć virtuelnog DOM-a, postalo znatno efikasnije, a koncept single-page aplikacija učinio ga je neverovatno brzim na klijentskoj strani, jednom kada se stranica učita. Iako su ovo samo osnovni koncepti ove biblioteke, React nije usamljen u ovom pristupu pisanja koda. Ljutu konkurenciju prave mu Angular i Vue, a sve se više i Svelte izdvaja kao framework koji stremi ka samom vrhu. Međutim, ako jednom naučite neki od ovih frameworka, koncept ostalih konkurenata vrlo je sličan, i vrlo lako ćete uspeti da savladate različite frontend tehnologije upravo kroz React, verovatno najpopularniju biblioteku u ovom trenutku. Upišite zato naš Hellohood kurs, savladajte React, a posle...samo nebo je granica!',
        icon:sIcon7,
        icon2:svIcon6,
        ssImg1:sSingleimg1,
        ssImg2:sSingleimg2,
        sinst:ins6,
    },
]
export default Services;