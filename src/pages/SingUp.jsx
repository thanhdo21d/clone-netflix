import React, { useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import styled from "styled-components"
import BackgroudImages from '../components/BackgroudImages'
import Header from '../components/Header'
import { firebaseAuth } from '../Utils/firebase-config'
import { useNavigate } from 'react-router-dom';
import { fadeIn } from './variants'

import { motion } from 'framer-motion'
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
                    <motion.div variants={fadeIn('down', 0.25)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='text flex column'>
                        <h1> Chương trình truyền hình, phim không giới hạn và
                            nhiều nội dung khác..</h1>
                        <p>
                            Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.
                        </p>
                    </motion.div>
                    <motion.div variants={fadeIn('up', 0.25)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='form ' >
                        <input type="email" placeholder='Email Address' name='email' value={fromVlaue.email}
                            onChange={(e) => setFromValue({ ...fromVlaue, [e.target.name]: e.target.value })} />
                        {
                            showPassword && <input type="password" placeholder='Password' name='password' value={fromVlaue.password} onChange={(e) => setFromValue({ ...fromVlaue, [e.target.name]: e.target.value })} />
                        }

                        {
                            !showPassword && <button onClick={() => setShowpassword(true)}> Get Started</button>
                        }

                    </motion.div>
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
        font-size: 1.6rem;
        h1{
            padding:0 8rem;
        }
    }
    .form{
        display:grid;
        grid-template-columns:${({ showPassword }) => showPassword ? "1fr 1fr" : "2fr 1fr"};
        width:60%;
        input{
            margin-top: 2rem;
            background-color: rgba(0,0,0,0.5);
            color:white;
            border: none;
            padding: 1.5rem;
            border-radius: 0.7rem;
            font-size: 1.2rem;
            border:1px solid white;
            margin-right:0.8rem;
            &:focus{
                outline:none
            }
        }
        button {
        margin-top: 2rem;
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius : 0.3em;
        font-size: 1.45rem;
        width:190px

    }
    
}
    button {
        margin-top: 2rem;
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius : 0.3em;
        font-size: 1.05rem;
        width:190px;
    }
 }
}
`;