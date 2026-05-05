import React from 'react'
import ChildThree from './ChildThree'
import { data } from '../App'

const ChildTwo = () => {

   
    
  return (
    <div>
        <data.Consumer>
            {
                (userName)=>{
                    return(
                          <h1 className='text-center text-3xl'>Child Two {userName}</h1>
                    )
                }
            }
        </data.Consumer>
    
      <ChildThree />
    </div>
  )
}

export default ChildTwo
