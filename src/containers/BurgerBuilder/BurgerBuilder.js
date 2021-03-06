import React, { Component } from 'react'; 

import Auxs from '../../hoc/Auxs'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render () {
        return (
            <Auxs>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Auxs>
        );
    }
}

export default BurgerBuilder;