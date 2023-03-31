import React from 'react'
import styled from 'styled-components'
import backgroud from '../assets/login.jpg'
const BackgroudImages = () => {
    return (
        <Container>
            <img src={backgroud} alt='backgroud' />
        </Container>
    )
}

export default BackgroudImages
const Container = styled.div`
height:100vh;
width:100vw;
img{
    height:100vh;
    width:100vw;

}

`;