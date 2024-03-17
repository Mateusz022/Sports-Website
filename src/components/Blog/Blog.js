import { Component } from "react";
import "./Blog.css";
export default class Blog extends Component {
    render () {
        return (
            <div class="blog-all">
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
                
                <header class="blog-header">
                    <h1 class="blog-h1">Mój Blog</h1>
                    <p class="blog-description">Witaj na moim blogu, gdzie powiem krótko o swoich planach i zainteresowaniach!</p>
                </header>

                <nav class="nav-blog">
                    <ul class="ul-blog">
                        <li class="blog-li"><a href="#wpis1-blog">Wpis 1</a></li>
                        <li class="blog-li"><a href="#wpis2-blog">Wpis 2</a></li>
                        <li class="blog-li"><a href="#wpis3-blog">Wpis 3</a></li>
                        <li class="blog-li"><a href="#wpis4-blog">Wpis 4</a></li>
                    </ul>
                </nav>

                <main class="main-blog">
                    <article id="wpis1-blog">
                        <h2 class="h2-blog">Pierwszy wpis ~ <p class="blog-subtitle">Praca jako progamista ?</p></h2>
                        <img class="img-blog" src={process.env.PUBLIC_URL + '/images/praca1.png'} alt="Bieganie" />
                        <div class="Description-wpis">
                            Chciałbym w przyszlości pracować jaki programista, a najbardziej
                            jako frontend developer. Podoba mi się robienie stron internetowych
                            oraz staram się reularnie rozwijać szczególnie w takich technologiach 
                            jak: HTML, CSS, REACT, BOOTSTRAP, JAVASCRIPT. 
                        </div>

                        <div class="comentary-blog">
                            <p class="comentary-title">Komentarze:</p>

                            <div class="first-comentary">
                                <img class="img-avatar" src={process.env.PUBLIC_URL + '/images/avatar1.png'} alt="Bieganie" />
                                <p class="blog">Osobiscie zaczynalem od C#, lecz projektowanie stron zdecydowanie jest przyjemniejsze. Życzę powodzenia na drodze Juniora !</p>
                            </div>
                            
                            <div class="second-comentary">
                                <img class="img-avatar" src={process.env.PUBLIC_URL + '/images/avatar2.jpg'} alt="Bieganie" />
                                <p class="blog"> Ja z kolei nie przepadam za frontendem, zdeycowanie wolę backend.</p>
                            </div>

                            
                        </div>
                        

                    </article>
                    <hr class="blog-hr"></hr>
                    <article id="wpis2-blog">
                        
                    <h2 class="h2-blog">Drugi wpis ~ <p class="blog-subtitle">Moje zainteresowania: Urbex</p></h2>
                        <img class="img-blog" src={process.env.PUBLIC_URL + '/images/urbex.jpg'} alt="Bieganie" />
                        <div class="Description-wpis">
                            O ile tradycyjna historia, uczona w szkole mnie nie interesowała, tak
                            mroczna historia opuszczonych, ciekawych miejsc już jak najbardziej.
                            Sledzę kanały na youtube odnośnie wypraw w ciekawe miejsca, jak i sam 
                            byłem na kilku. Przed rozpoczęciem wyprawy urbexowej, koniecznie dla 
                            wczucia się w miejsce do którego się zmierza, warto o nim poczytać i 
                            zagłebić się w historię, która czasem zostawia więcej pytań niż odpowiedzi
                        </div>

                        <div class="comentary-blog">
                            <p class="comentary-title">Komentarze:</p>

                            <div class="first-comentary">
                                <img class="img-avatar" src={process.env.PUBLIC_URL + '/images/avatar3.png'} alt="Bieganie" />
                                <p class="blog">Nigdy nie byłem osobiście na Urbexie, jednak sporo o tym czytałem i zdecydowanie to ciekawe hobby.</p>
                            </div>
                            
                            <div class="second-comentary">
                                <img class="img-avatar" src={process.env.PUBLIC_URL + '/images/avatar4.jpg'} alt="Bieganie" />
                                <p class="blog">Zawsze obawiałam się chodzenia samotnie po opuszczonych miejscach, może to być niebezpieczne.</p>
                            </div>

                            
                        </div>
                    </article>
                    <hr class="blog-hr"></hr>

                    <article id="wpis3-blog">
                    <h2 class="h2-blog">Trzeci wpis ~ <p class="blog-subtitle">Moje zainteresowania: Broń Biała</p></h2>
                        <img class="img-blog" src={process.env.PUBLIC_URL + '/images/sztylety.jpg'} alt="Bieganie" />
                        <div class="Description-wpis">
                            Interesuję się historią związaną z broniami dalekiego wschodu. Bronie używane
                            w feudalnej Japoni takie jak Sztylety Sai (zdjęcie), oraz inne jak kamy
                            nunchaku, katany i wiele innych zawsze wzbudzały moją ciekawość. W wolnych 
                            chwilach czytam o histori związanej z brońmi a także oglądam filmy o podobnej tematyce.
                        </div>

                        <div class="comentary-blog">
                            <p class="comentary-title">Komentarze:</p>

                            <div class="first-comentary">
                                <img class="img-avatar" src={process.env.PUBLIC_URL + '/images/avatar5.png'} alt="Bieganie" />
                                <p class="blog">Ja z kolei jestem fanem broni palnej, dużo strzelam i chodzę na strzelnicę, mega sprawa.</p>
                            </div>
                            
                            <div class="second-comentary">
                                <img class="img-avatar" src={process.env.PUBLIC_URL + '/images/avatar6.jpg'} alt="Bieganie" />
                                <p class="blog">Posiadam skromną kolekcję broni, jednak takie sztylety widzę pierwszy raz w życiu. Wyglądają na bardzo ostre.</p>
                            </div>

                            
                        </div>
                    </article>

                    <hr class="blog-hr"></hr>
                    <article id="wpis4-blog">
                    <h2 class="h2-blog">Czwarty wpis ~ <p class="blog-subtitle">Elektronika</p></h2>
                        <img class="img-blog" src={process.env.PUBLIC_URL + '/images/konsola.jpg'} alt="Bieganie" />
                        <div class="Description-wpis">
                            Od dziecka jestem fanem konsol, gier i wszystkiego co związane z rozrywką elektroniczną.
                            Swoją przygodę zaczynałem z konsolą playstation 1 mimo że jest ona starsza odemnie.
                            Z przyjemnością obserwuje dynamiczny rozwój branży gier, a także w wolnej chwili 
                            sam od czasu do czasu gram zarówno w klasyki jak i nowsze produkcje.
                        </div>

                        <div class="comentary-blog">
                            <p class="comentary-title">Komentarze:</p>

                            <div class="first-comentary">
                                <img class="img-avatar" src={process.env.PUBLIC_URL + '/images/avatar8.png'} alt="Bieganie" />
                                <p class="blog">Jestem młodym graczem, zacząłem od 7 generacji konsol jednak po czasie nadrabiam klasyki z czystej ciekawości.</p>
                            </div>
                            
                            <div class="second-comentary">
                                <img class="img-avatar" src={process.env.PUBLIC_URL + '/images/avatar7.jpg'} alt="Bieganie" />
                                <p class="blog">Nigdy nie miałam do czynienia z konsolami Sony, zawsze dotąd wybierałam Xboxa od Microsoft. Może się kiedyś przekonam...</p>
                            </div>

                            
                        </div>
                    </article>
                    <hr class="blog-end-hr"></hr>
                    <div class="additional-feature-blog">
                    <div class="tile-blog" id="github"><a href="https://github.com"> <i class="fab fa-github"></i></a></div>

                        <div class="tile-blog" id="gmail"><a href="https://gmail.com"><i class="far fa-envelope"></i></a></div>
                        <div class="tile-blog" id="facebook"><a href="https://facebook.com"><i class="fab fa-facebook"></i></a></div>
                        <div class="tile-blog" id="linkedin"><a href="https://linkedin.com"><i class="fab fa-linkedin"></i></a></div>
                    </div>
                </main>

                

                

            
                
                
















            </div>
        );
    }
}