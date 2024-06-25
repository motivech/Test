import React from 'react';
import {Link} from "react-router-dom";

import cl from './style.module.css'

const HomeRouter = () => {

    return (
        <div className={cl.main}>
            <Link to='/quest1'>
                Question1
            </Link>
            <Link to='/quest2'>
                Question 2
            </Link>
            <Link to='/quest4'>
                Question3
            </Link>
            <Link to='/'>
                Question4
            </Link>
            <Link to='quest5'>
                Question5
            </Link>
        </div>
    );
};

export default HomeRouter;