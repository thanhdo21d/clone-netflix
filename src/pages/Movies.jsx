import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import backgroudImages from "../assets/85019.jpg"
import MoviesLogo from "../assets/homeTitle.webp"
import { FaPlay } from "react-icons/fa"
import { AiOutlineAlipayCircle } from "react-icons/ai"

import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, getGenres } from '../store'
import Slider from '../components/Slider'

const Movies = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
    const navigate = useNavigate()
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded)
    const movies = useSelector((state) => state.netflix.movies)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getGenres())
    }, []);
    useEffect(() => {
        if (genresLoaded) dispatch(fetchMovies({
            type: "movies",
        }))
    }, [genresLoaded, dispatch])

    return (
        <div>Movies</div>
    )
}

export default Movies