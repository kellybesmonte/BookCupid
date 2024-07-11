import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import "./Question1.scss";

export const API_URL = import.meta.env.VITE_API_URL;

function Question1() {
    const navigate = useNavigate();
    

    return (
        <main className="imgsQuestion--section">
            <div className="imgsQuestion--titleContainer">
                <h2 className="imgsQuestion--title">What's the vibe?</h2>
            </div>
            <section className="imgsQuestion--cardsSection">


                <div className="imgsQuestion--cardContainer" onClick={() => navigate("/ContemporaryQuotes")}>
                    <p>Contemporary/ Feminism</p>
                </div>

                <div className="imgsQuestion--cardContainer">
                    <p>Magical Realism/ Historical Fiction/ Fantasy</p>
                </div>

                <div className="imgsQuestion--cardContainer">
                    <p>Horror/Thriller/Science Fiction</p>
                </div>

                <div className="imgsQuestion--cardContainer">
                    <p>Poetry/Memoir/Mental Health/ Race</p>
                </div>

                <div className="imgsQuestion--cardContainer">
                    <p>Romance/ Coming of Age</p>
                </div>

                <div className="imgsQuestion--cardContainer">
                    <p>YA/Mystery/Family</p>
                </div>

                <div className="imgsQuestion--cardContainer">
                    <p>Mythology/Retellings</p>
                </div>

                <div className="imgsQuestion--cardContainer">
                    <p>Queer</p>
                </div>

                <div className="imgsQuestion--cardContainer">
                    <p>Canadian Literture/Nature/Indingenous</p>
                </div>
            </section>
        </main>



    );
}

export default Question1;