import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories=['all',...new Set(items.map((item)=>{
  return item.category;
}))]
// console.log(allCategories);

function App() {
  const [menuItems,setMenuItems]=useState(items)
  //menuItems me pura array agya
  const [categories,setCategories]=useState(allCategories)

  const filterItems=(category)=>{
    if(category==='all')
    {
      setMenuItems(items)
      return;
    }
    const newItem=items.filter((item)=>{
      return category===item.category
    })
    setMenuItems(newItem)
  }
  return <main>
  <section className="menu title">
    <h2>Our menu</h2>
    <div className="underline"></div>
  </section>

  <Categories filterItems={filterItems} categories={categories}/>
  <Menu items={menuItems}/>
  </main>
}

export default App;
