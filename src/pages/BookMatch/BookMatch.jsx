import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
                console.log('Response data:', response.data);
                setBookInfo(response.data);
            } catch (error) {
                console.error('Error fetching book information:', error);
                setError('Failed to fetch book information. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (bookId) {
            fetchBookInfo();
        }
    }, [bookId]);

    console.log('Current state:', { loading, error, bookInfo });

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
        <div>
            <h2>Book Information</h2>
            <div>
                <p>Title: {bookInfo.title}</p>
                <p>Author: {bookInfo.author}</p>
                <p>Description: {bookInfo.description}</p>
                <p>Type: {bookInfo.class}</p>
                <p>Genre: {Array.isArray(bookInfo.genre) ? bookInfo.genre.join(', ') : bookInfo.genre}</p>
                <p>Link: <a href={bookInfo.link} target="_blank" rel="noopener noreferrer">{bookInfo.link}</a></p>
            </div>
        </div>
    );
};

export default BookMatch;


