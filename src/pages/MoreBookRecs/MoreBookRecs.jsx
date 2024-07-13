import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
        <div>
            <h1>Books Recommendations for {genre}</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <h2>{book.title}</h2>
                        <p>Author: {book.author}</p>
                    
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoreBookRecs;

