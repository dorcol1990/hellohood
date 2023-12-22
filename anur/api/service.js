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
        pitanjeHtml1:'Da li je HTML programski jezik?',
        odgovorHtml1:'Ne, HTML nije programski jezik, ali jeste jezik za obeležavanje, odnosno markup jezik. On koristi specijalne tagove kako bi bliže odredio ono što čini sadržaj naše stranice. Ako bi smo napisali sledeći kod: <h1>Naslov</h1>, tagovi označeni sa h1 poslali bi poruku pretraživaču da se između njih nalazi glavni naslov. Isto važi i za paragrafe, kao na primer: <p>Ovo je paragraf</p>, itd...',
        pitanjeHtml2:'Da li moram da naučim HTML da bih bio web programer?',
        odgovorHtml2:'Apsolutno da! HTML bi trebalo da bude tvoj prvi korak kada je učenje web tehnologija u pitanju. On je naš prvi kontakt sa kod editorom, sa linijama koda, i u opšte sa okruženjem u kojem ćemo provoditi 99 odsto našeg vremena kao programeri.',
        pitanjeHtml3:'Da li mogu da napravim sajt koristeći samo HTML, bez CSS-a i Javascripta?',
        odgovorHtml3:'Verovali ili ne, da, moguće je. HTML je obiman jezik koji sadrži bezbroj mogućnosti, pa je tako moguće napravit stranicu koristeći samo HTML, a da običan posetilac čak i ne primeti da osim html fajla, ne postoji ni CSS ni Javascript. Zato je znanje HTML-a važno za dalji razvoj naše stranice.',
        pitanjeHtml4:'Koliko vremena mi treba da savladam HTML?',
        odgovorHtml4:'Da se odmah razumemo: u programiranju vreme je ništa...i sve. Koliko je vremena nekome potrebno da savlada neku tehnologiju zavisi isključivo od vas. Naravno, naši instruktori učiniće sve da proces učenja bude toliko efikasan da na kraju neće ostati niti jedna nedoumica u vezi sa gradivom. Pa ipak, samo ovaj put, pokušaćemo da odgovorimo na čuveno pitanje o vremenu: potrebno je dve do tri nedelje, da apsolutni početnik uspe sam da napravi web stranicu koristeći samo HTML.',
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
        des2:'Jednom kada napravimo strukturu naše stranice, sa glavnim naslovom, podnaslovima, pasusima itd, dobićemo jedva nešto više od običnog teksta na beloj pozadini našeg sajta. Takav sadržaj čini srž informacija za koje želimo da dopru do posetilaca naših strana. I da, u ranoj fazi razvoja weba, tamo neki 90-ih pa i početkom 2000-tih, stilizovanje, odnosno "ukrašavanje" sajtova bilo je još uvek tek nešto više od pukih boldiranih slova unutar tekstova upotpunjenih fotografijama niske rezolucije. Tek s pojavom CSS-a, odnosno Cascading Style Sheets-a, tačnije njegovom verzijom 3, ovaj moćni alat, takođe markup jezik, počeo je da raste munjevitom brzinom, i danas predstavlja izuzetno razvijenu tehnologiju kojom je moguće praviti čak i prilično složene animacije. Iako jednostavne sintakse, CSS mnogim početnicima predstavlja ozbiljan izazov, kroz koji se prvi put susrećemo sa osnovnim logičkim rešenjima, složenim pravilima o pozicioniranju elemenata na stranici, bojama, gnežđenjem i naslđivanjem stilova, itd, itd...Međutim, jednom kada ovladate ovim alatom za stilizovanje, može se reći da ste kompletirali onaj deo web developmenta koji se tiče samog dizajna naših strana i da ste spremni da zakoračite u svet prgogramskih jezika i njihovih biblioteka i frameworka. Zbog svega toga, pozivamo vas da se priključite našoj Hellohood školi programiranja i postanete master u stilizovanju web sajtova.',
        pitanjeHtml1:'Da li je CSS programski jezik?',
        odgovorHtml1:'Ne, CSS nije programski jezik, iako poslednje novine sadrže neke elemente koji bi mogli da zaliče na programiranje, poput kreiranja varijabli, a u preprocesorima kao što je Sass, i malih funkcija.',
        pitanjeHtml2:'Da li je neophodno poznavati CSS da bi postao programer?',
        odgovorHtml2:'Ne, nije. Međutim ukoliko želite da postanete Front-end developer, poznavanje CSS-a je esencijalno. Osim toga, uparivanje HTML-a i CSS-a omogućava nam da pravimo kompletne web stranice, a sam CSS nudi sve više mogućnosti za određene funkcionalnosti bez upotrebe Javascript programskog jezika.',
        pitanjeHtml3:'Šta su selektori u CSS-u?',
        odgovorHtml3:'Selektori su ništa drugo do znaci, odnosno označavanje elemenata ili grupe elemenata na stranici koje želimo da stilizujemo. Kako naša HTML struktura vremenom postaje sve složenija sa brojnim elementima, to je potreban i neki sistem označavanja tih elemenata kako bi mogli različito da ih stilizujemo. Znam, pitate se, pa zar nije dovoljno to što smo ih označili tagovima u HTML-u? Odgovor je jednostavan: HTML može da sadrži bezbroj paragrafa sa identičnim tagom <p>. Problem nastaje onda kada različite paragrafe, na primer, želimo različito da stilizujemo. To znači da bi prethodno morali nekako da ih imenujemo, da ih označimo. Tome nam služe "id" i "class" atributi, ali o tome više na samom kursu.',
        pitanjeHtml4:'Koliko dobro moram da poznajem CSS da bih postao web programer?',
        odgovorHtml4:'Odgovor je prost: što više znaš, tim bolje! Međutim, poznavanje CSS-a pomaže nam da razvijamo našu prostornu inteligenciju, da naučimo kako da ekonomišemo sa ograničenim prostorom na našoj stranici, da prvi put upotrebimo neke trikove i logiku, a time i da naš mozak podesimo na programerski mode. Na kraju svega, uz pomoć HTML-a i CSS-a moguće je praviti savršene web stranice bez poznavanja Javascripta. Pa ako vam se svidi, možda vaša karijera ode u pravcu web dizajna, koji s razvojem platformi kao što su Figma i Webflow, ponovo postaje sve traženiji. ',
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
        des2:'Sass, odnosno Syntactically awesome style sheets, predstavlja preprocesor, odnosno kompajler, napravljen sa idejom da pojednostavi kod kucan u našem CSS-u. Naime, stilizovanje stranica u CSS-u ponekad može biti prilično obimno i detaljno, sa bezbroj linija koda koji sintaksički i nije toliko komplikovan, koliko je ponekad teško u njemu pronaći elemente i upotrebiti prave selektore u dugom nizu vitičastih zagrada. Sass je zapravo nastao upravo zbog toga, da sekvencioniše naš CSS, parcijalizuje ga i učini lakšim za manipulisanje i snalaženje, jednom kada naša folderska struktura na projektu postane složena. Osim toga, Sass je uneo i određene novine kao što su varijable, mixins, parcijale itd... I upravo na platformi Sass-a nastao je i jedan od najpopularnijih frameworka za stilizovanje naših stranica Bootstrap. On je zapravo framework koji nam omogućava da u naše HTML elemente unosimo već predefinisane stilove, ubrzavajući tako sam proces izrade web sajtova. Brz, moćan i prefinjenih stilskih rešenja, Boostrap je danas pored Tailwinda, jedan od najčešće korišćenih frameworka za stilizovanje. Dobro razumevanje Boostrapa, omogući će vam da razumete i svaki sledeći CSS framework za koji se odlučite da ga koristite.',
        pitanjeHtml1:'Mogu li da naučim samo Bootstrap umesto CSS-a?',
        odgovorHtml1:'Da, to je moguće. Međutim, malo je verovatno da ćete naučiti samo Bootstrap bez prethodnog poznavanja CSS-a, jer je i sam Bootstrap vrsta CSS-a koji u velikoj meri koristi Sass, koji je opet, sličan samom CSS-u.',
        pitanjeHtml2:'Da li je Bootstrap zastareo?',
        odgovorHtml2:'Ne, nije, iako se u poslednjih nekoliko godina pojavilo nebrojeno mnogo različitih CSS frameworka koji funkcionišu na sličnom principu kao Bootstrap. Bootstrap danas koristi više od 40.000 kompanija i milioni developera širom sveta.',
        pitanjeHtml3:'Mogu li napraviti sajt koristeći samo Bootstrap?',
        odgovorHtml3:'Naravno! Kada ovladate Bootstrapom, uz pomoć njega moguće je napraviti stranice u roku od nekoliko sati, ukoliko klijent od vas to zahteva. Međutim, velika je praksa potrebna da bi se Bootstrapom ovladalo toliko, da je moguće izvesti takav poduhvat.',
        pitanjeHtml4:'Koliko dobro moram da poznajem CSS da bih koristio Bootstrap?',
        odgovorHtml4:'Suštinski, dovoljno je poznavati samo kako da koristimo atribute poput "id" i "class" u našim HTML tagovima. Sve što je dalje potrbno je da primenjujete već predefinisane klase napisane u Bootstrapu. Ipak, budite oprezni, velika je praksa potrebna da bi postali ekspert u korišćenju Bootstrapa.',
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
        des2:'Javascript je programski jezik, i jedan je od temeljnih tehnologija WWW, odnosno World Wide Weba. Prema poslednjim podacima, čak 98% sajtova na klijentskoj strani koristi Javascript, a praktično svi browseri imaju engine podešen tako da omogućava izvršavanje Javascript koda na korisničkom uređaju. Iako je od 1993. godine promenio više imena, Javascript je ostao ustaljeni naziv za ovaj programski jezik, ali uprkos sličnosti sa Java programskim jezikom u nazivu, ova dva jezika po svojoj arhitekturi zapravo su toliko različita, da se njihova različitost može uporediti sa engleskim imenicama Car (automobil) i Carpet (tepih), jedino što im je zajedničko je prefix Car, dakle, to su dva potpuno odvojena jezika koji svaki za sebe imaju potpuno drugačiju svrhu i značaj. Javascript je tako, ušavši na mala vrata weba, postao njegov najznačajniji deo, koji korisnicima omogućava interakciju sa stranicama, poput klikova i unošenja podataka u forme, ali i komunikaciju sa serverom u cilju dopremanja informacija na klijentsku stranu ove "programerske jednačine". Ukoliko želite da savladate Javascript na nivou koji će vam omogućiti duboko razumevanje funkcionisanja ovog ali i nekih drugih jezika, upišite jedan od Hellohood kurseva, a naši instruktori potrudiće se da vam do poslednjeg detalja razjasne sve nedoumice u vezi sa ovim zanimljivim programskim jezikom. ',
        pitanjeHtml1:'Da li je Javascript težak?',
        odgovorHtml1:'Iako će mnogi iskusni developeri reći da Javascript nije težak, moraćemo da vas razočaramo. Da, Javascript je, kao i mnogi drugi programski jezici, zahtevan. Zapravo, potrebno je mnogo truda i volje da bi se razumeo koncept Javascripta. Osim toga, kao i neki drugi programski jezici, ni Javascript nije savršen. Unutar njega postoje brojne nelogičnosti koje će vam praviti "pakao" od života, ali nagrada kada ga jednom savladamo je neuporediva sa bilo kojim drugim uspehom.',
        pitanjeHtml2:'Koliko je potrebno vežbati Javascript da bi postali dobri developeri?',
        odgovorHtml2:'Svaki dan 5 sati, u roku od godinu dana. Naravno ovo je šala, ali, u svakoj šali ima malo ili mnogo istine. I opet: sve zavisi samo od vas!',
        pitanjeHtml3:'Da li je dovoljno da naučim samo Javascript da bih postao web developer?',
        odgovorHtml3:'Da, postoje kompanije u kojima se i dalje traži samo plain, odnosno vanila Javascript, bez poznavanja biblioteka kao što je React.',
        pitanjeHtml4:'Mogu li da preskočim Javascript i odmah počnem da učim React?',
        odgovorHtml4:'Tehnički, da, to je moguće, ali je svakako daleko bolja opcija da prvo savladate Javascript, jer će učenje Reacta tada biti duboko smislenije i razumnije.',
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
        pitanjeHtml1:'Koja je razlika između gita i GitHub-a?',
        odgovorHtml1:'Git je program za verzioniranje koda, dok je GitHub platforma, odnosno hosting servis za git repozitorijume. Jednom rečju, moguće je koristiti git bez GitHuba, ali ne i obrnuto. Osim toga, GitHub nije jedina platforma na kojoj možemo da čuvamo verzije našeg koda. Osim GitHuba, postoje i SourceForge, GitLab, itd...',
        pitanjeHtml2:'Da li je teško snaći se na GitHub platformi?',
        odgovorHtml2:'Iako su GitHub alati izuzetno optimizovani, uspešno korišćenje GitHub-a može predstavljati veliki izazov. Ali, kao i sve drugo, dugogodišnja praksa učiniće da se i na GitHubu osećate kao kod svoje kuće.',
        pitanjeHtml3:'Da li se podrazumeva da znamo da koristimo git i GitHub?',
        odgovorHtml3:'Da, rad od kuće i u velikim kolektivima učinio je GitHub neizbežnim sredstvom za rad developera.',
        pitanjeHtml4:'Da li mogu da napravim fatalnu grešku koristeći GitHub?',
        odgovorHtml4:'Da, čuvanje koda na udaljenom repozitorijumu, u timovima koji broje mnogo ljudi, može da bude prilično izazovan zadatak koji zahteva veliku koncentraciju i odgovornost svih koji rade na projektu. Međutim, sam git je napravljen tako da postoje različiti stadijumi u čuvanju verzije koda koji sprečavaju da on postane finalna verzija dok god neko od starijih developera ne odobri takvu promenu.',
        icon:sIcon6,
        icon2:svIcon5,
        ssImg1:sSingleimg1,
        ssImg2:sSingleimg2,
        sinst:ins5,
    },
    {
        Id: '6',
        sImg:simg6,
        sTitle: '{(React)}',
        slug:'react',
        description:'React je popularna JavaScript biblioteka nastala u "radionici" programera zaposlenih u kompaniji Facebook koja nam omogućava da pišemo složen kod u malim sekvencama koje se nazivaju komponente.',
        des2:'React je, ako bi baš u jednoj reči morala da se objasni ova moćna biblioteka, u stvari jedan sasvim novi koncept programiranja. Razvili su ga developeri Facebooka, a nastao je kao potreba da se obimni sadržaj smesti u delove koda, komponente, koje mogu da se koriste nebrojeno puta na različitim mestima na stranici, onda kada je to svrsishodno. To je međutim samo delić mogućnosti i inovacija koje je doneo React. Renderovanje koda sada je, uz pomoć virtuelnog DOM-a, postalo znatno efikasnije, a koncept single-page aplikacija učinio ga je neverovatno brzim na klijentskoj strani, jednom kada se stranica učita. Iako su ovo samo osnovni koncepti ove biblioteke, React nije usamljen u ovom pristupu pisanja koda. Ljutu konkurenciju prave mu Angular i Vue, a sve se više i Svelte izdvaja kao framework koji stremi ka samom vrhu. Međutim, ako jednom naučite neki od ovih frameworka, koncept ostalih konkurenata vrlo je sličan, i vrlo lako ćete uspeti da savladate različite frontend tehnologije upravo kroz React, verovatno najpopularniju biblioteku u ovom trenutku. Upišite zato naš Hellohood kurs, savladajte React, a posle...samo nebo je granica!',
        pitanjeHtml1:'Da li je React framework ili biblioteka (library)?',
        odgovorHtml1:'Na ovu temu pronaćićete pregršt rasprava i odgovora. Zvanično, React je biblioteka, dok ga neki smatraju i bibliotekom i frameworkom. Najbolji način da pobedite u ovoj semantičkoj zavrzlami je da postanete ekspert u Reactu. Tada ćete moći da izmislite svoj odgovor, a i neke stvari će vam se same kazti.',
        pitanjeHtml2:'Da li je React teži od Javascripta?',
        odgovorHtml2:'React je samo drugačiji način da pišemo Javascript, sa nekim svojim posebnim pravilnostima. Međutim prelazak sa Javascripta na React, predstavlja game changing momenat, i u samom početku učenja može da deluje izuzetno zahtevno i izazovno.',
        pitanjeHtml3:'Hoće li React uskoro otići u zaborav?',
        odgovorHtml3:'Neće. Iako dosta složen, React predstavlja krucijalnu tehnologiju u kreiranju Single page aplikacija, koji sa vremenom i obogaćenom bibliotekom postaje jednostavniji za korišćenje, napuštaju se složene prakse i svakodnevno javljaju nova, optimalnija rešenja za njegovu upotrebu. Ipak, React svakim danom dobija nove konkurente, pored svojih stalnih rivala Angulara i Vue.js.',
        pitanjeHtml4:'Da li je React poslednji stadijum učenja Front-enda?',
        odgovorHtml4:'Ne. React je samo poslednji stadijum ključnih, odnosno "must know" tehnologija. Next.js je framework baziran na Reactu koji u poslednje vreme stiče sve veću popularnost, pa se njegovo učenje izdvaja kao logičan nastavak Reacta.',
        icon:sIcon7,
        icon2:svIcon6,
        ssImg1:sSingleimg1,
        ssImg2:sSingleimg2,
        sinst:ins6,
    },
]
export default Services;