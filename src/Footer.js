import { Grid, Slider } from '@material-ui/core';
import { PlayCircleOutline, PlaylistPlay, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@material-ui/icons';
import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img
                    className="footer_alubumLogo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Arijit_5th_GiMA_Awards.jpg"
                    alt="" />
                <div className="footer_songInfo">
                    <h4>Tum hi ho!</h4>
                    <p>Arijit Singh</p>
                </div>
            </div>
            <div className="footer_center">
                <Shuffle className="footer_green" />
                <SkipPrevious className="footer_icon" />
                <PlayCircleOutline fontSize="large" className="footer_icon" />
                <SkipNext className="footer_icon" />
                <Repeat className="footer_green" />
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default Footer
