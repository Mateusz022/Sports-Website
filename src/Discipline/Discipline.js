import React, { Component } from "react";
import "./Discipline.css";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer/Footer";
export default class Discipline extends Component {
    render() {
        return (
          <div>
            <div className="card-container">
              {/* Card 1 */}
              <div className="card">
                <div className="card-inner">
                  <div className="card-face">
                  <img src={process.env.PUBLIC_URL + '/images/bieganie.jpg'} alt="Bieganie" />
                    <h2>Bieganie</h2>
                  </div>
                  <div className="card-face card-back">
                    <h2>Szczegółowe informacje</h2>
                    <p className="dis">
                    Odkrycie siły, poprawa kondycji, uniwersalny tylko z 
                    pozoru prosty sport skrywający wiele odmian
                    </p>
                      <ul>
                        <button className="button-click" type="button"><li><a href="/information/#bieganie-info">Więcej</a></li></button>
                      </ul>
                  </div>
                </div>
              </div>
      
              {/* Card 2 */}
              <div className="card">
                <div className="card-inner">
                  <div className="card-face">
                  <img src={process.env.PUBLIC_URL + '/images/kalistenika.jpg'} alt="Kalistenika" />
                    <h2>Kalistenika</h2>
                  </div>
                  <div className="card-face card-back">
                    <h2>Szczegółowe informacje</h2>
                    <p className="dis">
                    Trening angażujący mięśnie w całym ciele bez sprzętu, prawdziwe 
                    wyzwanie dla układu wydolnościowego i mięśni
                      <ul>
                        <button className="button-click" type="button"><li><a href="/information/#kali">Więcej</a></li></button>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
      
              {/* Card 3 */}
              <div className="card">
                <div className="card-inner">
                  <div className="card-face">
                  <img src={process.env.PUBLIC_URL + '/images/trojboj.jpg'} alt="Trójbój" />
                    <h2>Trójbój</h2>
                    
                  </div>
                  <div className="card-face card-back">
                    <h2>Szczegółowe informacje</h2>
                    <p className="dis">
                    Wyzwanie siły zarówno fizycznej jak i mentalnej, Trzy dyscypliny 
                    jeden cel : pobić rekord i być najsilniejszym
                    </p>
                      <ul>
                        <button className="button-click" type="button"><li><a href="/information/#trojboj">Więcej</a></li></button>
                      </ul>
                  </div>
                </div>
              </div>
      
              {/* Card 4 - Tenis */}
              <div className="card">
                <div className="card-inner">
                  <div className="card-face">
                  <img src={process.env.PUBLIC_URL + '/images/tenis.jpg'} alt="Tenis" />
                    <h2>Tenis</h2>
                    
                  </div>
                  <div className="card-face card-back">
                    <h2>Szczegółowe informacje</h2>
                    <p className="dis">
                    Precyzja szybkość celność dokładność… Każdy ruch jest ważny.
                    Możesz liczyć tylko na siebie
                    </p>
                      <ul>
                        <button className="button-click" type="button"><li><a href="/information/#tenis">Więcej</a></li></button>
                      </ul>
                  </div>
                </div>
              </div>
      
              {/* Card 5 - Piłka Nożna */}
              <div className="card">
                <div className="card-inner">
                  <div className="card-face">
                  <img src={process.env.PUBLIC_URL + '/images/pilka.jpg'} alt="Piłka Nożna" />
                    <h2>Piłka Nożna</h2>
                   
                  </div>
                  <div className="card-face card-back">
                    <h2>Szczegółowe informacje</h2>
                    <p className="dis">
                    Jeden za wszystkich, wszyscy za jednego 11 osób 1 cel: 
                    strzelenie gola i wygranie meczu.
                    </p>
                      <ul>
                        <button className="button-click" type="button"><li><a href="/information/#noga">Więcej</a></li></button>
                      </ul>
                  </div>
                </div>
              </div>
      
              {/* Card 6 - Siatkówka */}
              <div className="card">
                <div className="card-inner">
                  <div className="card-face">
                  <img src={process.env.PUBLIC_URL + '/images/siatkowka.jpg'} alt="Siatkówka" />
                    <h2>Siatkówka</h2>
                   
                  </div>
                  <div className="card-face card-back">
                    <h2>Szczegółowe informacje</h2>
                    <p className="dis">
                    Współpraca, dynamika, precyzja nie ważne predyspozycje 
                    ważne serce do gry i asy serwisowe
                    </p>
                      <ul>
                        <button className="button-click" type="button"><li><a href="/information/#siata">Więcej</a></li></button>
                      </ul>
                  </div>
                </div>
              </div>
      
              {/* Card 7 - Strzelanie */}
              <div className="card">
                <div className="card-inner">
                  <div className="card-face">
                  <img src={process.env.PUBLIC_URL + '/images/strzelanie.jpg'} alt="Strzelanie" />
                    <h2>Strzelanie</h2>
                    
                  </div>
                  <div className="card-face card-back">
                    <h2>Szczegółowe informacje</h2>
                    <p className="dis">
                    Tarcza strzelecka w zasięgu wzroku, uda się trafić za każdym razem w 10 ?
                    </p>
                      <ul>
                        <button className="button-click" type="button"><li><a href="/information/#strzelanie">Więcej</a></li></button>
                      </ul>
                  </div>
                </div>
              </div>
      
              {/* Card 8 - Koszykówka */}
              <div className="card">
                <div className="card-inner">
                  <div className="card-face">
                  <img src={process.env.PUBLIC_URL + '/images/koszykowka.jpg'} alt="Koszykowka" />
                    <h2>Koszykówka</h2>
                    
                  </div>
                  <div className="card-face card-back">
                    <h2>Szczegółowe informacje</h2>
                    <p className="dis">
                    Szybkość, taktyka opanowanie, prawdziwe wyzwanie przy każdym rzucie
                    </p>
                      <ul>
                        <button className="button-click" type="button"><li><a href="/information/#koszykowka">Więcej</a></li></button>
                      </ul>
                  </div>
                </div>
              </div>
      
              {/* Card 9 - Boks */}
              <div className="card">
                <div className="card-inner">
                  <div className="card-face">
                  <img src={process.env.PUBLIC_URL + '/images/walka.jpg'} alt="Boks" />
                    <h2>Boks</h2>
                    
                  </div>
                  <div className="card-face card-back">
                    <h2>Szczegółowe informacje</h2>
                    <p className="dis">
                    Każdy cios przybliża do zwycięstwa jednak to chłodna 
                    głowa da zwycięstwo
                    </p>
                      <ul>
                        <button className="button-click" type="button"><li><a href="/information/#boks">Więcej</a></li></button>
                      </ul>
                  </div>
                </div>
              </div>
      
              {/* Card 10 - Kolarstwo */}
              <div className="card">
                <div className="card-inner">
                  <div className="card-face">
                  <img src={process.env.PUBLIC_URL + '/images/kolarstwo.jpg'} alt="Kolarstwo" />
                    <h2>Kolarstwo</h2>
                    
                  </div>
                  <div className="card-face card-back">
                    <h2>Szczegółowe informacje</h2>
                    <p className="dis">
                    Prawdziwe wyzwanie na dwóch kółkach oraz każdym ostrym zakręcie 
                    ze wspaniałymi widokami w tle
                    </p>
                      <ul>
                        <button className="button-click" type="button"><li><a href="/information/#kolarstwo">Więcej</a></li></button>
                      </ul>
                  </div>
                </div>
              </div>
                {/* Card 11 - Pływanie */}
              <div className="card">
                <div className="card-inner">
                  <div className="card-face">
                  <img src={process.env.PUBLIC_URL + '/images/plywanie.jpg'} alt="Pływanie" />
                    <h2>Pływanie</h2>
                    
                  </div>
                  <div className="card-face card-back">
                    <h2>Szczegółowe informacje</h2>
                    <p className="dis">
                    W wodzie nie ma miejsca na brak kondycji, są tylko nowe 
                    rekordy do pobicia i nowe style pływania do nauczenia
                    </p>
                      <ul>
                        <button className="button-click" type="button"><li><a href="/information/#plywanie">Więcej</a></li></button>
                      </ul>
                  </div>
                </div>
              </div>
                {/* Card 12 - MMA */}
              <div className="card">
                <div className="card-inner">
                  <div className="card-face">
                  <img src={process.env.PUBLIC_URL + '/images/mma.jpg'} alt="MMA" />
                    <h2>MMA</h2>
                    
                  </div>
                  <div className="card-face card-back">
                    <h2>Szczegółowe informacje</h2>
                    <p className="dis">
                    Najbardziej uniwersalna sztuka walki full contact łącząca techniki 
                    z różnych styli 
                    </p>
                      <ul>
                        <button className="button-click" type="button"><li><a href="/information/#mma">Więcej</a></li></button>
                      </ul>
                  </div>
                </div>
              </div>
              
            </div>

            <Footer></Footer>
            
          </div>
          
        );
      }
    }      