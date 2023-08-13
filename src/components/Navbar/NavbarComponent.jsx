import React from "react";
import "./navbar.css";
import logo from "./youtube-1495277_640.png";
import { FaBars, FaTh, FaBell, FaUser } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import SearchBarContainer from "./SearchBar/SearchBarContainer";
import { Link } from "react-router-dom"


const NavbarComponent = ({ currentUser, sideBarHandle }) => {
	return (
		<div className="navbar flex">
			<div className="hamburger">
				<FaBars className={"icon"} onClick={sideBarHandle} />
			</div>
			<div className="logo">
				<img src={logo} alt="" width={50} height={35} />
				<Link to={"/"} className="youtube_title">Youtube</Link>
			</div>
			<SearchBarContainer />
			<RiVideoAddLine className={"video_add_line icon"} />
			<FaTh className={"icon"} />
			<FaBell className={"icon"} />
			<div className="auth">
				{currentUser ? (
					<>
						<span className="first_char">
							{currentUser.name
								? currentUser.name.charAt(0)
								: currentUser.email.charAt(0)
							}
						</span>
					</>
				) : (
					<>
						<FaUser className={"auth_icon"} />
						<span className={"auth_text"}>sign in</span>
					</>
				)}
			</div>
		</div>
	);
};

export default NavbarComponent;
