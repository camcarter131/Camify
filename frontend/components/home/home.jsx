import React from 'react';
import { Link } from 'react-router-dom';
import Splash from '../splash';

const Home = () => {
    const { user, logout } = this.props;
    return (
        user ? (





        )
        
        : <Splash />
    )
};

export default Home;