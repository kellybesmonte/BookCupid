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
        </main>
    );
}

export default Landing;