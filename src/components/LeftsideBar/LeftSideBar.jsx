import React from 'react'
import "./sideBar.css"
import { AiOutlineHome } from "react-icons/ai"
import { Link } from "react-router-dom"

const LeftSideBar = () => {
    return (
        <div className='left_sidebar'>
            <Link to={"/"} >
                <div className="sidebar_container">
                    <div className="icon_sidebar"><AiOutlineHome /></div>
                    <div className='title'>Home</div>
                </div>
            </Link>
            <Link to={"/explore"}>
                <div className="sidebar_container">
                    <div className="icon_sidebar"><AiOutlineHome /></div>
                    <div className='title'>Explore</div>
                </div>
            </Link>
            <Link to={"/subscriptions"}>
                <div className="sidebar_container">
                    <div className="icon_sidebar"><AiOutlineHome /></div>
                    <div className='title'>Subscriptions</div>
                </div>
            </Link>
            <Link to={'/library'}>
                <div className="sidebar_container">
                    <div className="icon_sidebar"><AiOutlineHome /></div>
                    <div className='title'>Library</div>
                </div>
            </Link>
        </div>
    )
}

export default LeftSideBar