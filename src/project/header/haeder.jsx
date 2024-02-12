import React, { useState } from 'react';
import treeImg from "./assests/tree.png";
import bagImg from './assests/bag.png';
import "./header.css"
export default function Header({ items, setItems }) {
    const [itemName, setItemName] = useState("")
    const [itemQuantity, setitemQuantity] = useState(1)
    const addItems = () => {
        // console.log(itemName)
        // console.log(itemQuantity)
        const preItems = [...items];
        const newItem = {
            name: itemName,
            quantity: itemQuantity,
            packed: false,
        }
        // console.log(preItems, "===>>> pre items before push")
        preItems.push(newItem);
        setItems(preItems)
        // console.log(preItems, "===>>> pre items after push")
        // console.log(items, "===>>> only items after push")
    }
    return (
        <div>
            <div className='dflex justCenter alignCenter headerDiv'>
                <img src={treeImg} alt="treeimage" />
                <h1>FAR AWAY</h1>
                <img src={bagImg} alt="bagimage" />
            </div>

            <div className='dflex justCenter alignCenter headerSec2'>
                <p>What do you need for your trip</p>
                <select onChange={(e) => setitemQuantity(e.target.value)} name="quantity" id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <input type="text" placeholder='items...' onChange={(e) => setItemName(e.target.value)} />
                <button onClick={addItems}>ADD</button>
            </div>

        </div>
    );
}
