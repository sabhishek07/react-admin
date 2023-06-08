import React from 'react';
import "./Navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';
import CropFreeIcon from '@mui/icons-material/CropFree';

function Navbar(props) {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type='text' placeholder='search..'></input>
                    <SearchIcon className='navicon' />
                </div>
                <div className='items'>
                    <div className='item'>
                        < LanguageOutlinedIcon className='navicon' />
                        English

                    </div>
                    <div className='item'>
                        < DarkModeOutlinedIcon className='navicon' />
                        DarkMode

                    </div>
                    <div className='item'>
                        < NotificationsActiveOutlinedIcon className='navicon' />

                    </div>
                    <div className='item'>
                        < ListOutlinedIcon className='navicon' />

                    </div>
                    <div className='item'>
                        <VideocamOffOutlinedIcon className='navicon' />


                    </div>
                    <div className='item'>
                        < CropFreeIcon className='navicon' />


                    </div>
                    <div className='item'>
                        <img className='image' src="h1.jpeg"></img>


                    </div>

                </div>




            </div>


        </div>
    );
}

export default Navbar;