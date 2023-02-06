import React from 'react';
import "./leftPane.css"
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
import FeedIcon from '@mui/icons-material/Feed';
import TourIcon from '@mui/icons-material/Tour';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HelpIcon from '@mui/icons-material/Help';
import StreamIcon from '@mui/icons-material/Stream';



const LeftPane = () => {
    return (
    
    <div className='leftPaneBox'>
        <div className="leftPaneContainer">
            <div className="leftPaneMenu"> 
             <li className="leftPaneMenuItem">
                <MessageIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'> Messages </span>
             </li>
             <li className="leftPaneMenuItem">
                <GroupIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'> Groups </span>
             </li>
             <li className="leftPaneMenuItem">
                <FeedIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'> Feed </span>
             </li>
             <li className="leftPaneMenuItem">
                <TourIcon  className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'> Flags </span>
             </li>
             <li className="leftPaneMenuItem">
                <CalendarMonthIcon  className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'> Calender </span>
             </li>
             <li className="leftPaneMenuItem">
                <BuildIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'> Settings </span>
             </li>
             <li className="leftPaneMenuItem">
                <SportsEsportsIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'> Games </span>
             </li>
             <li className="leftPaneMenuItem">
                <NewspaperIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'> News </span>
             </li>
             <li className="leftPaneMenuItem">
                <WorkOutlineIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'> Work </span>
             </li>
             <li className="leftPaneMenuItem">
                <AddShoppingCartIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'> Shop </span>
             </li>
             <li className="leftPaneMenuItem">
                <StreamIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'> Live Stream </span>
             </li>
             <li className="leftPaneMenuItem">
                <HelpIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'> Help </span>
             </li>
             <hr/>
             <div className="pagesYouLiked">
                <h3>Pages you Liked</h3>
             </div>
             <div className="pageList">
                <li className="pagesListitem">
                    <img src="/images/profilepic.png" alt="" className="pagePic" />
                    <span className='pageName'>Test Page 01</span>
                </li>
                <li className="pagesListitem">
                    <img src="/images/profilepic.png" alt="" className="pagePic" />
                    <span className='pageName'>Test Page 02</span>
                </li>
                <li className="pagesListitem">
                    <img src="/images/profilepic.png" alt="" className="pagePic" />
                    <span className='pageName'>Test Page 03</span>
                </li>
                <li className="pagesListitem">
                    <img src="/images/profilepic.png" alt="" className="pagePic" />
                    <span className='pageName'>Test Page 04</span>
                </li>
                <li className="pagesListitem">
                    <img src="/images/profilepic.png" alt="" className="pagePic" />
                    <span className='pageName'>Test Page 05</span>
                </li>
                <li className="pagesListitem">
                    <img src="/images/profilepic.png" alt="" className="pagePic" />
                    <span className='pageName'>Test Page 06</span>
                </li>
                <li className="pagesListitem">
                    <img src="/images/profilepic.png" alt="" className="pagePic" />
                    <span className='pageName'>Test Page 07</span>
                </li>
                <li className="pagesListitem">
                    <img src="/images/profilepic.png" alt="" className="pagePic" />
                    <span className='pageName'>Test Page 08</span>
                </li>
             </div>

            </div>
        </div>
    </div>

    )
}



export default LeftPane;