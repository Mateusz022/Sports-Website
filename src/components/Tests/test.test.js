const {
  obliczBMI,
  obliczKalorie,
  
  obliczIloscWody,
  obliczMaksymalneTetno,
  
} = require('./sport');

// Testy dla funkcji obliczBMI
describe('Funkcja obliczBMI', () => {
  it('Powinna poprawnie obliczać BMI dla podanych wartości', () => {
     
      const waga = 70;
      const wzrost = 1.75;
      
      const wynik = obliczBMI(waga, wzrost);
      
      expect(wynik).toBe("22.86");
  });
});

// Testy dla funkcji obliczKalorie
describe('Funkcja obliczKalorie', () => {
  it('Powinna poprawnie obliczać spalone kalorie dla podanych wartości', () => {
      
      const czas = 30;
      const predkosc = 10;
      const waga = 70;
      
      const wynik = obliczKalorie(czas, predkosc, waga);
      
      expect(wynik).toBe("247.29");
  });
});




// Testy dla funkcji obliczIloscWody
describe('Funkcja obliczIloscWody', () => {
  it('Powinna poprawnie obliczać ilość wypitej wody dla podanej wagi', () => {
     
      const waga = 70; 
      
      const wynik = obliczIloscWody(waga);
      
      expect(wynik).toBe("2.10");
  });
});

// Testy dla funkcji obliczMaksymalneTetno
describe('Funkcja obliczMaksymalneTetno', () => {
  it('Powinna poprawnie obliczać maksymalne tętno dla podanego wieku', () => {
     
      const wiek = 30;
     
      const wynik = obliczMaksymalneTetno(wiek);
      
      expect(wynik).toBe(190);
  });
});

