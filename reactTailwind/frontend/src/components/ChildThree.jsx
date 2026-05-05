import React from 'react'
import { data } from '../App'

const ChildThree = () => {

  

  return (
    <div>
        <data.Consumer>
            {
                (userName)=>{
                    return(
                         <h1 className='text-center text-2xl'>Child Three {userName}</h1>
                    )
                }
            }
        </data.Consumer>
     
    </div>
  )
}

export default ChildThree
