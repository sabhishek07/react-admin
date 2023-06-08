import "./Widget.scss"
import React from 'react';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import "../Sidebar/Sidebar.scss";

function Widget(props) {
    return (
        <div className="widgets1">
            <div className="left">
                <div className="title">User</div>
                <div className="counter">4586</div>
                <div className="link"> See All Folks</div>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon />
                    20%
                </div>

                <div className="Link"> </div>
                <div className="person">
                    <GroupAddOutlinedIcon />
                </div>

            </div>


        </div>
    );
}

export default Widget;