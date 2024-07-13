import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./BookMatch.scss";

export const API_URL = "http://localhost:8080";

const BookMatch = () => {
    const { bookId } = useParams();
    const [bookInfo, setBookInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookInfo = async () => {
            try {
                console.log('Fetching book information for bookId:', bookId);
                const response = await axios.get(`${API_URL}/books/${bookId}`);
                // console.log('Response data:', response.data);
                setBookInfo(response.data);
            } catch (error) {
                // console.error('Error fetching book information:', error);
                setError('Failed to fetch book information. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (bookId) {
            fetchBookInfo();
        }
    }, [bookId]);

    // console.log('Current state:', { loading, error, bookInfo });

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!bookInfo) {
        return <p>No book information available for this ID.</p>;
    }

    return (
        <main className='bookMatch--section'>
            <div className='bookMatch-infoContainer'>
                <h2 className='bookMatch--title'>Title: {bookInfo.title}</h2>
                <h3 className='bookMatch--author'>Author: {bookInfo.author}</h3>
                <h4 className='bookMatch--description'>Description: {bookInfo.description}</h4>
                <p className='bookMatch--text'>Type: {bookInfo.class}</p>
                <p className='bookMatch--text'>Genre: {Array.isArray(bookInfo.genre) ? bookInfo.genre.join(', ') : bookInfo.genre}</p>
                <p className='bookMatch--text'>Link: <a href={bookInfo.link}>{bookInfo.link}</a></p>
            </div>
        </main>
    );
};

export default BookMatch;


