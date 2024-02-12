// import React, { useState } from 'react'
import Buttons from "./buttons/Buttons";
import "./items.css"

export default function Items({ items, setItems }) {
  const checking = (e, index, isChecked) => {
    items[index].packed === false ? items[index].packed = true : items[index].packed = false
    const preItems = [...items];
    setItems(preItems)
  }

  return (
    <div className='dflex justS_A alignCenter fdc packageList'>
      <div style={{ width: "40%", margin: "0 auto", gap: "10px" }} className='fw dflex'>
        {items?.map((e, index) => (
          <div className="dflex gap">
            <input type="checkbox" checked={e.packed} onClick={() => checking(e, index)} />
            <p key={index} style={{ textDecoration: e.packed ? "line-through" : "none" }}>  {e.quantity} {e.name}</p>
          </div>
        ))}
      </div>
      <div>
        <Buttons setItems={setItems} items={items} />
        {/* <select onChange={changingOrder} name="sorted" id="sorted">
          <option value="series">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={() => {
          setItems([])
        }}>Clear List</button> */}
      </div>
    </div>
  )
}
