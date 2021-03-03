import React, {useState} from 'react';
import './search.css';

export function Search(props){
    const [text, setText] = useState('')

    const handleTextChange = (event) => {
        setText(event.target.value);
      }

    return (
      <form id="searchForm">
        <input
          id="searchInput"
          onChange={handleTextChange}
          value={text}
          type="text"
          aria-label="Search the subreddit"
          placeholder="Search the subreddit"
        />
        <input type="submit" value="Go" id="searchSubmit"/>
      </form>
    )
}