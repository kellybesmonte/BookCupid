import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// SwiperCore.use([Navigation]);

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
            <h2>Hi!</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
            >
                {bookProfiles.map((profile) => (
                    <SwiperSlide key={profile.id}>
                        <div>
                            <p>{profile.structured_description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BookProfiles;
