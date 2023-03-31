import React, { useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import styled from "styled-components"
import BackgroudImages from '../components/BackgroudImages'
import Header from '../components/Header'
import { firebaseAuth } from '../Utils/firebase-config'
import { useNavigate } from 'react-router-dom';
const SingUp = () => {
    const [showPassword, setShowpassword] = useState(false);
    const navigate = useNavigate()
    const [fromVlaue, setFromValue] = useState({
        email: "",
        password: "",
    });
    const handelSignin = async () => {
        try {
            const { email, password } = fromVlaue;
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            console.log(error);
        }
    }
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    })

    return (

        <Container showPassword={showPassword}>
            <BackgroudImages />
            <div className='content'>


                <Header login />
                <div className='body flex column a-center j-center'>
                    <div className='text flex column'>
                        <h1> Unlimikted Ovies , TV Shows And More</h1>
                        <h4> Watch Anywhere . Cancel Anytime.</h4>
                        <h6>
                            Ready to wacth? Enter your email to create or restart membership
                        </h6>
                    </div>
                    <div className='form ' >
                        <input type="email" placeholder='Email Address' name='email' value={fromVlaue.email}
                            onChange={(e) => setFromValue({ ...fromVlaue, [e.target.name]: e.target.value })} />
                        {
                            showPassword && <input type="password" placeholder='Password' name='password' value={fromVlaue.password} onChange={(e) => setFromValue({ ...fromVlaue, [e.target.name]: e.target.value })} />
                        }

                        {
                            !showPassword && <button onClick={() => setShowpassword(true)}> Get Started</button>
                        }

                    </div>
                    <button onClick={handelSignin}> Log In</button>
                </div>
            </div>
        </Container >
    )
}

export default SingUp
const Container = styled.div`
position: relative;
.content{
    position: absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    height:100vh;
    width:100vw;
    display: grid;
 grid-template-rows:15vh 85vh;
 .body{
    gap:1rem;
    .text{
        gap:1rem;
        text-align: center;
        font-size: 2rem;
        h1{
            padding:0 25rem;
        }
    }
    .form{
        display:grid;
        grid-template-columns:${({ showPassword }) => showPassword ? "1fr 1fr" : "2fr 1fr"};
        width:60%;
        input{
            color:black;
            border: none;
            padding: 1.5rem;
            font-size: 1.2rem;
            border:1px solid black;
            &:focus{
                outline:none
            }
        }
        button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius : 0.3em;
        font-size: 1.05rem;

    }
    
}
    button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius : 0.3em;
        font-size: 1.05rem;

    }
 }
}
`;