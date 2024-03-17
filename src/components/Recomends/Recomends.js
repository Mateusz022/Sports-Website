import { Component } from "react";
import "./Recomends.css";
import "./css/fontello.css";

export default class Recomends extends Component {
    render() {
        return (
            <div className="main">
                 {/* Bieganie */}
                <div className="container1">
                <div className="content">
                    <div className="text-container">
                        <p id="bieganie-info" className="important">Bieganie kilka ważnych informacji</p>
                        <p className="info"> <p className="information-title-sport">Informacje o Bieganiu: </p>
                        Do największych zalet biegania niewątpliwie można zaliczyć dostępność 
                        oraz cenę na start. Biegać można niemal wszędzie, mamy do wyboru różne typy biegów np sprint, maraton,
                        oraz  nie potrzebujemy specjalistycznego sprzętu by zacząć pierwsze treningi. Bieganie buduje
                        kondycje, wydolności oraz angażuje wiele mięśni do pracy. Jest też 
                        świetną formą przygotowania do innych aktywności fizycznych w 
                        których wymagana jest kondycja. Dla osób z większym budżetem zalecana bieżnia aby móc trenować 
                        nawet w domu by nie mieć wymówki z powodu pogody.
                        </p>
                        <span className="stars">
                            <p title="czy każdy może zacząć">Dostępność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>
                        
                        <span className="stars">
                            <p title="Rozwój na wielu płaszczyznach">Uniwersalność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Cena niezbędnego wyposażenia">Cena:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Trudność rozpoczęcia">Trudność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                    </div>
                    <div className="img-img">
                        <img className="img-one" src={process.env.PUBLIC_URL + '/images/running.jpg'} alt="Bieganie" 
                        width="45%" height="auto" />
                        <img className="img-two" src={process.env.PUBLIC_URL + '/images/running2.jpg'} alt="Bieganie" 
                        width="45%" height="auto" />
                    </div>
                    
                </div>
                <div className="sidebar">
                    <p className="ad">Reklama</p>
                    <img
                        src={process.env.PUBLIC_URL + '/images/bieznia.jpg'}
                        alt="Reklama"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>

                
            </div>
             {/* Kalistenika */}
            <div className="container1" >
                <div className="content">
                    <div className="text-container">
                        <p className="important" id="kali">Kalistenika kilka ważnych informacji</p>
                        <p className="info"><p className="information-title-sport">Informacje o Kalistenice: </p>
                        
                        Kalistenika to funkcjonalny trening siłowy w którym obciążeniem jest własna 
                        masa ciała. Na początek nie potrzeba żadnego sprzętu ani wkładu finansowego. 
                        Można ćwiczyć zarówno w zaciszu domowym jak i na świeżym powietrzu np. na 
                        poręczach lub drążkach. Mnogość ćwiczeń i sposobów ich wykonywania jest 
                        olbrzymia, więc bez problemu osoba o dowolnym stopniu zaawansowania dopasuje 
                        ćwiczenia indywidualnie do siebie. W późniejszym czasie warto pomyśleć o kupnie 
                        stacjonarnego drążka aby urozmaicić treningi.
                        </p>
                        <span className="stars">
                            <p title="czy każdy może zacząć">Dostępność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>
                        
                        <span className="stars">
                            <p title="Rozwój na wielu płaszczyznach">Uniwersalność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Cena niezbędnego wyposażenia">Cena:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Trudność rozpoczęcia">Trudność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                    </div>
                    <div className="img-img">
                        <img className="img-one" src={process.env.PUBLIC_URL + '/images/kalistenika2.jpg'} alt="Kalistenika" 
                        width="45%" height="auto" />
                        <img className="img-two" src={process.env.PUBLIC_URL + '/images/kalistenika3.jpg'} alt="Kalistenika" 
                        width="45%" height="auto" />
                    </div>
                    
                </div>
                <div className="sidebar">
                    <p className="ad">Reklama</p>
                    <img
                        src={process.env.PUBLIC_URL + '/images/drazek.jpg'}
                        alt="Reklama"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>

             {/* Trójbój*/}
             <div className="container1">
                <div className="content">
                    <div className="text-container">
                        <p className="important" id="trojboj">Trójbój kilka ważnych informacji</p>
                        <p className="info"><p className="information-title-sport">Informacje o Trójboju: </p>
                        Jedna z trudniejszych dyscyplin siłowych skupiająca się na trzech 
                        fundamentalnych ćwiczeniach: wyciskanie na ławce poziomej, przysiad ze 
                        sztangą, oraz martwy ciąg. Ze względu na trudność rozpoczęcia zalecany
                         jest partner treningowy lub trener personalny, aby dokładnie nauczyć 
                         się wzorców ruchowych. Problemem może okazać się także konieczność 
                         dokupienia sprzętu (jeśli trenujemy w domu ) lub karnet na siłownie. 
                         Do zalecanych sprzętów zaliczamy sztangę wraz z obciążeniem.
                        </p>
                        <span className="stars">
                            <p title="czy każdy może zacząć">Dostępność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>
                        
                        <span className="stars">
                            <p title="Rozwój na wielu płaszczyznach">Uniwersalność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Cena niezbędnego wyposażenia">Cena:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            
                        </span>

                        <span className="stars">
                            <p title="Trudność rozpoczęcia">Trudność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            
                        </span>

                    </div>
                    <div className="img-img">
                        <img className="img-one" src={process.env.PUBLIC_URL + '/images/trojboj5.jpg'} alt="Trójbój" 
                        width="45%" height="auto" />
                        <img className="img-two" src={process.env.PUBLIC_URL + '/images/trojboj3.jpg'} alt="Trójbój" 
                        width="45%" height="auto" />
                    </div>
                    
                </div>
                <div className="sidebar">
                    <p className="ad">Reklama</p>
                    <img
                        src={process.env.PUBLIC_URL + '/images/sprzet2.jpg'}
                        alt="Reklama"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>

                
            </div>

             {/* Tenis */}
             <div className="container1">
                <div className="content">
                    <div className="text-container">
                        <p className="important" id="tenis">Tenis kilka ważnych informacji</p>
                        <p className="info"><p className="information-title-sport">Informacje o Tenisie: </p>
                        Prosty w założeniach kulturalny sport indywidualny, jednak wymagający dużej
                         wydolności i kondycji. Jest to bardzo przyjemna i zdrowa forma aktywności 
                         fizycznej, podczas której spędzamy dużo czasu na świeżym powietrzu. 
                         Niestety nie jest tak łatwo z dostępnością np. kortów tenisowych, a 
                         także mogą pojawić się problemy z brakiem partnera treningowego z którym 
                         będzie można ćwiczyć grę. Do wymaganego sprzętu zaliczamy naturalnie rakietę 
                         oraz piłki do tenisa.
                        </p>
                        <span className="stars">
                            <p title="czy każdy może zacząć">Dostępność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            
                        </span>
                        
                        <span className="stars">
                            <p title="Rozwój na wielu płaszczyznach">Uniwersalność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Cena niezbędnego wyposażenia">Cena:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            
                        </span>

                        <span className="stars">
                            <p title="Trudność rozpoczęcia">Trudność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                    </div>
                    <div className="img-img">
                        <img className="img-one" src={process.env.PUBLIC_URL + '/images/tenis5.jpg'} alt="Tenis" 
                        width="45%" height="auto" />
                        <img className="img-two" src={process.env.PUBLIC_URL + '/images/tenis6.jpg'} alt="Tenis" 
                        width="45%" height="auto" />
                    </div>
                    
                </div>
                <div className="sidebar">
                    <p className="ad">Reklama</p>
                    <img
                        src={process.env.PUBLIC_URL + '/images/tenis10.jpg'}
                        alt="Reklama"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>

                
            </div>

            {/* Piłka Nożna */}
            <div className="container1">
                <div className="content">
                    <div className="text-container">
                        <p className="important" id="noga">Piłka Nożna kilka ważnych informacji</p>
                        <p className="info"><p className="information-title-sport">Informacje o Piłce Nożnej: </p>
                        Jeden z najbardziej jak nie najbardziej popularnych sportów drużynowych na świecie. 
                        Praktycznie każdy miał z nim do czynienia na jakimś etapie swojego życia np. na 
                        lekcjach wf czy na podwórku. Duża zaletą jest możliwość grania na wszelkich 
                        boiskach, halach a także ćwiczenie tricków piłkarskich czy żonglerki. 
                        Do wymaganych sprzętów zaliczamy piłkę do nogi i to tyle 😉
                        </p>
                        <span className="stars">
                            <p title="czy każdy może zacząć">Dostępność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>
                        
                        <span className="stars">
                            <p title="Rozwój na wielu płaszczyznach">Uniwersalność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            
                        </span>

                        <span className="stars">
                            <p title="Cena niezbędnego wyposażenia">Cena:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Trudność rozpoczęcia">Trudność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                    </div>
                    <div className="img-img">
                        <img className="img-one" src={process.env.PUBLIC_URL + '/images/noga3.jpg'} alt="Piłka nożna" 
                        width="45%" height="auto" />
                        <img className="img-two" src={process.env.PUBLIC_URL + '/images/noga2.jpg'} alt="Piłka nożna" 
                        width="45%" height="auto" />
                    </div>
                    
                </div>
                <div className="sidebar">
                    <p className="ad">Reklama</p>
                    <img
                        src={process.env.PUBLIC_URL + '/images/pila3.jpg'}
                        alt="Reklama"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>

            {/* Siatkówka */}
            <div className="container1">
                <div className="content">
                    <div className="text-container">
                        <p className="important" id="siata">Siatkówka kilka ważnych informacji</p>
                        <p className="info"><p className="information-title-sport">Informacje o Siatkówce: </p>
                        Siatkówka to dynamiczny i popularny sport, w którym można grać zarówno 
                        na halach treningowych jak i na plaży. Wymaga ona zarówno kondycji fizycznej 
                        jak i myślenia nie tylko za siebie, ale także za drużynę. Niestety 
                        w porównaniu do boisk do piłki nożnej, analogicznych do siatkówki jest 
                        znacznie mniej. Jednak znalezienie odpowiedniego miejsca oraz kupienie 
                        pierwszej dobrej jakościowo piłki do siatkówki nie powinno być barierą 
                        nie do przejścia.
                        </p>
                        <span className="stars">
                            <p title="czy każdy może zacząć">Dostępność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            
                        </span>
                        
                        <span className="stars">
                            <p title="Rozwój na wielu płaszczyznach">Uniwersalność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Cena niezbędnego wyposażenia">Cena:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Trudność rozpoczęcia">Trudność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                    </div>
                    <div className="img-img">
                        <img className="img-one" src={process.env.PUBLIC_URL + '/images/siata3.jpg'} alt="Siatkówka" 
                        width="45%" height="auto" />
                        <img className="img-two" src={process.env.PUBLIC_URL + '/images/siata4.jpg'} alt="Siatkówka" 
                        width="45%" height="auto" />
                    </div>
                    
                </div>
                <div className="sidebar">
                    <p className="ad">Reklama</p>
                    <img
                        src={process.env.PUBLIC_URL + '/images/piladosiaty3.jpg'}
                        alt="Reklama"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>

              {/* Strzelanie */}
              <div className="container1">
                <div className="content">
                    <div className="text-container">
                        <p className="important" id="strzelanie">Strzelanie kilka ważnych informacji</p>
                        <p className="info"><p className="information-title-sport">Informacje o Strzelaniu: </p> 
                        Przyjemność ze strzelania z prawdziwych historycznych czy też nowoczesnych 
                        broni na pewno jest olbrzymia. Niestety w tym wypadku koszty są naprawdę duże. 
                        Trzeba chodzić na strzelnice i koniecznie wynająć instruktora, bez którego 
                        trening nie będzie możliwy bez pozwolenia na broń, którego załatwienie wymaga 
                        dużo czasu, pieniędzy i nabytych wcześniej umiejętności. Oczywiście w przyszłości 
                        można nabyć własny egzemplarz broni wraz z nabojami, której ceny zaczynają się na
                         kilku tysiącach, a kończą nawet na kilkudziesięciu..
                        </p>
                        <span className="stars">
                            <p title="czy każdy może zacząć">Dostępność:</p> 
                            <i class="icon-star"></i>
                            
                        </span>
                        
                        <span className="stars">
                            <p title="Rozwój na wielu płaszczyznach">Uniwersalność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            
                        </span>

                        <span className="stars">
                            <p title="Cena niezbędnego wyposażenia">Cena:</p> 
                            <i class="icon-star"></i>
                            
                        </span>

                        <span className="stars">
                            <p title="Trudność rozpoczęcia">Trudność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            
                        </span>

                    </div>
                    <div className="img-img">
                        <img className="img-one" src={process.env.PUBLIC_URL + '/images/strzelanie2.jpg'} alt="Tenis" 
                        width="45%" height="auto" />
                        <img className="img-two" src={process.env.PUBLIC_URL + '/images/strzelanie3.jpg'} alt="Tenis" 
                        width="45%" height="auto" />
                    </div>
                    
                </div>
                <div className="sidebar">
                    <p className="ad">Reklama</p>
                    <img
                        src={process.env.PUBLIC_URL + '/images/tarcza2.jpg'}
                        alt="Reklama"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>

              {/* Koszykówka */}
              <div className="container1">
                <div className="content">
                    <div className="text-container">
                        <p className="important" id="koszykowka">Koszykówka kilka ważnych informacji</p>
                        <p className="info"><p className="information-title-sport">Informacje o Koszykówce: </p>
                        Koszykówka to sport charakteryzujący się szybkością i ścisłą pracą zespołową. 
                        Podstawowym celem jest zdobycie większej ilości punktów niż drużyna przeciwnika 
                        wykonując perfekcyjne rzuty z pola, w przypadku trafienia z bliżej odległości
                         zdobywamy 2 w przypadku dalszej 3 punkty. Trening rzutów można zacząć niemal 
                         wszędzie, ponieważ dostępność koszów jest na dobrym poziomie. Do niezbędnego 
                         wyposażenia zaliczamy piłkę do kosza, oraz cierpliwość w trenowaniu dalekich,
                          dokładnych rzutów.
                        </p>
                        <span className="stars">
                            <p title="czy każdy może zacząć">Dostępność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>
                        
                        <span className="stars">
                            <p title="Rozwój na wielu płaszczyznach">Uniwersalność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Cena niezbędnego wyposażenia">Cena:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Trudność rozpoczęcia">Trudność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                    </div>
                    <div className="img-img">
                        <img className="img-one" src={process.env.PUBLIC_URL + '/images/koszykowka6.jpg'} alt="Tenis" 
                        width="45%" height="auto" />
                        <img className="img-two" src={process.env.PUBLIC_URL + '/images/koszykowka10.jpg'} alt="Tenis" 
                        width="45%" height="auto" />
                    </div>
                    
                </div>
                <div className="sidebar">
                    <p className="ad">Reklama</p>
                    <img
                        src={process.env.PUBLIC_URL + '/images/kosz4.jpg'}
                        alt="Reklama"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>


              {/* Boks */}
              <div className="container1">
                <div className="content">
                    <div className="text-container">
                        <p className="important" id="boks">Boks kilka ważnych informacji</p>
                        <p className="info"><p className="information-title-sport">Informacje o Boksie: </p>
                        Sport kontaktowy o podwyższonym stopniu ryzyka. Podczas treningów 
                        z partnerem, trenerem jesteśmy narażeni na kontuzje, obicia. 
                        Do dopuszczalnych technik zaliczamy uderzenia rękami, kopanie i 
                        obalanie jest niedozwolone. Ćwicząc sport kontaktowy musimy liczyć 
                        się z koniecznością zapisania do jakiejś szkoły boksu, by bezpiecznie
                         pod okiem trenera szlifować technikę uderzeń. Praca na worku 
                         (który warto kupić ) może być uzupełnieniem treningu ale nie 
                         jego fundamentem.
                        </p>
                        <span className="stars">
                            <p title="czy każdy może zacząć">Dostępność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>
                        
                        <span className="stars">
                            <p title="Rozwój na wielu płaszczyznach">Uniwersalność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Cena niezbędnego wyposażenia">Cena:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Trudność rozpoczęcia">Trudność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            
                        </span>

                    </div>
                    <div className="img-img">
                        <img className="img-one" src={process.env.PUBLIC_URL + '/images/boks3.jpg'} alt="Tenis" 
                        width="45%" height="auto" />
                        <img className="img-two" src={process.env.PUBLIC_URL + '/images/boks10.jpg'} alt="Tenis" 
                        width="45%" height="auto" />
                    </div>
                    
                </div>
                <div className="sidebar">
                    <p className="ad">Reklama</p>
                    <img
                        src={process.env.PUBLIC_URL + '/images/worek4.jpg'}
                        alt="Reklama"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>


              {/* Kolarstwo*/}
              <div className="container1">
                <div className="content">
                    <div className="text-container">
                        <p className="important" id="kolarstwo">Kolarstwo kilka ważnych informacji</p>
                        <p className="info"> <p className="information-title-sport">Informacje o Kolarstwie: </p>
                        Piękny indywidualny sport, z którym na poziomie amatorskim miał styczność 
                        niemal każdy. Rozwija on w największej mierze nogi jednak pozostałe mięśnie 
                        wcale nie ,,odpoczywają” podczas intensywnej, szybkiej jazdy. 
                        Jedynym problemem jest konieczność posiadania dobrego jakościowo roweru, 
                        kasku, okularów oraz zalecane są także ochraniacze na kolana łokcie a 
                        także uchwyt na bidon z wodą, który zapewni niezbędne nawodnienie w 
                        czasie intensywnego wysiłku bez konieczności przerywania jazdy.
                        </p>
                        <span className="stars">
                            <p title="czy każdy może zacząć">Dostępność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>
                        
                        <span className="stars">
                            <p title="Rozwój na wielu płaszczyznach">Uniwersalność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Cena niezbędnego wyposażenia">Cena:</p> 
                            <i class="icon-star"></i>
                           
                        </span>

                        <span className="stars">
                            <p title="Trudność rozpoczęcia">Trudność:</p> 
                            <i class="icon-star"></i>
                            
                        </span>

                    </div>
                    <div className="img-img">
                        <img className="img-one" src={process.env.PUBLIC_URL + '/images/kolarstwo11.jpeg'} alt="Tenis" 
                        width="45%" height="auto" />
                        <img className="img-two" src={process.env.PUBLIC_URL + '/images/kolarstwo10.jpg'} alt="Tenis" 
                        width="45%" height="auto" />
                    </div>
                    
                </div>
                <div className="sidebar">
                    <p className="ad">Reklama</p>
                    <img
                        src={process.env.PUBLIC_URL + '/images/rower3.jpg'}
                        alt="Reklama"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>


              {/* Pływanie */}
              <div className="container1">
                <div className="content">
                    <div className="text-container">
                        <p className="important" id="plywanie">Pływanie kilka ważnych informacji</p>
                        <p className="info"><p className="information-title-sport">Informacje o Pływaniu: </p>
                        Zdrowy indywidualny sport przykładający dużą wagę do rozwoju mięśni na całym ciele
                         a także koordynacji i techniki. Mnogość styli pływackich pozwala na dopasowanie 
                         ich do indywidualnych możliwości i upodobań. Jeśli występują obawy, strach przed 
                         wodą, warto rozważyć instruktora który pomoże podczas początkowych faz nauki i 
                         doda otuchy. Do kosztów zaliczamy kupno między innymi okularów, aby można było 
                         łatwiej trenować pływanie pod wodą lub czepek pływacki. Płetwy z kolei zwiększą
                         naszą prędkość i lekkość pływania.
                        </p>
                        <span className="stars">
                            <p title="czy każdy może zacząć">Dostępność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>
                        
                        <span className="stars">
                            <p title="Rozwój na wielu płaszczyznach">Uniwersalność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Cena niezbędnego wyposażenia">Cena:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Trudność rozpoczęcia">Trudność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                    </div>
                    <div className="img-img">
                        <img className="img-one" src={process.env.PUBLIC_URL + '/images/plywanie4.jpg'} alt="Pływanie" 
                        width="45%" height="auto" />
                        <img className="img-two" src={process.env.PUBLIC_URL + '/images/plywanie5.jpg'} alt="Pływanie" 
                        width="45%" height="auto" />
                    </div>
                    
                </div>
                <div className="sidebar">
                    <p className="ad">Reklama</p>
                    <img
                        src={process.env.PUBLIC_URL + '/images/pletwy4.jpg'}
                        alt="Reklama"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>


              {/* MMA */}
              <div className="container1">
                <div className="content">
                    <div className="text-container">
                        <p className="important" id="mma">Mma kilka ważnych informacji</p>
                        <p className="info"><p className="information-title-sport">Informacje o MMA: </p> 
                        Najbardziej uniwersalny system walki (Mixed Martial Arts) zawierający 
                        techniki z najróżniejszych styli walki z całego świata. Należy pamiętać, 
                        że próg wejścia jest dosyć wysoki, mnogość technik oraz trudność może na
                         początku zniechęcać, jednak odpowiedzialny instruktor z pewnością ułatwi 
                         początki. W sporcie tym niestety powszechne są kontuzje spowodowane 
                         dźwigniami, ciosami, kopnięciami. Do zalecanych sprzętów zaliczamy 
                         rękawice, które sprawią że trening będzie bardziej bezpieczny oraz 
                         wszelkie ochraniacze przy czym KONIECZNIE ten na zęby.
                        </p>
                        <span className="stars">
                            <p title="czy każdy może zacząć">Dostępność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>
                        
                        <span className="stars">
                            <p title="Rozwój na wielu płaszczyznach">Uniwersalność:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Cena niezbędnego wyposażenia">Cena:</p> 
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                            <i class="icon-star"></i>
                        </span>

                        <span className="stars">
                            <p title="Trudność rozpoczęcia">Trudność:</p> 
                            <i class="icon-star"></i>
                            
                        </span>

                    </div>
                    <div className="img-img">
                        <img className="img-one" src={process.env.PUBLIC_URL + '/images/mma3.jpg'} alt="Tenis" 
                        width="45%" height="auto" />
                        <img className="img-two" src={process.env.PUBLIC_URL + '/images/MMA5.jpg'} alt="Tenis" 
                        width="45%" height="auto" />
                    </div>
                    
                </div>
                <div className="sidebar">
                    <p className="ad">Reklama</p>
                    <img
                        src={process.env.PUBLIC_URL + '/images/ochraniacze4.jpg'}
                        alt="Reklama"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                
               
            </div>

            


            
            
              

              

            
            
            
            </div> 
        );
    }
}    