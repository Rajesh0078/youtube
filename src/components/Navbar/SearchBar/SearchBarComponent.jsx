import React from 'react'
import "./SearchBar.css"
import { FaSearch, FaMicrophone } from 'react-icons/fa'
import SearchList from './SearchList'

const SearchBarComponent = ({ searchHandle, titleArray, searchQuery }) => {
	return (
		<div className='search_Bar'>
			<input type="text" className='search_input' placeholder='search here' onChange={searchHandle} />
			<div className="label">
				<FaSearch className='search_icon' />
			</div>
			<FaMicrophone className='mic' />
			{
				searchQuery && <SearchList titleArray={titleArray} />
			}
		</div>
	)
}

export default SearchBarComponent