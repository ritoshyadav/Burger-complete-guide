import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showSideDrawer:true
    }
    sideDrawerColsedHandler=()=>{
        this.setState({showSideDrawer:false});
    }

    render(){
        return(
            <Aux>
            <Toolbar />
            <SideDrawer open={this.showSideDrawer}
             closed={this.sideDrawerColsedHandler} />
            <main className="Content">
                {this.props.children}
            </main>
        </Aux>
        );
    }
}

export default Layout;
