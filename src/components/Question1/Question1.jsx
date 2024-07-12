import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import "./Question1.scss";
import martini from "../../assets/Images/Martini.png"

export const API_URL = import.meta.env.VITE_API_URL;

function Question1() {
    const navigate = useNavigate();


    const handleGenreSelection = (genres) => {
        navigate(`/quotes/${genres}`);
    };


    

    return (
        <main className="imgsQuestion--section">
            <div className="imgsQuestion--titleContainer">
                <h2 className="imgsQuestion--title">What's the vibe?</h2>
            </div>
            <section className="imgsQuestion--cardsSection">


                <div className="imgsQuestion--cardContainer" onClick={() => handleGenreSelection("Contemporary,Feminism")}>
                    <img className="martiniImg" src={martini} alt="illustration of martini with heart-shaped olives"/>
                </div>

                <div className="imgsQuestion--cardContainer" onClick={() => handleGenreSelection("Historical,Classics")}>
                    <img className="martiniImg" src={martini} alt="illustration of martini with heart-shaped olives"/>
                </div>

                <div className="imgsQuestion--cardContainer" onClick={() => handleGenreSelection("Horror,Thriller,Science-Fiction")}>
                    <img className="martiniImg" src={martini} alt="illustration of martini with heart-shaped olives"/>
                </div>

                <div className="imgsQuestion--cardContainer" onClick={() => handleGenreSelection("Poetry,Race")}>
                    <img className="martiniImg" src={martini} alt="illustration of martini with heart-shaped olives"/>  
                </div>

                <div className="imgsQuestion--cardContainer" onClick={() => handleGenreSelection("Romance,Family")}>
                    <img className="martiniImg" src={martini} alt="illustration of martini with heart-shaped olives"/>
                </div>

                <div className="imgsQuestion--cardContainer" onClick={() => handleGenreSelection("Young Adult")}>
                    <img className="martiniImg" src={martini} alt="illustration of martini with heart-shaped olives"/>
                </div>

                <div className="imgsQuestion--cardContainer" onClick={() => handleGenreSelection("Fantasy")}>
                    <img className="martiniImg" src={martini} alt="illustration of martini with heart-shaped olives"/>
                </div>

                <div className="imgsQuestion--cardContainer" onClick={() => handleGenreSelection("Queer")}>
                    <img className="martiniImg" src={martini} alt="illustration of martini with heart-shaped olives"/>
                </div>

                <div className="imgsQuestion--cardContainer" onClick={() => handleGenreSelection("Nature")}>
                    <img className="martiniImg" src={martini} alt="illustration of martini with heart-shaped olives"/>
                </div>
            </section>
        </main>



    );
}

export default Question1;