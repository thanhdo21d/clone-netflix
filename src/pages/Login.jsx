import React, { useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import styled from "styled-components"
import Header from '../components/Header'
import { firebaseAuth } from '../Utils/firebase-config'
import { useNavigate } from 'react-router-dom';
import BackgroudImages from '../components/BackgroudImages'
import Footer from '../components/Footer'

const Login = () => {

    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate()
    const handleLogin = async () => {
        try {
            const { email, password } = formValue;
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            console.log(error);
        }
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    })

    return (
        <Container>
            <BackgroudImages />
            <div className='content'>
                <Header />
                <div className='form-container flex column a-center j-center'>
                    <div className='form flex column a-center j-center'>

                        <div className='title'>
                            <h3> Login</h3>
                        </div>
                        <form className='container flex column'>
                            <input type="email" placeholder='Email Address' name='email' value={formValue.email}
                                onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })} />
                            <input type="password" placeholder='Password' name='password' value={formValue.password}
                                onChange={(e) => setFormValue({ ...formValue, [e.target.name]: e.target.value })} />
                            <button onClick={handleLogin}>Log In</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </Container>
    )
}

export default Login

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
        .form-container{
            gap:2rem;
            height:85vh;
            .form{
                padding:2rem;
                background-color:#000000b0;
                width:25vw;
                gap:2rem;
                color :white;
                .container {
                    gap:2rem;
                    input{
                        padding: 0.5rem 1rem ;
                        width:15rem;
                    }
                    button {
                        padding: 0.5rem 1rem;
                        background-color: #e50914;
                        border: none;
                        cursor: pointer;
                        width:15rem;

                        color: white;
                        border-radius : 0.3em;
                        font-size: 1.05rem;

                    }
                    label{
                        color: #b3b3b3;
                        font-size: 13px;
                        font-weight: 400;
                    }
                   
                }
            }
        }
}
`;