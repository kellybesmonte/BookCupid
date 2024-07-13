import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import TinderCard from 'react-tinder-card';
import "./BookProfiles.scss";

export const API_URL = "http://localhost:8080";

const BookProfiles = () => {
    const { genre } = useParams();
    const [bookProfiles, setBookProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookProfiles = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/book-profiles/genre/${genre}`);
                setBookProfiles(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching book profiles:', error);
                setError(error);
                setLoading(false);
            }
        };

        if (genre) {
            fetchBookProfiles();
        }
    }, [genre]);

    const handleSwipe = (direction, bookId) => {
        if (direction === 'right') {
            navigate(`/book-match/${bookId}`);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <main className='bookProfiles--section'>
            <h2 className='bookProfiles--title'>Choose your match!</h2>
            <div className="tinder-card-container">
                {bookProfiles.map((profile) => (
                    <TinderCard
                        key={profile.id}
                        className="tinder-card"
                        onSwipe={(direction) => handleSwipe(direction, profile.book_id)}
                    >
                        <div className='tinder-card--descriptionContainer'>
                            <p className='tinder-card--description'>{profile.structured_description}</p>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </main>
    );
};

export default BookProfiles;
