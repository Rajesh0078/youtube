import React from 'react'
import "./SearchBar.css"

const SearchList = ({ titleArray }) => {
    return (
        <div className="search_list">
            {titleArray.map((item, index) => {
                return <p className='search_item' key={index}>{item}</p>
            })}

        </div>
    )
}

export default SearchList