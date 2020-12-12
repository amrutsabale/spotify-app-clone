import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import React from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header'
import SongRow from './SongRow'

function Body({ spotify }) {

    const [{ discoverWeekly }] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body_info">
                <img src={discoverWeekly?.images[0].url} alt="" />
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discoverWeekly?.description}</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilled className="body_shuffle" />
                    <Favorite fontSize="large" />
                    <MoreHoriz />
                </div>
                {
                    discoverWeekly?.tracks.items.map((item, index) => < SongRow key={index} track={item.track} />)
                }
            </div>


        </div>
    )
}

export default Body
