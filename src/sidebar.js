import React from "react";
import './sidebar.css';
import SidebarRow from "./sidebarRow";
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
function Sidebar(){
    return(
        <div className='sidebar'>
            <SidebarRow src='https://avatars.githubusercontent.com/u/32813584?s=400&v=4' title='Tailor Smit'/>
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatIcon} title='Messenger'/>
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
            <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
        </div>
    )
}

export default Sidebar;