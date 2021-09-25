import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';
import DrivingInfo from '../DrivingInfo/DrivingInfo';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar/>
            <HeaderMain></HeaderMain>
            <DrivingInfo></DrivingInfo>
        </div>
    );
};

export default Header;