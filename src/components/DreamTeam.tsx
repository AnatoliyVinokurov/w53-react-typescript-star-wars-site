import React from 'react';
import { useContext } from 'react';
import { friends, StarWarsContext } from '../utils/constants';
import Friend from './Friend';

const DreamTeam = () => {
    const {hero} = useContext(StarWarsContext);
    return (
        <section className="float-end w-50 row border mx-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends
            .filter(f => f !== hero)
            .map((friend, index) => <Friend key={index} pos={index + 1} friend={friend}/>)}
        </section>
    )
}

export default DreamTeam