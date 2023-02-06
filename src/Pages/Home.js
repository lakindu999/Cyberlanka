import React from 'react';
import "./Home/home.css"
import LeftPane from '../Components/LeftPane/LeftPane';
import Postpane from '../Components/PostPane/Postpane';
import RightPane from '../Components/RightPane/RightPane';
import NavBar from '../Components/NavBar';



const Home = () => {
    return <div>
            <NavBar/>
        <div className="bottumContainer">
            <LeftPane/>
            <Postpane/>
            <RightPane/>
        </div>
        
    </div>;
}


export default Home;