import React from 'react';

import classes from './Sidedrawer.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const sidedrawer = (props) => (
    <div className={classes.Sidedrawer}>
        <div class={classes.Logo}>
            <Logo></Logo>
        </div>
        <nav>
            <NavItems></NavItems>
        </nav>
    </div>
);

export default sidedrawer;