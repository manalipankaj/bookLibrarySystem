import React from 'react';
import { useState } from 'react';

function Search(props) {
    const [searchText, setSearchText]  = useState('')

    return (<>
        <input type='text' onChange={e => setSearchText(e.target.value)}></input>
        <button onClick={() => props.searchHandler(searchText)}>Search</button>
    </>)
}

export default Search;