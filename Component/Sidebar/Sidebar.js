import React, { useEffect, useState } from 'react';
import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person3Icon from '@mui/icons-material/Person3';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

function Sidebar(props) {
    const [theme, setTheme] = useState("");

    const white = () => {
        setTheme("light-theme")
    }
    const black = () => {
        setTheme("dark-theme")
    }
    useEffect(() => {
        document.body.className = theme;

    }, [theme])
    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>Abhishek</span></div>
            <hr></hr>
            <div className='center'>
                <ul >
                    <p className='title'>Main</p>

                    <li>

                        <DashboardIcon className="icon" />
                        <span> Dashbaord</span></li>

                    <li><Person3Icon className="icon" /><span>User</span></li>
                    <p className='title'>List</p>

                    <li><ProductionQuantityLimitsIcon className="icon" /><span>Product</span></li>



                    <li> <SettingsIcon className="icon" /><span>Setting</span></li>
                    <li><NotificationsActiveIcon className="icon" /><span>Notification</span></li>
                    <p className='title'>Resources</p>
                    <li><AddLocationIcon className="icon" /><span>Location</span></li>
                    <li><HealthAndSafetyIcon className="icon" /><span>Health</span></li>
                    <li> <SettingsIcon className="icon" /><span>Setting</span></li>
                    <p className='title'>Account</p>
                    <li><NotificationsActiveIcon className="icon" /><span>Notification</span></li>
                    <li><AddLocationIcon className="icon" /><span>Location</span></li>
                    <li><HealthAndSafetyIcon className="icon" /><span>Health</span></li>
                    <li>
                        <DashboardIcon className="icon" />
                        <span> Dashbaord</span></li>

                    <li><Person3Icon className="icon" /><span>User</span></li>

                </ul>
            </div>
            <div className='bottom'>

                <div className='color' onClick={white}></div>
                <div className='color' onClick={black}></div>
            </div>


        </div>
    );
}

export default Sidebar;