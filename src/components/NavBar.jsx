import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { onAuthStateChanged, signInWithEmailAndPassword, getAuth } from "firebase/auth"
import styled from 'styled-components'
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom';
import { FaPowerOff, FaSearch } from 'react-icons/fa'
import { signOut } from 'firebase/auth'
import { firebaseAuth } from '../Utils/firebase-config'
const NavBar = ({ isScrolled }) => {
    const links = [
        { name: 'Home', link: '/' },
        { name: 'TV Shows', link: '/tv' },
        { name: 'Movies', link: '/movies' },
        { name: 'My List', link: '/mylist' },
    ]
    const navigate = useNavigate()


    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (!currentUser) navigate("/Login");
    });

    const [showSearch, SetShowSearch] = useState(false);
    const [inputHover, SetInputHover] = useState(false);
    return (
        <Container>
            <nav className={`flex ${isScrolled ? "scrolled" : ""} `}>
                <div className='left flex a-center'>
                    <div className='brand flex a-center j-center'>
                        <img src={logo} alt="Netflix logo" />
                    </div>
                    <ul className='links flex'>
                        {
                            links.map(({ name, link }) => {
                                return (
                                    <li key={name}>
                                        <Link to={link}>{name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                {/*  */}
                <div className='right flex a-center'>
                    <div className={`search ${showSearch ? "show-search" : " "}`}>
                        <button onFocus={() => SetShowSearch(true)} onBlur={() => {
                            if (!inputHover) SetShowSearch(false);
                        }}>
                            <FaSearch />
                        </button>
                        <input type="text" placeholder='Search'
                            onMouseEnter={() => { SetInputHover(true) }}
                            onMouseLeave={() => SetInputHover(true)}
                            onBlur={() => {
                                SetShowSearch(false)
                                SetInputHover(false)
                            }}
                        />

                    </div>
                    <button onClick={() => signOut(firebaseAuth)}>
                        <FaPowerOff />
                    </button>
                    <button>
                        <i style={{ color: 'white', fontSize: '22px', paddingLeft: '20px', paddingBottom: '4px' }} className="fa fa-user-circle"> </i>
                    </button>
                </div>
            </nav>
        </Container >
    )
}

export default NavBar

const Container = styled.div`
    nav {
        height: 10vh;
        padding: 0 5%;
        background-color: #141414;
        color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: 0.3s ease-in-out;

        &.scrolled {
            background-color: rgba(0, 0, 0, 0.7);
        }

        .left {
            display: flex;
            align-items: center;

            .brand {
                margin-right: 1rem;
                img {
                    height: 30px;
                }
            }

            .links {
                display: flex;
                list-style: none;
                margin: 0;
                padding: 0;

                li {
                    margin-right: 2rem;

                    &:last-child {
                        margin-right: 0;
                    }

                    a {
                        text-decoration: none;
                        color: #fff;
                        font-size: 1.2rem;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
        .right{
            gap:1rem;
            button{
                background-color: transparent ;
                border: none;
                cursor: pointer;
                &:focus{
                    outline: none;
                }
                svg{
                    color:#f34242;
                    font-size: 1.2rem;
                }
            }
            .search{
                display: flex;
                gap:0.4rem;
                align-items: center;
                justify-content: center;
                padding: 0.2rem;
                padding-left:0.5rem;
                button{
                    background-color: transparent;
                    svg{
                        color:white;
                    }
                }
                input{
                    width: 0;
                    opacity:0;
                    visibility: hidden;
                    transition: 0.3s ease-in-out;
                    background-color: transparent;
                    border: none;
                    color: white;
                        &:focus{
                            outline: none;
                        }
                }
            }
            .show-search{
                border:1px solid white;
                background-color:rgba(0,0,0,0.6);
                input{
                    width: 100%;
                    opacity: 1;
                    visibility: visible;
                    padding: 0.3rem;
                }
            }
        }
    }
`;
