import React from 'react';
import "./Featured.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

function Featured(props) {
    return (
        <div className='featured'>

            <div className='top'>
                <div className='title'>Total Revenue</div>

                <MoreVertOutlinedIcon className='more' />


            </div>
            <div className="bottom">
                <div className='featuredchart'>
                    <CircularProgressbar value={60} text='60%' height="50px" />

                </div>
                <p className='title'>Total Sale Today</p>
                <p className='amount'>(₹)1000</p>
                <p className='des'> sale was worth rs revenue and always be proud</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
}

export default Featured;