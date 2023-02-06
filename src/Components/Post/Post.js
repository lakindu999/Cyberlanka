import React from 'react';
import'./post.css'

const Post = () => {
    return (
         <div className="post">
            <div className="postContainer">
                <div className="postTop">
                    <img src="/images/postpic.jpg" alt="" className="postImage" />
                    <span className='postUsername'>Lakindu Samarakoon</span>
                    <span className='postTime'>6 min ago</span>
                </div>
                <div className="postCenter">
                    <div className="postCaption"> Hello Good Morning all ! Have a nice day.</div>
                    <img src="/images/postpic.jpg" alt="" className="postedImage" />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/images/likereact.jpg" alt="" className="reactionPic" />
                        <img src="/images/lovereact.jpg" alt="" className="reactionPic" />
                        <img src="/images/hahareact.jpg" alt="" className="reactionPic" />
                        <span className='likeCount'>Lakindu and 225 other</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="commentCount">15 Comments</div>
                    </div>
                </div>
                
            </div>
         </div>
    )

    }

export default Post;