import React from 'react';
import './Home.scss';
import Sidebar from "../../Component/Sidebar/Sidebar.js"
import Navbar from "../../Component/Navbar/Navbar.js"
import Widget from "../../Component/Widget/Widget.js"
import Featured from "../../Component/Featured/Featured.js"
import Chart from "../../Component/Chart/Chart.js"





function Home(props) {
    return (
        <div className="home">

            <Sidebar />
            <div className='container'>
                <Navbar />
                <div className="widgets">
                    <Widget />
                    <Widget />
                    <Widget />
                    <Widget />
                </div>
                <div className='chart'>

                    <Featured />
                    <Chart />

                </div>
            </div>
        </div>



    );
}

export default Home;