import React from "react";
import { BrowserRouter as Router, Route, Routes, Link }  from "react-router-dom";
import { useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function PostPage(props){
    let location = useLocation(); 
   

    const navigate = useNavigate();

    return(
        <div style={{marginRight:  "20px", padding: "10px", marginBottom: "10px", color: "#000"}}>
            <h1 style={{ cursor: "pointer" }} onClick={() => navigate('/fullpostpage', {state: {data: props.data}})}>{props.data.title}</h1>
            <b style={{display: "block", marginTop: "20px"}}>{props.data.author} | {props.data.date}</b>
            <p style={{backgroundImage: `url(${props.data.image})`,color: "#fff"}}>{props.data.summary}</p>
            <p>{props.data.body}</p>
        </div>
    );


}
export default PostPage;