import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';



const SwipeableBookProfiles = ({ genre }) => {
    const [bookProfiles, setBookProfiles] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchBookProfiles = async () => {
        try {
            const response = await axios.get(`/api/book-profiles/genre/${genre}`);
            setBookProfiles(response.data);
        } catch (error) {
            console.error('Error fetching book profiles:', error);
        }
    };

    fetchBookProfiles();
    }, [genre]);

    const handleSwipeLeft = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, bookProfiles.length - 1));
    };

    const handleSwipeRight = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

return (
    <div>
    <h2>Book Profiles from {genre}</h2>
    <Swipeable
        onSwipedLeft={handleSwipeLeft}
        onSwipedRight={handleSwipeRight}
    >
        <div>
        {bookProfiles.length > 0 ? (
            <div>
            <p>{bookProfiles[currentIndex].structured_description}</p>
   
            </div>
        ) : (
            <p>No book profiles found for {genre}</p>
        )}
        </div>
    </Swipeable>
    </div>
    );
};

export default SwipeableBookProfiles;
