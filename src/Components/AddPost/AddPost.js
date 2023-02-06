import React from 'react';
import "./addPost.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AddPost = () => {
    return (
    <div className='addPost'>
        <div className="addPostContainer">
            <div className="addpostTop">
                <img src="/images/profilepic.png" alt="" className="addPostPic" />
                <input placeholder='Whats in your mind' type="text" className="addPostInput" />
            </div>
            <hr className='postHR'/>
            <div className="addPostBottum ">
                <div className="addPostOptions">
                    <div className="addPostOption">
                        <InsertPhotoIcon  htmlColor='green' className='addPhoto'/>
                        <span className='addPostOptionText'> Add Photo/Video</span>
                    </div>
                    <div className="addPostOption">
                        <GroupAddIcon htmlColor='#28589c' className='addPhoto'/>
                        <span className='addPostOptionText'> Tag people</span>
                    </div>
                    <div className="addPostOption">
                        <InsertEmoticonIcon htmlColor='orange' className='addPhoto'/>
                        <span className='addPostOptionText'> Feeling/Activity</span>
                    </div>
                    <div className="addPostOption">
                        <LocationOnIcon htmlColor='red'className='addPhoto'/>
                        <span className='addPostOptionText'>Location</span>
                    </div>
                </div>
                <button className='postButton'>Post</button>
            </div>
        </div>



    </div>
    )
    
}



export default AddPost;