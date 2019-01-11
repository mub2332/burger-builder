import React from 'react';

import classes from './Layout.module.css';
import Aux from '../../hoc/AuxWrap';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

const layout = (props) => (
    <Aux>
        <Toolbar></Toolbar>
        <Sidedrawer></Sidedrawer>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;