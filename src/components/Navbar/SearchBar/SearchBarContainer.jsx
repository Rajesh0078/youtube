import React from 'react'
import { useState } from 'react'
import SearchBarComponent from './SearchBarComponent'

const SearchBarContainer = () => {

	const [searchQuery, setSearchQuery] = useState("")
	const titleArray = ["html", "css", "javascript", "front end", "backend", "Node JS"].filter(q => q.toUpperCase().includes(searchQuery.toUpperCase()))


	const searchHandle = (e) => {
		setSearchQuery(e.target.value)
	}

	return (
		<>
			<SearchBarComponent searchHandle={searchHandle} titleArray={titleArray} searchQuery={searchQuery} />
		</>
	)
}

export default SearchBarContainer