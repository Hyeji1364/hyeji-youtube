import React from 'react'

import { IoHeartCircle } from "react-icons/io5";
import { GiJapan } from "react-icons/gi";
import { FaFlag } from "react-icons/fa";
import { SiSingaporeairlines } from "react-icons/si";
import { FaFlagUsa } from "react-icons/fa";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { GiEuropeanFlag } from "react-icons/gi";

import { AiFillGithub } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href='/'>
                    <em aria-hidden='true'></em>
                    <span>TRAVEL<br />YOUTUBE</span>
                </a>
            </h1>

            <nav className='header__menu'>
                <ul className='menu'>
                    <li className='active'>
                        <a href='/today'><IoHeartCircle />추천 영상</a>
                    </li>
                    <li>
                        <a href='/japan'><GiJapan />일본</a>
                    </li>
                    <li>
                        <a href='/taiwan'><FaFlag />대만</a>
                    </li>
                    <li>
                        <a href='/vietnam'><FaFlag />베트남</a>
                    </li>
                    <li>
                        <a href='/honkong'><FaFlag />홍콩</a>
                    </li>
                    <li>
                        <a href='/singapore'><SiSingaporeairlines />싱가포르</a>
                    </li>
                    <li>
                        <a href='/usa'><FaFlagUsa />미국</a>
                    </li>
                    <li>
                        <a href='/australia'><HiGlobeAsiaAustralia />호주</a>
                    </li>
                    <li>
                        <a href='/europe'><GiEuropeanFlag />유럽</a>
                    </li>
                </ul>
                <ul className='keyword'>
                    <li>
                        <a href='/search/food'>food</a>
                    </li>
                    <li>
                        <a href='/search/spot'>장소</a>
                    </li>
                    <li>
                        <a href='/search/enjoy'>즐길거리</a>
                    </li>
                    <li>
                        <a href='/search/attraction'>명소</a>
                    </li>
                    <li>
                        <a href='/search/shoppinglist'>쇼핑</a>
                    </li>
                </ul>
            </nav>

            <div className="header__sns">
                <ul>
                    <li>
                        <a href='https://github.com/hyeji1364' rel='noopener noreferrer'>
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/hyeji1364' rel='noopener noreferrer'>
                            <AiFillYoutube />
                        </a>
                    </li>
                    <li>
                        <a href='https://codepen.io/hyeji1364' rel='noopener noreferrer'>
                            <FaBlogger />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/hyeji1364' rel='noopener noreferrer'>
                            <AiOutlineInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </header >
    )
}

export default Header