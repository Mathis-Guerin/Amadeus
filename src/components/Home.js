import React from 'react';
import HomeVideoWebm from '../assets/img/HomeVideo2.webm'
import HomeVideoMp4 from '../assets/img/HomeVideo2.mp4'
import HomeVideoJpg from '../assets/img/HomeVideo2.jpg'
import '../styles/Home.scss'


function Home() {
    return (
        <div className="Home">
            <video autoPlay loop>
                <source src={HomeVideoWebm} type="video/webm"/>
                <source src={HomeVideoMp4} type="video/mp4"/>
            </video>
            <div className="Home-title"> 
                Discover the world
            </div>
        </div>
    )
}

export default Home;
