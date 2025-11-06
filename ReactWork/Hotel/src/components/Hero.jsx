import React from 'react'
import Pizza from './Pizza.jsx'
const Hero = () => {
    const pizza_datas=[
        {
            pizza_img_url:
            "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1762245965~exp=1762249565~hmac=7eafca744de0f102c5b878a3fd0c947650096875e208cf2d5d952b80fa629bf9&w=2000"
            ,
            price:"100",
            named:"classic"
        },
        {
            pizza_img_url:
            "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1762245965~exp=1762249565~hmac=7eafca744de0f102c5b878a3fd0c947650096875e208cf2d5d952b80fa629bf9&w=2000"
            ,
            price:"100",
            named:"classic"
        },
    ]
  return (
    <div className='hero'>
        <h1>Welcome to Our Restaurant</h1>

        <div className="menu">
            {pizza_datas.map((pizza_data)=>(
                <Pizza pizza_img=
                {pizza_data.pizza_img_url}
                pizza_price={pizza_data.price}
                name={pizza_data.named}
                />
            ))}
        </div>
    </div>
  )
}

export default Hero