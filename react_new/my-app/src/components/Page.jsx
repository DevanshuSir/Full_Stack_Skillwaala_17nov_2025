import React from 'react'
import PageCss from  "./page.module.css"

const Page = () => {

    console.log(PageCss)

  return (
    <div>
      <h1 className={PageCss.test}>Page Comp New And Learn Module css</h1>
      <p className={PageCss.hello}>Hello</p>
    </div>
  )
}

export default Page
