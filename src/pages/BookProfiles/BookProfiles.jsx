import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


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
                console.log('API Response:', response.data);
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
            <ul>
                {bookProfiles.map((profile) => (
                    <li key={profile.id}>
                        <p>{profile.structured_description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookProfiles;
