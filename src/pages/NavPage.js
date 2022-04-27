import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
class NavPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        isLoading: true, 
        data: []
        }
    }  

    componentDidMount() {
        var minute = 60000;
        const requestOptions = {
            headers: { 
                'Authorization' : 'Bearer AAAAAAAAAAAAAAAAAAAAADz8bgEAAAAAxNvthHQruHUfKKHMD%2BKWdpY%2BHJo%3DcS5KFdL1hXZiMWgKuEj6QNGdFLJBFrkSsPL2lkzAMdQQ1k4Y5h',
                'Access-Control-Allow-Origin' : 'https://api.twitter.com',
                'Access-Control-Allow-Methods' : 'POST, GET',
                'Access-Control-Max-Age' : '1000',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers' : 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token'
            },
            mode: 'cors'    
        };
            axios.get('2/tweets?ids=1517504040850100226,1517201501139128321,1517140636511571971,1517140645860700160,1517140648977047553', requestOptions)
            .then((responseJson) => {
                this.setState({ data: responseJson.data.data,  isLoading: false});
                
            })
            .catch((error) => {
            console.error(error);
            });

    }
    render(){
        this.state = this.state;
        return (<div className="section-nav">
        <ul>
        <Link to="/">Home page</Link>
        </ul>
        <div>
        {this.state.data.map(item => <p>{item.text}</p>)}
        </div>
        </div>) ; 

    }
}
export default NavPage;