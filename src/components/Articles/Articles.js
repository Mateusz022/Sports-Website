import { Component } from "react";
import "./Articles.css";
import Slider from "../Slider/Slider";

export default class Articles extends Component {
    render () {
        return (
            <div className="container container-flex">
                
                <main className="main-articles">
                    
                    {/* Artykuł Motywacja */}
                    <article className="article-articles">
                        <h1 className="article-main-header" >Motywacja</h1>
                        <p className="article-main-content">
                        Poza wcześniej wspomnianą motywacją, aby zwiększyć swoje szanse na 
                        osiągnięcie założonych przez siebie celów, należy mieć dyscyplinę. 
                        Główną wadą motywacji jest to, że przeważnie jest ona 
                        krótkoterminowa, więc po pewnym czasie może ona się znacznie 
                        zmniejszyć. Dyscyplina natomiast to wypracowanie sobie pewnego 
                        stylu życia, nabycia lub wyzbycia się określonych zachowań i 
                        konsekwentne trzymanie się założeń przez wiele tygodni, miesięcy, 
                        lat. Dyscyplina łączy się także z zorganizowaniem, 
                        umiejętnością zarządzania czasem, a są to niewątpliwe cechy 
                        przydatne na wielu płaszczyznach życia, nie tylko takich 
                        jak sport, ale także są to cechy pożądane w pracy jak i w 
                        życiu codziennym, zatem warto je w sobie wykształcić. 
                        Jednak sama motywacja jest jak najbardziej przydatna i
                         szczególnie na początku bardzo pomocna, jednak to dyscyplina 
                         powinna być fundamentem, a motywacja dodatkiem.
                        </p>
                        <p className="article-break"></p>
                        <p className="article-main-content">
                        Kolejnym ważnym aspektem będzie metoda małych kroczków oraz
                         wyznaczenie sobie realnych celów. Aby nie stracić motywacji 
                         (zbyt szybko) oraz zbudować dyscyplinę, należy doceniać
                          małe postępy. Nie bez powodu mamy przysłowie 
                          ,, Nie od razu Kraków zbudowano”. Wybranie realnego, 
                          możliwego do osiągnięcia, adekwatnie do naszych możliwości 
                          celu także będzie pomocne.
                        </p>
                        <img src={process.env.PUBLIC_URL + '/images/motywacja2.jpg'} alt="Bieganie"
                        width="400" height="400" />
                        
                       
                    </article>

                    <hr/>

                    {/* Artykuł Suplementy*/}
                    <article className="article-articles">
                        <h1 className="article-main-header" id="suplementy">Suplementy</h1>
                        <p className="article-main-content">
                        Odpowiedzmy sobie najpierw na pytanie, czy suplementy są tylko 
                        dla osób ćwiczących ? Odpowiedź jest prosta : zdecydowanie nie. 
                        Mimo ,że suplementy kojarzą się głównie z osobami trenującymi 
                        zarówno naturalnie jak i nie, to suplementy takie jak np. 
                        witamina D, Kwasy Omega mogą przyjmować wszystkie osoby w 
                        ramach poprawy zdrowia i witalności. Należy jednak pamiętać, 
                        że absolutnie nie sprawdza się tutaj powiedzenie 
                        „im więcej tym lepiej”. Mimo że wymienione powyżej 
                        suplementy są bezpieczne i przebadane, należy pamiętać, 
                        że to nie cukierki i trzeba zażywać je odpowiedzialnie.
                        </p>
                        <p className="article-break"></p>
                        <p className="article-main-content">
                        Z kolei dla osób trenujących gama zalecanych lub polecanych 
                        suplementów się rozszerza. Należy pamiętać, że wraz z intensywnym 
                        wysiłkiem fizycznym, pocąc się, pozbywamy się z organizmu wody 
                        oraz cennych składników mineralnych, których niedobór trzeba 
                        uzupełniać. Suplementy takie jak np. Kreatyna, 
                        Cytrulina zwiększają nasze możliwości podczas treningu i 
                        poprawiają regenerację organizmu. Jednak ponownie należy 
                        podkreślić ,że trzeba przyjmować je zgodnie z określoną dawką, a nie ile mamy ochotę, 
                        bo wtedy ryzyko skutków ubocznych wywoływanych przez przebadane, 
                        długo dostępne na rynku suplementy, znacznie maleje.
                        </p>
                        <Slider
                            image1="/images/witamina22.jpg" caption1={"Witamina D"}
                            image2="/images/omega.jpg" caption2={"Kwas omega-3"}
                            image3="/images/kreatyna.jpg" caption3={"Kreatyna"}
                            image4="/images/Bialko1.jpg" caption4={"Białko serewatkowe"}
                            image5="/images/cytrulina22.jpg" caption5={"Cytrulina"}
                        />
                       
                    </article>

                    <hr/>
                    {/* Artykuł Zdrowe odżywanie*/}
                    <article className="article-articles">
                        <h1 className="article-main-header" id="odzywianie">Zdrowe odżywianie</h1>
                        <p className="article-main-content">
                        Przede wszystkim nie popadajmy w skrajności. 
                        Dieta bardzo restrykcyjna, w 100 procentach 
                        oparta na produktach pełnowartościowych, bez dawania 
                        sobie możliwości na zjedzenie ulubionego fast-fooda czy 
                        smakołyka, prędzej czy później legnie w gruzach. Po czasie 
                        ucierpimy nie tylko tracąc cały postęp np. 2-3 miesięcznego 
                        reżimu żywieniowego, ale także nasza psychika ulegnie pogorszeniu.
                         Tym bardziej będąc ,,sportowcem” amatorem lub po prostu 
                         chcąc polepszyć swoje zdrowie, takie restrykcje więcej 
                         zaszkodzą niż pomogą. Najlepszy podział procentowy żywności 
                         zdrowej w stosunku do żywności przetworzonej to 80 % do 20%. 
                         Taki sposób dawkowania sobie przyjemności pozwoli utrzymać 
                         dietę długofalowo i zapewnić stabilny proges.  Wpłynie on 
                         bardzo pozytywnie na zdrowie fizyczne i nie zadziała 
                         negatywnie na zdrowie psychiczne, pozwalając cieszyć się np. 
                         lodami w upalne dni czy ulubionym drinkiem na spotkaniu z 
                         najbliższymi czy przyjaciółmi. 
                        </p>
                        <p className="article-break"></p>
                        <p className="article-main-content">
                        Poniżej znajdziemy produkty zdrowe jak i bardzo pomocne przy 
                        odchudzaniu. Warzywa i owoce w dużej mierze to witaminy, 
                        naturalnie występujący cukier(glukoza,fruktoza) i woda. Orzechy to forma zdrowych
                         tłuszczy, z kolei chude mięso np. kurczak oraz jajka są świetnym 
                         źródłem białka.
                        </p>
                        
                         <Slider
                            image1="/images/owoce.jpg" caption1={"Owoce"}
                            image2="/images/warzywa2.jpg" caption2={"Warzywa"}
                            image3="/images/orzechy.jpg" caption3={"Orzechy"}
                            image4="/images/mieso1.jpg" caption4={"Chude Mięso"}
                            image5="/images/jajka.jpg" caption5={"Jajka"}
                        />
                       
                    </article>
                    <hr/>
                    {/* Artykuł Najlepsi sportowcy*/}
                    <article className="article-articles">
                        <h1 className="article-main-header" id="sportowcy">Najlepsi sportowcy oraz ich osiągnięcia</h1>
                        <p className="article-main-content">
                        Poniżej mamy 5 wybitnych sportowców wraz z krótką ich charakterystyką i opisem osiągnięć
                        <p className="article-break"></p>
                            <p className="sport-name">Robert Lewandowski:</p> zdecydowanie najbardziej znany polski piłkarz zarówno 
                            w Polsce jak i za granicą. Jest jednocześnie jednym z najlepszych piłkarzy 
                            na świecie, w rankingach stoi obok takich gwiazd jak Ronaldo czy Messi. 
                            Zdobył wiele nagród między innymi : Złota Piłka, Napastnik roku (w roku 2021)
                            oraz 27 innych trofeów.
                            <p className="article-break"></p>
                            <p className="sport-name">Mariusz Pudzianowski:</p>
                        tytan pracy i najlepszy polski były Strongman. 
                        Mariusz może pochwalić się zdobyciem tytułu mistrza Europy w zawodach
                        Strongman aż sześciokrotnie. Do tej pory nikomu nie udało się powtórzyć 
                        tego sukcesu. Obecnie dalej związany jest ze sportem, jednak głównie w 
                        mieszanych sztukach walki.
                        <p className="article-break"></p>
                        <p className="sport-name">Iga Świątek:</p>
                        młoda polska tenisistka mogąca pochwalić się zdobyciem wielu nagród, 
                        już w bardzo młodym wieku. Ogromny talent pozwolił jej w 2023 roku wygrać między 
                        innymi turniej  Roland Garros po raz trzeci, a jednocześnie drugi raz z rzędu. 
                        Jak widać połączenie ciężkiej pracy i talentu obfituje w liczne sukcesy nawet w 
                        tak młodym wieku.
                        <p className="article-break"></p>
                        <p className="sport-name">Robert Karaś:</p>
                        polski triathlonista słynący z morderczych triathlonów. 
                        Do najtrudniejszego wyzwania zdecydowanie należy ukończenie i pobicie 
                        rekordu świata 10 krotnego Ironmana. Aby tego dokonać musiał przepłynąć 38 km,
                         przejechać rowerem 1800 km i przebiec 422 km co brzmi wręcz nierealnie, 
                         jednak okazało się możliwe.
                         <p className="article-break"></p>
                         <p className="sport-name"> Michael Jordan</p>
                        Michael Jeffrey Jordan amerykański koszykarz mający na swoim koncie 
                        wiele sukcesów. Możemy zaliczyć do nich między innymi fakt bycia 
                        sześciokrotnym mistrzem NBA, czy też bycie dwukrotnym medalistą olimpijskim.

                        <p className="article-break"></p>
                         <p className="sport-name"> Wnioski ?</p>
                         Jak widać łącząc ciężką pracę, wytrwałość, talent, geny, odpowiednią 
                         dietę oraz silną psychikę można dojść na sam szczyt. Tutaj przykład 
                         sportowców, jednak naturalnie dotyczy to wielu dziedzin życia.

                        </p>
                        
                         <Slider
                            image1="/images/lewy.jpg" caption1={"Robert Lewandowski"}
                            image2="/images/pudzian1.jpg" caption2={"Mariusz Pudzianowski"}
                            image3="/images/iga.jpg" caption3={"Iga Świątek"}
                            image4="/images/karas1.jpg" caption4={"Robert Karaś"}
                            image5="/images/koszykarz2.jpg" caption5={"Michael Jordan"}
                        />
                       
                    </article>
                    
                    
                </main>
                <aside>
                    <div className="right-content">
                        <img src={process.env.PUBLIC_URL + '/images/motywacja5.jpg'} alt="Bieganie" height="600" />
                        
                        <div className="additional">
                            <p className="additional-description">
                                5 cech osoby zmotywowanej:   
                            </p>
                            <p className="additional-text">
                                <p class="examples">Sumienność</p>
                                <p class="examples">Wytrwałość</p>
                                <p class="examples">Konsekwencja</p>
                                <p class="examples">Nieustępliwość</p>
                                <p class="examples">Chęc Samorozwoju</p>
                            </p>
                        </div>



                        <img src={process.env.PUBLIC_URL + '/images/suple6.jpg'} alt="Bieganie" height="750" />

                        <div className="additional">
                            <p className="additional-description">
                                Jakich suplenetów unikać ? 
                            </p>
                            <p className="additional-text">
                                <p class="examples">Substancji słabo przebadanych</p>
                                <p class="examples">Substanci niewiadomego pochodzenia</p>
                                <p class="examples">Trenbolon</p>
                                <p class="examples">Sarmy</p>
                                <p class="examples">Synthol</p>
                                <p class="examples">DMAA</p>
                            </p>
                        </div>

                        <img src={process.env.PUBLIC_URL + '/images/zdrowie.png'} alt="Bieganie" height="450" />
                        <img src={process.env.PUBLIC_URL + '/images/pir3.jpg'} alt="Bieganie" height="350"  />
                        
                        <div className="additional">
                            <p className="additional-description">
                                Najważniejsze zasady zdrowego odżywiania:
                            </p>
                            <p className="additional-text">
                                <p class="examples">Zasada 80/20</p>
                                <p class="examples">Zmiany trwałe a nie tymczasowe</p>
                                <p class="examples">Zróżnicowanie produktów</p>
                                
                                
                            </p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/images/sukces1.jpg'} alt="Bieganie" height="450" />
                        <img src={process.env.PUBLIC_URL + '/images/sukces2.jpg'} alt="Bieganie" height="450" />
                        <img src={process.env.PUBLIC_URL + '/images/sukces3.jpg'} alt="Bieganie" height="275" />

                    </div>
                </aside>

                
            </div>
        );
    }
}