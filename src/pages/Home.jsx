import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Japan from '../components/contents/Japan'
import Singapore from '../components/contents/Singapore'
import Taiwan from '../components/contents/Taiwan'
import Vietnam from '../components/contents/Vietnam'
import Honkong from '../components/contents/Honkong'
import Usa from '../components/contents/Usa'
import Australia from '../components/contents/Australia'
import Europe from '../components/contents/Europe'

const Home = () => {
    return (
        <Main
            title="Travel Youtube"
            desciprion="유튜브 채널 페이지입니다.">

            <Today />
            <Japan />
            <Singapore />
            <Taiwan />
            <Vietnam />
            <Honkong />
            <Usa />
            <Australia />
            <Europe />
        </Main>
    )
}

export default Home