import React from 'react'
import './development.css'


function Development({img,title}) {
  return (
    <div className='card_skill'>
        <img src={img} className={title==="MySql" && 'img_skill'} />
    </div>
  )
}

export default Development