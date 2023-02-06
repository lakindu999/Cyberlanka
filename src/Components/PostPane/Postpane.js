import React from 'react';
import AddPost from '../AddPost/AddPost';
import Post from '../Post/Post';
import "./postpane.css"

const Postpane = () => {
    return <div className='postPaneBox'>
        <AddPost/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>;
}


export default Postpane;