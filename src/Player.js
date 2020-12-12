import React from 'react';
import Body from './Body';
import Footer from './Footer';
import './Player.css';
import SideBar from './SideBar';

export default function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player_body">
                <SideBar />
                <Body spotify={spotify} />
            </div>

            <Footer />
        </div>
    )
}
