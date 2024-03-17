import React, { Component } from "react";
import "./Shop.css";


const auctionsData = [
  {
    title: "Rower",
    price: "1600zl",
    description: "Opis: Rower górski idealny dla początkujących kolaży jak i fanów górskich przejażdzek.",
    specification: "Specyfikacja: Rozmiar Koła: 27.5 cali  Waga: 16.6kg  Rozmiar ramy: 17 cali.",
    images: [
      '/images/rower1.jpg',
      '/images/rower2.jpg',
      '/images/rower3.jpg'
    ],
    currentImageIndex: 0,
    auctionDetailsVisible: false
  },
  {
    title: "Bieżnia",
    price: "2200zl",
    description: "Opis: Idealna do domowego treningu, trwała bieżnia z regulacją prędkości.",
    specification: "Specyfikacja: Regulacja prędkości : od 2km/h do 20km/h  Maksymalna waga użytkownika: 150kg",
    images: [
      '/images/bieg1.jpg',
      '/images/bieg2.jpg',
      '/images/bieg3.jpg'
    ],
    currentImageIndex: 0,
    auctionDetailsVisible: false
  },
  {
    title: "Hantle",
    price: "200zl",
    description: "Opis: Różne rodzaje i rozmiary hantli w atrakcyjnej cenie .",
    specification: "Specyfikacja: Najlżejsze hantle mają 1 kg, Najcięższe 10kg.",
    images: [
      '/images/hantle4.jpg',
      '/images/hantle5.jpg',
      '/images/hantle6.jpg'
    ],
    currentImageIndex: 0,
    auctionDetailsVisible: false
  },
  {
    title: "Rękawice Bokserskie",
    price: "100",
    description: "Opis: Trwale rękawice bokserskie wykonane z najwyższej jakości materiałów.",
    specification: "Specyfikacja: Wielkość: 12oZ  Kolor: Czarne  Przeznaczenie: Springi, Treningi",
    images: [
      '/images/rekawice1.jpg',
      '/images/rekawice2.jpg',
      '/images/rekawice3.jpg'
    ],
    currentImageIndex: 0,
    auctionDetailsVisible: false
  },
  {
    title: "Drążek",
    price: "400zl",
    description: "Opis: Drążek wielofunkcyjny z dodatkowymi uchwytami do pompek .",
    specification: "Specyfikacja: Maksymalna waga użytkownika : 200kg     Dodatkowe funkcje: Uchwyty do pompek.",
    images: [
      '/images/drazek1.jpg',
      '/images/drazek2.jpg',
      '/images/drazek3.jpg'
    ],
    currentImageIndex: 0,
    auctionDetailsVisible: false
  }
];

export default class Home extends Component {
  state = {
    auctionsData: auctionsData,
    
  };

  openAuctionDetails = (index) => {
    const updatedAuctionsData = this.state.auctionsData.map((auction, i) => {
      if (i === index) {
        return { ...auction, auctionDetailsVisible: true, descriptionVisible: true };
      } else {
        return { ...auction, auctionDetailsVisible: false };
      }
    });
    this.setState({ auctionsData: updatedAuctionsData });
  }

  closeAuctionDetailsModal = () => {
    const updatedAuctionsData = this.state.auctionsData.map(auction => {
      return { ...auction, auctionDetailsVisible: false };
    });
    this.setState({ auctionsData: updatedAuctionsData });
  }

  toggleDescription = (index) => {
    const updatedAuctionsData = this.state.auctionsData.map((auction, i) => {
      if (i === index) {
        return { ...auction, descriptionVisible: !auction.descriptionVisible, specificationVisible: false };
      } else {
        return auction;
      }
    });
    this.setState({ auctionsData: updatedAuctionsData });
  }

  toggleSpecification = (index) => {
    const updatedAuctionsData = this.state.auctionsData.map((auction, i) => {
      if (i === index) {
        return { ...auction, specificationVisible: !auction.specificationVisible, descriptionVisible: false };
      } else {
        return auction;
      }
    });
    this.setState({ auctionsData: updatedAuctionsData });
  }

  buyNow = () => {
    //alert("Dzieki za zakupy");
    this.closeAuctionDetailsModal();
    window.location.href = "/logging";
  }
  

  changeImage = (index, imageIndex) => {
    const updatedAuctionsData = this.state.auctionsData.map((auction, i) => {
      if (i === index) {
        return { ...auction, currentImageIndex: imageIndex };
      } else {
        return auction;
      }
    });
    this.setState({ auctionsData: updatedAuctionsData });
  }

  render() {
    return (
      <div className="main-container-shop">
        <h1 className="shop-title">Polecany Sprzęt Treningowy</h1>
        <div className="text-center">
          {this.state.auctionsData.map((auction, index) => (
            <div key={index}>
              <div className="auction-card">
                <div className="auction-img-container">
                  <img className="auction-img" src={process.env.PUBLIC_URL + auction.images[auction.currentImageIndex]} alt={auction.title} />
                  <button className="arrow left" onClick={() => this.changeImage(index, (auction.currentImageIndex - 1 + auction.images.length) % auction.images.length)}>&#9664;</button>
                  <button className="arrow right" onClick={() => this.changeImage(index, (auction.currentImageIndex + 1) % auction.images.length)}>&#9654;</button>
                </div>
                <div className="auction-info mt-3">
                  <h5 className="auction-card-title">{auction.title}</h5>
                  <p className="auction-card-text">Cena: {auction.price}</p>
                  <button className="btn-view" onClick={() => this.openAuctionDetails(index)}>Zobacz więcej</button>
                </div>
              </div>
              {auction.auctionDetailsVisible && (
                <div className="modal" tabIndex="-1" role="dialog" id={`auctionDetailsModal-${index}`}>
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Szczegóły Aukcji - {auction.title}</h5>
                      </div>
                      <div className="modal-body">
                        <div className="modal-details">
                          <button className="btn-description" onClick={() => this.toggleDescription(index)}>Opis</button>
                          <button className="btn-specification" onClick={() => this.toggleSpecification(index)}>Specyfikacja</button>
                        </div>
                        {auction.descriptionVisible && (
                          <div>
                            <p>{auction.description}</p>
                          </div>
                        )}
                        {auction.specificationVisible && (
                          <div>
                            <p>{auction.specification}</p>
                          </div>
                        )}
                      </div>
                      <div className="modal-footer">
                      <button type="button" className="btn-buy1" onClick={this.buyNow}>Kup Teraz</button>

                        <button type="button" className="btn-close" onClick={this.closeAuctionDetailsModal}>Zamknij</button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}  