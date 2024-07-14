import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import imgText from '../../assets/Logo/thanksforplaying.svg'
import "./MoreBookRecs.scss";

const API_URL = "http://localhost:8080";

const MoreBookRecs = (props) => {
    const { genre } = useParams(); 
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooksByGenre = async () => {
            try {
                const response = await axios.get(`${API_URL}/books/genre/${genre}`);
                const allBooks = response.data;

                ///Randomizes results and shows a max of 4 books///
                const shuffledBooks = allBooks.sort(() => 0.5 - Math.random());
                const selectedBooks = shuffledBooks.slice(0, 4);

                setBooks(selectedBooks);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching books:', error);
                setError(error);
                setLoading(false);
            }
        };

        if (genre) {
            fetchBooksByGenre();
        }
    }, [genre]); 

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <main className='moreBookRecs--section'>
            <h2 className='moreBookRecs--title'>More books for you to read!</h2>
            <ul className='moreBookRecs--ul'>
                {books.map(book => (
                    <li className='moreBookRecs--li' key={book.id}>
                        <h3 className='moreBookRecs--bookTitle'>{book.title}</h3>
                        <p className='moreBookRecs--author'>{book.author}</p>
                        <p className='moreBookRecs--description'>{book.description}</p>
                        <p className='moreBookRecs--link'><a href={book.link} className='moreBookRecs--a'>Goodreads Link</a></p>
                    </li>
                ))}
            </ul>
            <div className='moreBookRecs--imgContainer'>
                <img className='moreBookRecs--img' src={imgText} alt="red script that says thanks for playing" />
            </div>
            <div className='moreBookRecs--imgContainer'>
                <Link to="/" onClick={props.handleButtonClick}>
                        <button className="moreBookRecs--button">
                            <p className="moreBookRecs--buttonText">Play again?</p>
                        </button>
                </Link>
            </div>
        </main>
    );
};

export default MoreBookRecs;

