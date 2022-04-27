import React from 'react';
import pic from '../images/welcome.jpg';
class HeaderPage extends React.Component {
    render() {
        return (
            <div className="header-img">
            <img src={pic} alt="logo" />
          </div>
        );
       
    }
}
export default HeaderPage;