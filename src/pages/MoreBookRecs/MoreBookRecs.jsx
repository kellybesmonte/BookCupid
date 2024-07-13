import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./MoreBookRecs.scss";

const API_URL = "http://localhost:8080";

const MoreBookRecs = () => {
    const { genre } = useParams(); 
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooksByGenre = async () => {
            try {
                const response = await axios.get(`${API_URL}/books/genre/${genre}`);
                setBooks(response.data);
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
                        <h3 className='moreBookRecs--title'>{book.title}</h3>
                        <p className='moreBookRecs--author'>Author: {book.author}</p>
                        <p className='moreBookRecs--link'><a href={book.link} className='moreBookRecs--a'>{book.link}</a></p>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default MoreBookRecs;

