import React, {useContext} from 'react';
import {ThemeContext} from "../Quest5/ThemeContext";

const HelloWorld = ( {name = 'World'} ) => {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div>
            Hello, {name}
        </div>
    );
};

export default HelloWorld;