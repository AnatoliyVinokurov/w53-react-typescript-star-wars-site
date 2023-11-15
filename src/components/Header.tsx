import React from 'react'
import { useContext } from 'react'
import { characters, StarWarsContext } from '../utils/constants'
import Navigation from './Navigation'

const Header = () => {
    const { hero } = useContext(StarWarsContext);
    return (
        <header className='row'>
            <Navigation />
            <h1 className="text-center py-4">{characters[hero].name}</h1>
        </header>
    )
}

export default Header