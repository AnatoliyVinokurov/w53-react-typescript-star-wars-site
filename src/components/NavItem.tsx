import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StarWarsContext } from '../utils/constants';
import { Item } from '../utils/types';

interface Props {
  item: Item
}

const NavItem = ({ item }: Props) => {
  const { hero } = useContext(StarWarsContext);
  const navigate = useNavigate();
  return (
    <li 
      className="nav-item btn btn-danger mx-1" 
      onClick={() => navigate(`/${item.route}/${hero}`)}
    >
      {item.title}
    </li>
  )
}

export default NavItem