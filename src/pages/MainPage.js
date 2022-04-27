import React from 'react';
import pic from '../images/welcome.jpg';
import XMLData from '../files/cd_catalog.xml';
import PostsPage from './PostsPage';
class MainPage extends React.Component {
    constructor(){
        super();
        this.state = {elements: [] }
        this.loadXMLDoc();
         
    }


    

    loadXMLDoc() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function (ex) {
          if (xmlhttp.responseText !== '') {
          let parser = new DOMParser();
           let xmlDoc = parser.parseFromString(xmlhttp.responseText, 'text/xml');
                var i;
                var post = xmlDoc.getElementsByTagName("post");
                var postList = [];
                for (i = 0; i <post.length; i++) { 
                  var map = {
                    "title": post[i].getElementsByTagName("title")[0].childNodes[0].nodeValue,
                    "author": post[i].getElementsByTagName("author")[0].childNodes[0].nodeValue,
                    "date": post[i].getElementsByTagName("date")[0].childNodes[0].nodeValue,
                    "image": post[i].getElementsByTagName("summary")[0].getElementsByTagName("image_path")[0].childNodes[0].nodeValue,
                    "text": post[i].getElementsByTagName("summary")[0].getElementsByTagName("text")[0].childNodes[0].nodeValue,
                    "body": post[i].getElementsByTagName("body")[0].childNodes[0].nodeValue,
                  }
                  postList.push(map);
                }
                this.setState({ elements: postList });
          }
        }.bind(this);
        xmlhttp.open("GET", XMLData, true);
        xmlhttp.send();

    }
    render() {
      return (
        <React.Fragment>
        {/* <div  className="flex-vertical" >{this.state.test}</div>      */}
        <PostsPage className="section-main" element={this.state.elements}/>
        </React.Fragment>
      );
    }
     /*prepareView = (xml) => {
        var i;
        var xmlDoc = xml.responseXML;
        var table="";
        var x = xmlDoc.getElementsByTagName("post");
        for (i = 0; i <x.length; i++) { 
           var summary =  x[i].getElementsByTagName("summary")[0];
          table += "<div className='row'><div className='leftcolumn'><div className='card'><h1>" +
          x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
          "</h1><h2>" +
          x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue +
          "</h2><h3>" + 
          x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue +
          "</h3><summary><div 'fakeimg'><img>" + 
          summary.getElementsByTagName("image_path")[0].childNodes[0].nodeValue +
          "</img><p>" +
          summary.getElementsByTagName("text")[0].childNodes[0].nodeValue +
          "</summary><p>" + 
          x[i].getElementsByTagName("body")[0].childNodes[0].nodeValue +
          "</p></div></div></div>";
        }
        document.getElementById("demo").innerHTML = table;
      }*/
}
export default MainPage;