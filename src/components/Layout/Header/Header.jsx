import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header(props) {

    const navigate = useNavigate();

    const goTo = (str) => {
        navigate(str)
    }

    return (
        <div>
            <Link to='/' >Home</Link>
            <Link to='/about'>About</Link>
            <a onClick={() => goTo('blog')}>Blog</a>
        </div>
    );
}

export default Header;