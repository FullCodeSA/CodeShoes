import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const Search = () => {
    const [keyword, setKeyword] = useState("")
    const navigate = useNavigate();

    const searchHandler = (e) =>{
        e.preventDefault();

        if(keyword.trim()){
            navigate(`/search/${keyword}`)
        }
        else{
            navigate("/")
        }
    }
    console.log(keyword)

    return (
        <form onSubmit={searchHandler}>
        
        <input
           class="search-box" 
            type="text"
            id="search_field"
            placeholder="search"
            onChange={(e) => setKeyword(e.target.value)}
            />
            
    
    </form >
      );
    };
    
    export default Search

   
       
//     <div class="right-container">
//     <input type="text" class="search-box" placeholder="search">
//         onChange={(e) => setKeyword(e.target.value)}
//     </input>

// </div>
        