import React from 'react';
import './App.css';
import Header from "./Header"
import Content from "./Content";
import Footer from "./Footer";
import Logo from "./Logo"

function App() {

    const appVersion = '0.2.321';
    const menu = ['Salt Fishing','Fresh Fishing','Reels','On Ice'];
    const footerMenu = ['Contact us','Help','F.A.Q.','Private Policy','About us', 'How to Donate']
    return (
        <div className="App">
            <Logo/>
            <Header verison={appVersion} menu={menu}/>
            <Content/>
            <Footer footerMenu={footerMenu}/>


        </div>

    );
}

export default App;
