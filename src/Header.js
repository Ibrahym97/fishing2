import React from 'react';
import MenuItem from './MenuItem';


function Header(props) {
    return (
        <div className="app-Header">
            <h1>THIS IS FISHING</h1>


                {props.menu.map(el => <MenuItem key={el} item={el} />) }

        </div>
    );
}

export default Header;
