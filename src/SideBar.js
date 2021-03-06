import React from 'react'
import './SideBar.css'
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';


export default function SideBar() {
    const [{ playlists }] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img
                className="sidebar_logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />


            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist => {
                return <SidebarOption key={playlist.id} title={playlist.name} />
            })}


        </div>
    )
}
