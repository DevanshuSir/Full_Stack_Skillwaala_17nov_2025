import React, { memo } from 'react'

const Child = ({ClickFun}) => {
    console.log("Child Rendered..")
  return (
    <div>
      <h1 >Child Comp..</h1>
      <button onClick={ClickFun}>Click</button>
    </div>
  )
}

export default memo(Child)
