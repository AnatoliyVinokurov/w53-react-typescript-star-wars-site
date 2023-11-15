import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { defaultHero, friends, StarWarsContext } from '../utils/constants'
import DreamTeam from './DreamTeam'
import FarGalaxy from './FarGalaxy'
import Hero from './Hero'

const Home = () => {

    const { hero: heroId } = useParams();
    const { changeHero } = useContext(StarWarsContext);
    const navigate = useNavigate();


    useEffect(() => {
        if (friends.indexOf(heroId ?? '') < 0) {
            navigate(`/home/${defaultHero}`)
        } else {
            changeHero!(heroId!);
        }

    }, [heroId, changeHero, navigate])

    return (
        <main className="clearfix">
            <Hero />
            <DreamTeam />
            <FarGalaxy />
        </main>
    )
}

export default Home