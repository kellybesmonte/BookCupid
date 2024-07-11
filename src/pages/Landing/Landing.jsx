import "./Landing.scss";
import logo from "../../assets/Logo/Logo.svg"
import logoText from "../../assets/Logo/BookCupid.svg"

function Landing() {

    

    return (

        <main className="landingPage--section">
            <div className="langingPage--logosContainer">
                <img className="langingPage--mainLogo" src={logo} />
                <img className="langingPage--subLogo" src={logoText} />
            </div>
            <div className="landingPage--buttonsContainer">
                <div className="landingPage--questionButton">
                    <p className="landingPage--buttonsText">Ready to find your next match?</p>
                </div>
                <button className="landingPage--startButton">
                    <p className="landingPage--buttonsText">Get Started</p>
                </button>
            </div>
        </main>
    );
}

export default Landing;