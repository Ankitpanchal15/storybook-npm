import React from "react";
import "./monitor.css";
import Header from './Header';
import Image from '../img/dance.jpg';
const Monitor = () => {
    return(
        <>
            <Header title="Monitor Page 1"></Header>
            <img src={Image} />
        </>
    )
}

export default Monitor;