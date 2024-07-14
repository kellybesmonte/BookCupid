import { Link } from "react-router-dom";
import "./Landing.scss";
import logo from "../../assets/Logo/Logo.svg"
import logoText from "../../assets/Logo/BookCupid.svg"

function Landing(props) {

    

    return (

        <main className="landingPage--section">
            <div className="landingPage--desktopFlex">
                <div className="langingPage--logosContainer">
                    <img className="langingPage--mainLogo" src={logo} alt="book cupid's logo with pink book and red bow and arrow"/>
                    <img className="langingPage--subLogo" src={logoText} alt="illustrative font that reads book cupid"/>
                </div>
                <div className="landingPage--buttonsContainer">
                    <div className="landingPage--questionButton">
                        <p className="landingPage--buttonsText">Ready to find your next match?</p>
                    </div>
                    <Link to="/Question1" onClick={props.handleButtonClick}>
                        <button className="landingPage--startButton">
                            <p className="landingPage--buttonsText">Get Started</p>
                        </button>
                    </Link>
            </div>
            </div>
        </main>
    );
}

export default Landing;