import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import TinderCard from 'react-tinder-card';
import "./BookProfiles.scss";

const API_URL = 'https://bookcupid-server-production.up.railway.app';

const BookProfiles = () => {
    const { genre } = useParams();
    const [bookProfiles, setBookProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        const fetchBookProfiles = async () => {
            try {
                const response = await axios.get(`${API_URL}/book_profiles/genre/${genre}`);
                const shuffledProfiles = shuffleArray(response.data);
                setBookProfiles(shuffledProfiles);
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

        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);

        if (newIndex >= bookProfiles.length) {
            alert("Aren't you a picky reader! Want to start again?");
            navigate('/');
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
            <h4 className='bookProfiles--subheader'>Swipe left until you find the one! When you do, swipe right!😘</h4>
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
