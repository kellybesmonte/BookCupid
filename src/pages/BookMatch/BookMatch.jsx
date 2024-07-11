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
                const response = await axios.get(`${API_URL}/books/${bookId}`);
                setBookInfo(response.data);
            } catch (error) {
                console.error('Error fetching book information:', error);
                setError('Failed to fetch book information. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchBookInfo();
    }, [bookId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }


    if (!bookInfo || !bookInfo.title) {
        return <p>No book information available for this ID.</p>;
    }

    return (
        <div>
            <h2>Book Details</h2>
            <div>
                <p>Name: {bookInfo.title}</p>
                <p>Author: {bookInfo.author}</p>
                <p>Description: {bookInfo.description}</p>
                <p>Type: {bookInfo.class}</p>
                <p>Genre: {bookInfo.genre}</p>
                <p>Link: {bookInfo.link}</p>
            </div>
        </div>
    );
};

export default BookMatch;
