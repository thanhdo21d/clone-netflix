import React, { useRef, useState } from 'react'
import { AiOutlineAlert, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import styled from 'styled-components'
import Card from './Card'
import { fadeIn } from '../pages/variants'

import { motion } from 'framer-motion'
const CardSlider = ({ data, title }) => {
    const [showControls, setShowControls] = useState(false)
    const [sliderPosition, setSliderPosition] = useState(0)

    const listRef = useRef()
    const handleDirecion = (direcion) => {
        console.log(listRef)
        let distance = listRef.current.getBoundingClientRect().x - 70;
        if (direcion === "left" && sliderPosition > 0) {
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
            setSliderPosition(sliderPosition - 1)
        }

        if (direcion === "right" && sliderPosition < 4) {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
            setSliderPosition(sliderPosition + 1)
        }
    }
    return (
        <Container className='flex column'
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            <h1>{title}</h1>
            <motion.div variants={fadeIn('up', 0.75)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='wrapper'>
                <div className={`slider-action left ${!showControls ? "none" : " "} flex j-center a-center`}>
                    <AiOutlineLeft onClick={() => handleDirecion("left")} />
                </div>
                <div className='flex slider' ref={listRef}>
                    {
                        data.map((movie, index) => {
                            return (
                                <Card movieData={movie} index={index} key={movie.id} />
                            )
                        })
                    }
                </div>
                <div className={`slider-action right ${!showControls ? "none" : " "} flex j-center a-center`}>
                    <AiOutlineRight onClick={() => handleDirecion("right")} />
                </div>
            </motion.div>


        </Container>
    )
}

export default CardSlider
const Container = styled.div`
 
 gap:1rem;
 position: relative;
 padding: 2rem 0;
 h1{
    margin-left:50px;

 }
.wrapper{
    .slider{
        width: max-content;
        gap:1rem;
        transition: translateX(0px);
        transition: 0.3s ease-in-out;
        margin-left: 50px;

    }
    .slider-action{
        position: absolute;
        z-index: 99;
        height: 100%;
        top: 0;
        width: 50px;
        transition: 0.3s ease-in-out;
        svg{
            font-size: 2rem;

        }
    }
    .none{
      display: none;
    }
    .left{
        left: 0;
    }
    .right{
        right: 0;
    }
}
`