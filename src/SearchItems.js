import React from 'react'

const SearchItems = ({search , setSearch}) => {
  return (
        <form action="" role='search'>
            <label htmlFor="search">
                Search Items: 
            </label>
            <input 
                type="text" 
                className='searchBox'
                placeholder='Search Here'
                role='searchbox'
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                />
        </form>
  )
}

export default SearchItems