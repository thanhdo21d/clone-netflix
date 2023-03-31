import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import backgroundImages from "../assets/85019.jpg";
import MoviesLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineAlipayCircle } from "react-icons/ai";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from '../Utils/firebase-config';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';

const TvShows = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres); // Fixed reference to genres

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGenres());
    }, []);

    useEffect(() => {
        if (genresLoaded) {
            dispatch(fetchMovies({
                type: "tv",
            }));
        }
    }, [genresLoaded]);

    useEffect(() => { // Added an effect to remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
    };

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        // if (currentUser) navigate("/");
    });

    return (
        <Container>
            <div className='navbar'>
                <NavBar isScrolled={isScrolled} />
            </div>
            <div className='data'>
                <SelectGenre genres={genres} type="tv" />
                {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
            </div>
        </Container>
    );
};

export default TvShows;

const Container = styled.div`
    background-color: #181818;
    .data{
        padding-top: 8rem;
        .not-available{
            text-align: center;
            color: white;
        }
    }
`;
