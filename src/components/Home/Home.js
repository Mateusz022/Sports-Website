import { Component } from "react";
import "./Home.css";
import Footer from "../Footer/Footer";

export default class Home extends Component {
    render () {
        return (
            <div className="container"> 
                <header class="main-header">
                    <div class="conteiner conteiner-flex text-light">
                        <div>
                            <h1 >Witam na stronie głównej!</h1>
                            <h2 class="subtitle">Strona poświęcona aktywności fizycznej oraz ciakawostkom z nią związanymi</h2>
                        </div>
                    </div>
                </header>
                <div class="conteiner conteiner-flex">
                    <main>
                        {/* Artykuł 1 */}
                        <article class="featured-article">
                        <img src={process.env.PUBLIC_URL + '/images/home2.jpg'} alt="MMA" width="1000" height="300"/>
                            <h2>Motywacja... rzecz niezbędna dla konsekwencji ?</h2>
                            <p class="article-content">
                            Często słyszymy, że motywacja jest niezbędna do podjęcia działań oraz zmiany życia 
                            na lepsze. Daje ona nam „kopa” do podjęcia próby, aby osiągnąć określone przez 
                            siebie cele. Jednak sama motywacja do osiągnięcia długotrwałych sukcesów czy 
                            to zawodowych, sylwetkowych czy szeroko pojętego samorozwoju, może nie wystarczyć…

                            </p>
                            <p class="read-more">
                                <ul>
                                    <button className="button-click" type="button"><li><a href="/articles/">Więcej</a></li></button>
                                </ul>
                            </p>
                        </article>

                        {/* Artykuł 2 */}
                        <article class="article-recent">
                            <div class="article-recent-secondary">
                                <img class="article-image" src="https://source.unsplash.com/1000x300/?medicine" width="1000" height="300" alt=""/>
                            </div>
                            <div class="article-recent-main">
                                <h2>Suplementy, jakie brać a jakich unikać</h2>
                                
                                <p class="article-content">
                                Współcześnie suplementy zyskują na popularności, zdobywając zarówno swoich 
                                zwolenników jak i przeciwników. Przeciwnicy obawiają się ich stosować,
                                 bojąc się o skutki uboczne, z kolei zwolennicy stosują je regularnie i 
                                 śmiało je rekomendują. Zatem kto ma rację ? Gdzie leży prawda ? 
                                 Wybór nie jest biało - czarny i jak w większości przypadków odpowiedź brzmi: Zależy…
                                </p>
                                <p class="read-more">
                                <ul>
                                    <button className="button-click" type="button"><li><a href="/articles/#suplementy">Więcej</a></li></button>
                                </ul>
                                </p>
                            </div>
                        </article>

                        {/* Artykuł 3 */}
                        <article class="article-recent">
                            <div class="article-recent-secondary">
                                <img class="article-image" src="https://source.unsplash.com/1000x300/?fruits" width="1000" height="300" alt=""/>
                            </div>
                            <div class="article-recent-main">
                                <h2>Zdrowe odżywianie czy aby na pewno takie trudne ?</h2>
                                
                                <p class="article-content">
                                Problem otyłości, związanej z brakiem ruchu oraz nieodpowiednią 
                                dietą stał się w dzisiejszych czasach poważną chorobą i zagrożeniem. 
                                Łatwa dostępność wysoko przetworzonych produktów, bogatych w 
                                tłuszcze, polepszacze smaku i wszechobecną chemię, utrudnia nam 
                                zdrowe odżywianie. Jednak czy aby na pewno, aby zdrowo jeść,
                                 musimy całkowicie odstawić przetworzoną żywność na rzecz samych 
                                 warzyw i owoców ? Absolutnie nie !
                                </p>
                                <p class="read-more">
                                <ul>
                                    <button className="button-click" type="button"><li><a href="/articles/#odzywianie">Więcej</a></li></button>
                                </ul>
                                </p>
                            </div>
                        </article>

                        {/* Artykuł 4 */}
                        <article class="article-recent">
                            <div class="article-recent-secondary">
                            <img src={process.env.PUBLIC_URL + '/images/topsport.jpg'} alt="Bieganie" height="350" width="400" />
                            </div>
                            <div class="article-recent-main">
                                <h2>Najwybitniesi sportowcy oraz ich osiągnięcia</h2>
                            
                                <p class="article-content">
                                Na świecie mamy wielu wybitnych sportowców, natomiast udzielenie odpowiedzi
                                 na pytanie, który jest najlepszy, jest praktycznie niemożliwe, bo co mamy 
                                 brać pod uwagę aby to stwierdzić? Czy osiągnięcia sportowe ? Ilość pucharów ? 
                                 Sympatię kibiców ? Popularność na całym świecie ? A może wszystko naraz ? 
                                 Każdy z wymienionych aspektów wydaje się być słuszny…
                                </p>
                                <p class="read-more">
                                <ul>
                                    <button className="button-click" type="button"><li><a href="/articles/#sportowcy">Więcej</a></li></button>
                                </ul>
                                </p>
                            </div>
                        </article>
                    </main>
                    {/* Sekcja po prawej*/}
                    <aside class="sidebar">
                        <div class="right-picture">
                        <p class="sidebarright-title"><a href="/blog/">My blog</a></p>

                        <img class="right-picture-img" src={process.env.PUBLIC_URL + '/images/html3.png'} alt="Bieganie" height="300" width="400" />
                            
                            <p class="right-picture-body">Osobisty blog, zajrzyj by poznać mnie bardziej 😊</p>
                        </div> 
                        <div class="right-picture-recent-post">
                            <img class="article-image" src="https://source.unsplash.com/1000x300/?css3" 
                            width="400" height="300" alt=""/>
                            <h2>Informacje o sportach</h2>
                        </div>
                        <div class="right-picture">
                            <nav class="choose-nav">
                                <ul class="right-picture-menu">
                                    
                                    <li><a href="/information/">Informacje</a></li>
                                    <li><a href="/discipline/">Dyscypliny</a></li>
                                    
                                </ul>
                            </nav>
                        </div>
                        <div class="right-picture-recent-post">
                        <img src={process.env.PUBLIC_URL + '/images/sztanga2.jpg'} alt="Bieganie" height="300" width="400" />
                            <h2>Nie wiesz jaki wybrać sprzęt treningowy ? Sprawdź już teraz dostępne produkty!</h2>
                            <ul>
                                <button className="shop-go" type="button"><li><a href="/shop/">Sklep</a></li></button>
                            </ul>
                        </div>
                        <div class="basic-calculations">
                            <p class="basic-calculations-p">Chciałbyś obliczyć podstawowe aspekty związane z treningiem lub poznać swoje BMI ? Kliknij poniżej</p>
                            <button class="easy-calculations-teleport"><a href="/calculate">Oblicz</a></button>

                        </div>
                    </aside>
                </div>
                

                <Footer></Footer>

        </div>

        );
    }
}