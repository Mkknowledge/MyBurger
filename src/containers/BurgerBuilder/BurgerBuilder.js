import React, { Component } from 'react'; 

import Auxs from '../../hoc/Auxs'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    render () {
        return (
            <Auxs>
                <Burger />
                <div>Build Controls</div>
            </Auxs>
        );
    }
}

export default BurgerBuilder;