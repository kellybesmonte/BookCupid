import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import "./Question1.scss";
import martini from "../../assets/Images/Martini.png"
import letter from "../../assets/Images/Letter.svg"
import match from "../../assets/Images/Match.svg"
import candyHearts from "../../assets/Images/CandyHearts-V2.svg"
import flowers from "../../assets/Images/Flowers.svg"
import latte from "../../assets/Images/Latte.svg"
import strawberry from "../../assets/Images/Strawberry.svg"
import ring from "../../assets/Images/Ring.svg"
import teabag from "../../assets/Images/Teabag.svg"

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
                    <img className="martiniImg" src={martini} alt="llustration of martini with heart-shaped olives"/>
                </div>

                <div className="imgsQuestion--cardContainer" onClick={() => handleGenreSelection("Historical Fiction,Classics")}>
                    <img className="martiniImg" src={letter} alt="illustration of pink envelope with letter and flower"/>
                </div>

                <div className="imgsQuestion--cardContainer" onClick={() => handleGenreSelection("Horror,Thriller,Science-Fiction")}>
                    <img className="martiniImg" src={match} alt="illustration of a match caught in pink flame"/>
                </div>

                <div className="imgsQuestion--cardContainer" onClick={() => handleGenreSelection("Poetry,Race")}>
                    <img className="martiniImg" src={candyHearts} alt="illustration of 2 pink candy hearts"/>  
                </div>

                <div className="imgsQuestion--cardContainer" onClick={() => handleGenreSelection("Romance,Family")}>
                    <img className="martiniImg" src={flowers} alt="illustration of pink flowers"/>
                </div>

                <div className="imgsQuestion--cardContainer" onClick={() => handleGenreSelection("Young Adult")}>
                    <img className="martiniImg" src={latte} alt="illustration of a heart shaped latte art"/>
                </div>

                <div className="imgsQuestion--cardContainer" onClick={() => handleGenreSelection("Fantasy")}>
                    <img className="martiniImg" src={strawberry} alt="illustration of a strawberry"/>
                </div>

                <div className="imgsQuestion--cardContainer" onClick={() => handleGenreSelection("Queer")}>
                    <img className="martiniImg" src={ring} alt="illustration of pink ring with red gemstone"/>
                </div>

                <div className="imgsQuestion--cardContainer" onClick={() => handleGenreSelection("Nature,Canadian Literture,Indigenous")}>
                    <img className="martiniImg" src={teabag} alt="illustration of tea bag with hearts"/>
                </div>
            </section>
        </main>



    );
}

export default Question1;