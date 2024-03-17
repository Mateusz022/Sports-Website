///// poprawiony w calculate.js


// Do testow
//  BMI
function obliczBMI(waga, wzrost) {
    const bmi = waga / (wzrost * wzrost);
    return bmi.toFixed(2);
}

// Spalone kcal
function obliczKalorie(czas, predkosc, waga) {
   
    const kalorieNaMinute = 0.0175 * predkosc + 0.095 * waga + 1.418;
    const spaloneKalorie = kalorieNaMinute * czas;
    return spaloneKalorie.toFixed(2);
}

// woda 30-35ml na kg
function obliczIloscWody(waga) {
   
    return (waga * 0.03).toFixed(2);
}

//tętno 220-wiek
function obliczMaksymalneTetno(wiek) {
    
    return 220 - wiek;
}
module.exports = {
    obliczBMI,
    obliczKalorie,
    obliczIloscWody,
    obliczMaksymalneTetno,
    
};
