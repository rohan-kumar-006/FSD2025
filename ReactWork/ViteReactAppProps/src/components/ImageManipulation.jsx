import React, { useState } from 'react'

const ImageManipulation = ({path}) => {
    const [pikachuHeight,setPikachuHeight]=useState(400);
    const [pikachuWidth,setPikachuWidth]=useState(370);

    const [red,setRed]=useState(0)
    const [green,setGreen]=useState(0)
    const [blue,setBlue]=useState(0)
    const [imageRotate,setImageRotate]=useState(0)
     
  function ImageRotate(){
    setImageRotate(imageRotate+30)
  } 
  return (
    <div>
        <h2 >ImageManipulation</h2>
        <div className='pika-image-container' >  
            <img src={path} height={pikachuHeight} width={pikachuWidth} alt="" style={{padding:'10px',backgroundColor:`rgb(${red},${green},${blue})`,transform:`rotate(${imageRotate}deg)`}} />
        </div>
        <div className='buttons'> 
            <button onClick={()=>setPikachuHeight(pikachuHeight+10)}>Increase Height</button>
            <button onClick={()=>setPikachuHeight(pikachuHeight-10)}>Decrease Height</button>
            <button onClick={()=>setPikachuWidth(pikachuWidth+10)}>Increase width</button>
            <button onClick={()=>setPikachuWidth(pikachuWidth-10)}>Decrease width</button>
            <button onClick={()=>
              {
                setRed(Math.random()*255)
                setGreen(Math.random()*255)
              }
            }>Change Colour</button>
            <button onClick={ImageRotate}>Rotate</button>
        </div>
    </div>
  )
}

export default ImageManipulation