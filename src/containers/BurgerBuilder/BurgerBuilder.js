import React, { Component } from "react";

import Auxs from '../../hoc/Auxs'

class BurgerBuilder extends Component {
    render () {
        return (
            <Auxs>
                <div>Burger</div>
                <div>Build Controls</div>
            </Auxs>
        );
    }
}

export default BurgerBuilder;