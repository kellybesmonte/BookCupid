import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import "./BookMatch.scss";

const API_URL = 'https://bookcupid-server-production.up.railway.app';

const BookMatch = () => {
    const { bookId } = useParams();
    const [bookInfo, setBookInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookInfo = async () => {
            try {
                // console.log('Fetching book information for bookId:', bookId);
                const response = await axios.get(`${API_URL}/books/${bookId}`);
                setBookInfo(response.data);
            } catch (error) {
                setError('Failed to fetch book information. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (bookId) {
            fetchBookInfo();
        }
    }, [bookId]);



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
            <img className='bookMatch--illustration' src='../../assets/Images/RedBook.svg' alt="illustration of red book with white heart" />
            <div className='bookMatch-infoContainer'>
                <h2 className='bookMatch--title'>{bookInfo.title}</h2>
                <h3 className='bookMatch--author'>{bookInfo.author}</h3>
                <h4 className='bookMatch--description'>{bookInfo.description}</h4>
                <p className='bookMatch--type'>Type: {bookInfo.class}</p>
                <p className='bookMatch--genre'>Genre: {Array.isArray(bookInfo.genre) ? bookInfo.genre.join(', ') : bookInfo.genre}</p>
                <p className='bookMatch--link'><a href={bookInfo.link} className='bookMatch--a'>Click here to save it on Goodreads!</a></p>
            </div>
            <Link to={`/more-book-recs/${bookInfo.genre}`}>
            <img className='bookMatch--next' src='../../assets/Logo/thankunext.png' alt="red script font that reads thank you next" />
            </Link>
        </main>
    );
};

export default BookMatch;
