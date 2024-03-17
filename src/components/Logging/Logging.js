import React, { Component } from "react";
import "./Logging.css";

export default class Logging extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            isLogin: true,
            isLoggedIn: false,
            showMessage: false,
            emailError: '',
            passwordError: ''
        };
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            emailError: '',
            passwordError: ''
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        if (this.validateForm()) {
            this.setState({
                isLoggedIn: true,
                showMessage: true
            });
            setTimeout(() => {
                this.setState({
                    email: '',
                    password: '',
                    confirmPassword: '',
                    firstName: '',
                    lastName: '',
                    showMessage: false
                });
            }, 3000);
        } else {
            alert("Proszę poprawić błędy w formularzu!");
        }
    }

    handleClearData = () => {
        this.setState({
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            showMessage: false,
            emailError: '',
            passwordError: ''
        });
    }

    showAlert = () => {
        alert("Dziękujemy za zakupy! Przedmiot został zamówiony");
    }

    Teleport = () => {
        window.location.href = '/shop';
    }

    TwoThings = () => {
        if (this.validateForm()) {
            this.handleClearData();
            this.showAlert();
            this.Teleport();
        } else {
            alert("Proszę wypełnić wszystkie pola!");
        }
    }

    validateForm = () => {
        const { email, password, confirmPassword, firstName, lastName, isLogin } = this.state;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isValid = true;

        if (isLogin) {
            if (!email || !emailRegex.test(email)) {
                this.setState({ emailError: 'Niepoprawny adres e-mail' });
                isValid = false;
            }

            if (!password) {
                this.setState({ passwordError: 'Niepoprawne hasło' });
                isValid = false;
            }
        } else {
            if (!email || !emailRegex.test(email)) {
                this.setState({ emailError: 'Niepoprawny adres e-mail' });
                isValid = false;
            }

            if (!password) {
                this.setState({ passwordError: 'Niepoprawne hasło' });
                isValid = false;
            }

            if (password !== confirmPassword) {
                this.setState({ passwordError: 'Hasła nie są identyczne' });
                isValid = false;
            }

            if (!firstName) {
                this.setState({ firstNameError: 'Pole wymagane' });
                isValid = false;
            }

            if (!lastName) {
                this.setState({ lastNameError: 'Pole wymagane' });
                isValid = false;
            }
        }

        return isValid;
    }

    handleRegisterClick = () => {
        this.handleClearData();
        this.setState({
            isLogin: true
        });
    }

    handleToggleMode = () => {
        this.handleClearData();
        this.setState(prevState => ({
            isLogin: !prevState.isLogin
        }));
    }

    render() {
        const { email, password, confirmPassword, firstName, lastName, isLogin, showMessage, emailError, passwordError } = this.state;

        return (
            <div className={`logging-all-container ${isLogin ? 'login-mode' : 'register-mode'}`}>
                <h2 className="logging-heading">{isLogin ? 'Logowanie' : 'Rejestracja'}</h2>
                {showMessage && <p>Przedmiot został kupiony.</p>}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-logging-group">
                        <label>Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={email} 
                            onChange={this.handleInputChange} 
                            required 
                        />
                        {emailError && <span className="error email-error">{emailError}</span>}
                    </div>
                    <div className="form-logging-group">
                        <label>Hasło:</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={password} 
                            onChange={this.handleInputChange} 
                            required 
                        />
                        {passwordError && <span className="error password-error">{passwordError}</span>}
                    </div>
                    {!isLogin && (
                        <>
                            <div className="form-logging-group">
                                <label>Potwierdź hasło:</label>
                                <input 
                                    type="password" 
                                    name="confirmPassword" 
                                    value={confirmPassword} 
                                    onChange={this.handleInputChange} 
                                    required 
                                />
                            </div>
                            <div className="form-logging-group">
                                <label>Imię:</label>
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    value={firstName} 
                                    onChange={this.handleInputChange} 
                                    required 
                                />
                            </div>
                            <div className="form-logging-group">
                                <label>Nazwisko:</label>
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    value={lastName} 
                                    onChange={this.handleInputChange} 
                                    required 
                                />
                            </div>
                        </>
                    )}
                    <button className="button-logging" onClick={this.TwoThings} >
                        {isLogin ? 'Zaloguj się' : 'Zarejestruj się'}
                    </button>
                </form>
                <p className="p-logging-options">
                    {isLogin ? 'Nie masz jeszcze konta? ' : 'Masz już konto? '}
                    <span onClick={this.handleToggleMode}>
                        {isLogin ? 'Zarejestruj się' : 'Zaloguj się'}
                    </span>
                </p>
                
            </div>
        );
    }
}
