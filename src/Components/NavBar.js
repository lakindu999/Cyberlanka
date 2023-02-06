import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./Navigation/navBar.css"
/* Creating Navigation Bar*/

const NavBar = () => {
    return <div>

        <div className="navBarBox"> 
            <div className="navBarleft">
                <span className='logo'>CyberLanka</span>
            </div>
                

            <div className="navBarCenter">
                <div className="searchBarbox">
                    <SearchIcon className='searchIcon'/>
                    <input placeholder='Search Your Cyber Friend' className="searchInput" />
                </div>
            </div>
                
                    

            <div className="navBarRight">
                <div className="navBarLinks">
                    <span className='navbarLink'>Home</span>
                    <span className='navbarLink'>Profile</span>
                </div>

                <div className="navBarIcons">
                    <div className="navBarIcon">
                        <PersonIcon/>
                        <span className='iconTag'>3</span>
                    </div>
                    <div className="navBarIcon">
                        <MessageIcon/>
                        <span className='iconTag'>5</span>
                    </div>
                    <div className="navBarIcon">
                        <SettingsIcon/>
                        <span className='iconTag'>2</span>
                    </div>   
                </div>

                <div className="pic">
                    <img src="/images/profilepic.png" alt="" className="profilePicture" />
                </div>
                    
            </div>
                
                 
        </div>
    </div>;

}



export default NavBar;