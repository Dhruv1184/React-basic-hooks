import React from 'react'
import { useState } from 'react'
const CountLIke = () => {
    const [like,setlike] = useState(0)
    
   function HandelLike(){
        setlike(like+1)
    }    
    return (
    <div>
        <h1>{like}</h1>
        <button onClick={HandelLike}>like</button>
    </div>
    )
}

export default CountLIke
