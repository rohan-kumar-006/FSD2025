import React from 'react'
import { useState } from 'react'

const Pizza = ({name,pizza_img,pizza_price}) => {
    const [price,setprice]=useState(pizza_price)
    console.log(name,pizza_img,pizza_price)

  return (<>
    <div className='pizza-card'>
        <p>{name}</p>
        <img src={pizza_img} alt="" />
        <p className='price'>{price}</p>
    </div>
  </>
  )
}

export default Pizza