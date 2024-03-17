import React, { Component } from "react";
import "./Table.css";

export default class bmi extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Zakres BMI</th>
                            <th>Kategoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{"<"} 16.0</td>
                            <td className="underweight">Wygłodzenie</td>
                        </tr>
                        <tr>
                            <td>16.0 - 16.9</td>
                            <td className="underweight">Niedowaga (wyraźna)</td>
                        </tr>
                        <tr>
                            <td>17.0 - 18.4</td>
                            <td className="underweight">Niedowaga (lekka)</td>
                        </tr>
                        <tr>
                            <td>18.5 - 24.9</td>
                            <td className="normal">BMI poprawne</td>
                        </tr>
                        <tr>
                            <td>25.0 - 29.9</td>
                            <td className="overweight">Nadwaga</td>
                        </tr>
                        <tr>
                            <td>30.0 - 34.9</td>
                            <td className="obese">Otyłość (klasa I)</td>
                        </tr>
                        <tr>
                            <td>35.0 - 39.9</td>
                            <td className="obese">Otyłość (klasa II)</td>
                        </tr>
                        <tr>
                            <td>{"\u2265"} 40.0</td>
                            <td className="obese">Otyłość (klasa III)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
