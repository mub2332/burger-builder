import React from 'react';

import classes from './Sidedrawer.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/AuxWrap/AuxWrap';

const sidedrawer = (props) => {
    let attachedClasses = [classes.Sidedrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.Sidedrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={attachedClasses.join(' ')}>
                <div class={classes.Logo}>
                    <Logo></Logo>
                </div>
                <nav>
                    <NavItems></NavItems>
                </nav>
            </div>
        </Aux>
    );
};

export default sidedrawer;