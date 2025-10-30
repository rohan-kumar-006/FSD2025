import React, { useState } from 'react'

const ImageManipulation = ({path}) => {
    const [pikachuHeight,setPikachuHeight]=useState(400);
    const [pikachuWidth,setPikachuWidth]=useState(370);

  return (
    <div>
        <h2 >ImageManipulation</h2>
        <div className='pika-image-container'>
            <img src={path} height={pikachuHeight} width={pikachuWidth} alt="" />
        </div>
        <div className='buttons'>
            <button onClick={()=>setPikachuHeight(pikachuHeight+10)}>Increase Height</button>
            <button onClick={()=>setPikachuHeight(pikachuHeight-10)}>Decrease Height</button>
            <button onClick={()=>setPikachuWidth(pikachuWidth+10)}>Increase width</button>
            <button onClick={()=>setPikachuWidth(pikachuWidth-10)}>Decrease width</button>
        </div>
    </div>
  )
}

export default ImageManipulation