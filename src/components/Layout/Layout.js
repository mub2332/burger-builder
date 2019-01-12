import React, { Component } from 'react';

import classes from './Layout.module.css';
import Aux from '../../hoc/AuxWrap';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {

    state = {
        showSidedrawer: true
    }

    sidedrawerCloseHandler = () => {
        this.setState({
            showSidedrawer: false
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar></Toolbar>
                <Sidedrawer 
                    open={this.state.showSidedrawer} 
                    closed={this.sidedrawerCloseHandler}></Sidedrawer>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;