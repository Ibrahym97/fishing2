import React from 'react';


function MenuItem(props) {
    return (
        <li className="menu-item">
            <button>
               {props.item}
            </button>

        </li>
    );
}

export default MenuItem;
