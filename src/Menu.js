import React from 'react';
import { useState } from 'react';

const Menu = ({items}) => {
  //items recieved is the array 'data'
  return <div className='section-center'>
  {
    items.map((item)=>{
      const {id,title,category,price,img,desc}=item
      //we could've also used item.property method
      return (
        <article key={id} className="menu-item">
          <img src={img} alt={title} className='photo'/>
          <div className="item-info">
          <header>
          <h3 className="title">{title}</h3>
          <h4 className="price">${price}</h4>
          </header>
          <p>{desc}</p>
          </div>
          
        </article>
      )
    })
  }
  </div>
};

export default Menu;
