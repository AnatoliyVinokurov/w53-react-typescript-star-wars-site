import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../css_modules/bottomRound.module.css';
import { characters, navItems } from '../utils/constants';

interface Props {
    friend: string,
    pos: number
}

const Friend = ({ friend, pos }: Props) => {

    const navigate = useNavigate();

    const picture = characters[friend].img;
    let styles = 'col-4 p-1';

    if (pos === 7) {
        styles = `${styles} ${style.bottomLeft}`;
    }
    if (pos === 9) {
        styles = `${styles} ${style.bottomRight}`;
    }
    return (
        <img 
            className={styles} 
            src={picture} 
            alt="Friend" 
            onClick={() => navigate(`/${navItems[0].route}/${friend}`)}
        />
    )
}

export default Friend