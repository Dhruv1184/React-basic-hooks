import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const UseEffect = () => {

    const [para,setpara] = useState(true)

    useEffect(()=>{
        if(!para){
        alert('Content button is clicked')
        }
    },[para])
     
    function Handelvisible(){
        setpara(!para)
    }

  return (
    <>
    <div>
       {!para && (
        <p>
          Kalvium is backed by some of the industry's top tech leaders, ensuring great placement opportunities for the graduates. With 3 years of work experience, while they study, students get to earn a higher salary package in comparison to peers from other colleges during final placements.
        </p>
        )}
         <button onClick={Handelvisible}>content</button>
    </div>
    </>
  )
}

export default UseEffect
