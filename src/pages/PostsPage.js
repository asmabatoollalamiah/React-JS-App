import React from "react";
import { BrowserRouter as Router, Route, Routes, Link }  from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import PostPage from './PostPage';
function PostsPage(elements){
    if(elements.element.length === 0 || elements.element === undefined){
        return <div/>
    }
    return(
        <div className="section-main">{elements.element.map((item) => <PostPage key={Math.random()} data={item}/>)}</div>
    );
}
export default PostsPage;