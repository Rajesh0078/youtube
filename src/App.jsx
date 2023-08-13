import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import { BrowserRouter } from "react-router-dom"
import AllRoutes from './components/AllRoutes'
import LeftSideBar from './components/LeftsideBar/LeftSideBar'
import { useState } from 'react'

const App = () => {
	const [sideBarValue, setSideBarValue] = useState(false)

	const sideBarHandle = () => {
		setSideBarValue(() => {
			return sideBarValue !== true ? true : false
		})
	}
	return (
		<div className='app-youtube'>
			<BrowserRouter>
				<Navbar sideBarHandle={sideBarHandle} />
			</BrowserRouter>

			<div className="hero">
				<BrowserRouter>
					{sideBarValue && <LeftSideBar />}

					<AllRoutes />
				</BrowserRouter>
			</div>

		</div>
	)
}

export default App