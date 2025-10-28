import React from 'react'

const ICard = ({props}) => {
    // console.log(props)
    return (
        <>
            <div className="main-component">
                <div className="img">
                    <img src="https://passport-photo.online/images/cms/prepare_lookintothecamera_860144524c.webp?quality=80&format=webp&width=1920"
                        width={100} height={170}
                        alt="" />
                </div>
                <div>
                    <h4>Name: {props.name}</h4>
                    <h4>Age: {props.age}</h4>
                    <h4>Branch: {props.branch}</h4>
                    <h4>College: {props.college}</h4>
                    <h4>Location: {props.location}</h4>
                </div>
            </div>
        </>
    )
}

export default ICard