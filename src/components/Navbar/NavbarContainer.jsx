import React from 'react'
import NavbarComponent from './NavbarComponent'

const NavbarContainer = ({ sideBarHandle }) => {

	const currentUser = {
		result: {
			email: "Pyz@gmail.com",
			name: "Rajesh"
		}
	}

	return (
		<NavbarComponent currentUser={currentUser.result} sideBarHandle={sideBarHandle} />
	)
}

export default NavbarContainer