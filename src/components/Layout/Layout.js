import React, { Component } from 'react';

import classes from './Layout.module.css';
import Aux from '../../hoc/AuxWrap';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {

    state = {
        showSidedrawer: false
    }

    sidedrawerCloseHandler = () => {
        this.setState({
            showSidedrawer: false
        });
    }

    sidedrawerToggleHandler = () => {
        this.setState(
            (prevState) => {
                return {
                    showSidedrawer: !prevState.showSidedrawer
                };
            }
        )
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sidedrawerToggleHandler}></Toolbar>
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