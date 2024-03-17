import { Component } from "react";
import "./Button.css";

export default class Button extends Component {
    
    componentDidMount() {
        
        window.onscroll = function () {
            toggleScrollToTopButton();
        };

        function toggleScrollToTopButton() {
            var scrollToTopBtn = document.getElementById("scrollToTopBtn");

            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        }
    }

    scrollToTop() {
        
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div className="button-scroll-up">
                <button id="scrollToTopBtn" onClick={this.scrollToTop}>Przewiń na górę</button>
            </div>
        );
    }
}