import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export const API_URL = "http://localhost:8080";

const BookProfiles = () => {
    const { genre } = useParams();
    const [bookProfiles, setBookProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <h2>Choose your match!</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
            >
                {bookProfiles.map((profile) => (
                    <SwiperSlide key={profile.id}>
                        <Link to={`/book-match/${profile.book_id}`} className="book-profile-link">
                            <div>
                                <p>{profile.structured_description}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BookProfiles;
