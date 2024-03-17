import React, { Component } from "react";
import "./Calculate.css";
import Table from "../Table/Table";


export default class Calculate extends Component {
    obliczBMI = (waga, wzrost) => {
        const bmi = waga / (wzrost * wzrost);
        return bmi.toFixed(2);
    }

    obliczSpaloneKalorie = (waga, wzrost, wiek, plec, czas) => {
        let bmr;
        if (plec === 'Mężczyzna') {
            bmr = 66 + (13.7 * waga) + (5 * wzrost) - (6.8 * wiek);
        } else {
            bmr = 655 + (9.6 * waga) + (1.8 * wzrost) - (4.7 * wiek);
        }

        const spaloneKalorie = bmr * czas * 4 / 1440; // czas w minutach, dlatego dzielimy przez 1440
        return spaloneKalorie.toFixed(2);
    }

    obliczIloscWody = (waga) => {
        return (waga * 0.03).toFixed(2);
    }

    obliczMaksymalneTetno = (wiek) => {
        return 220 - wiek;
    }
    Teleport = () => {
        window.location.href = "/";
    }
    

    render() {
        return (
            <div className="All-calculations">
                <div className="Bmi-calculations">
                    <h2 title="Body-Mass-Index">Oblicz BMI</h2>
                    
                    <form id="bmiForm" onSubmit={(e) => {
                        e.preventDefault();
                        const waga = parseFloat(document.getElementById('waga').value);
                        const wzrost = parseFloat(document.getElementById('wzrost').value);
                        const bmi = this.obliczBMI(waga, wzrost);
                        document.getElementById('wynikBMI').innerText = `BMI: ${bmi}`;
                    }}>
                        <label htmlFor="waga">Waga (kg):</label>
                        <input type="number" id="waga" name="waga" step="1" />
                        <label htmlFor="wzrost">Wzrost (m):</label>
                        <input type="number" id="wzrost" name="wzrost" step="0.1" />
                        <button class="calculate-button"type="submit">Oblicz BMI</button>
                        <Table></Table>

                    </form>
                    <div id="wynikBMI">
                       
                    </div>
                </div>



                
                <div className="calorie-calculations">
                    <h2>Oblicz kalorie spalone podczas ćwiczeń</h2>
                        <form id="kalorieForm" onSubmit={(e) => {
                            e.preventDefault();
                            const waga = parseFloat(document.getElementById('wagaKalorie').value);
                            const wzrost = parseFloat(document.getElementById('wzrostKalorie').value);
                            const wiek = parseFloat(document.getElementById('wiek').value);
                            const plec = document.getElementById('plec').value;
                            const czas = parseFloat(document.getElementById('czas').value);
                            const spaloneKalorie = this.obliczSpaloneKalorie(waga, wzrost, wiek, plec, czas);
                            document.getElementById('wynikKalorie').innerText = `Spalone kalorie: ${spaloneKalorie} kcal`;
                        }}>
                            <label htmlFor="wagaKalorie">Waga (kg):</label>
                            <input type="number" id="wagaKalorie" name="waga" step="1" /><br/>

                            <label htmlFor="wzrostKalorie">Wzrost (cm):</label>
                            <input type="number" id="wzrostKalorie" name="wzrost" step="1" /><br/>

                            <label htmlFor="wiek">Wiek:</label>
                            <input type="number" id="wiek" name="wiek" step="1" /><br/>

                            <label htmlFor="plec">Płeć:</label>
                            <select id="plec" className="block">
                                <option value="Mężczyzna">Mężczyzna</option>
                                <option value="Kobieta">Kobieta</option>
                            </select><br/>

                            <label  htmlFor="czas">Czas ćwiczeń (min):</label>
                            <input type="number" id="czas" name="czas" step="1" className="block" /><br/>

                            <button className="calculate-button" type="submit">Oblicz ilość spalonych kcal</button>
                        </form>
                            <div id="wynikKalorie"></div>
                </div>





                <div className="max-heart-rate-calculations">
                    <h2>Oblicz maksymalne tętno </h2>
                    <form id="heartRateForm" onSubmit={(e) => {
                        e.preventDefault();
                        const wiek = parseFloat(document.getElementById('age').value);
                        const tetno = this.obliczMaksymalneTetno(wiek);
                        document.getElementById('wyniktetna').innerText = `Maksymalne tętno: ${tetno}`;
                    }}>
                        <label htmlFor="age">Wiek:</label>
                        <input type="number" id="age" name="age" step="1" />
                        <button class="calculate-button" type="submit">Oblicz maksymalne tętno</button>
                    </form>
                    <div id="wyniktetna"></div>
                </div>




                <div className="water-calculations">
                    <h2>Oblicz ilość Wody</h2>
                    <form id="wodaForm" onSubmit={(e) => {
                        e.preventDefault();
                        const wagaWoda = parseFloat(document.getElementById('wagaWoda').value);
                        const iloscWody = this.obliczIloscWody(wagaWoda);
                        document.getElementById('wynikWoda').innerText = `Zalecana ilość wody to minimum: ${iloscWody} litrów`;
                    }}>
                        <label htmlFor="wagaWoda">Waga (kg):</label>
                        <input type="number" id="wagaWoda" name="waga" step="1" />
                        <button class="calculate-button" type="submit">Oblicz zalecaną ilość wody</button>
                        <div id="wynikWoda"></div>
                        
                        
                      
                    </form>

                    
                    <div class="last-button">
                        <button className="comeback-home" onClick={this.Teleport}>Powrót na stronę główną</button>
                        </div>
                    
                    
                    
                </div>
                
                
            </div>
            
        );
    }
}
