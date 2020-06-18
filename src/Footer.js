import React from 'react';
import FooterItems from './FooterItems';

function Footer(props) {
    return (
        <div className="app-Footer">
           <li>
               {props.footerMenu.map(el=> <FooterItems key={el} item={el}/> )}
           </li>



        </div>

    );
}

export default Footer;
