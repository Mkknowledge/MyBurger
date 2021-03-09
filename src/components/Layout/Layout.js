import React from 'react';
import Auxs from '../../hoc/Auxs'

const layout = (props) => (
    <Auxs>
    <div> Toolbar, SideDrawer, Backdrop </div>
    <main>
        {props.children}
    </main>
    </Auxs>
);

export default layout;