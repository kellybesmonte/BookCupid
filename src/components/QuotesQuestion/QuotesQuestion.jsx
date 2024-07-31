import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import "./QuotesQuestion.scss";

export const API_URL = import.meta.env.VITE_API_URL;

function QuotesQuestion() {
    const { genres } = useParams();
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/quotes/genre/${genres}`);
                if (response.status !== 200) {
                    throw new Error('Failed to fetch data');
                }
                setQuotes(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            }
        };

        if (genres) {
            fetchData();
        }
    }, [genres]);

    if (!genres) {
        return <p>No genre selected.</p>;
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <main className="quotesQuestion--section">
            <h2 className="quotesQuestion--title">What quote resonates with you?</h2>
            <ul className="quotesQuestion--list">
                {quotes.map((quote) => (
                    <li className="quotesQuestion--quotes" key={quote.id}>
                        <Link to={`/book-profiles/${quote.genre}`} className="quote-link">
                            <blockquote>{quote.quote}</blockquote>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default QuotesQuestion;
