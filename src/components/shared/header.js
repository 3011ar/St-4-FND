import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import { CartIcon } from '../icons';

const Header = () => {

    const { itemCount } = useContext(CartContext);

    return (
        <header style={{
            padding: "10px",
            textAlign: "center"
        }}>
            <Link style={{ display: "inline-block", marginRight: "10px", padding: "5px 10px" }} to='/'>Store</Link>
            <Link style={{ display: "inline-block", marginRight: "10px", padding: "5px 10px" }} to='/about'>About</Link>
            <Link style={{ display: "inline-block", marginRight: "10px", padding: "5px 10px" }} to='/cart'> <CartIcon width={18} style={{
                width: "18px",
                marginRight: "5px"
            }} /> Cart ({itemCount})</Link>
        </header>
    );
}

export default Header;