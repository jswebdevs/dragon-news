import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Menu></Menu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;