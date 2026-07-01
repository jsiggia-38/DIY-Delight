import React, { useState } from 'react'
import { createPizza } from '../services/PizzaAPI'
import '../App.css'

const CreatePizza = () => {

    const [pizza, setPizza] = useState({
        name: '',
        size: 'Medium',
        crust: 'Thin',
        sauce: 'Tomato',
        cheese: 'Mozzarella',
        topping1: '',
        topping2: '',
        topping3: '',
        price: 10
    })

    const handleChange = (event) => {
        setPizza({
            ...pizza,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        await createPizza(pizza)

        window.location = '/pizzas'
    }

    return (
        <div>

            <h1>Build Your Pizza 🍕</h1>

            <form onSubmit={handleSubmit}>

                <label>Pizza Name</label>
                <input
                    type="text"
                    name="name"
                    value={pizza.name}
                    onChange={handleChange}
                />

                <label>Size</label>
                <select
                    name="size"
                    value={pizza.size}
                    onChange={handleChange}
                >
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>

                <label>Crust</label>
                <select
                    name="crust"
                    value={pizza.crust}
                    onChange={handleChange}
                >
                    <option>Thin</option>
                    <option>Hand Tossed</option>
                    <option>Stuffed</option>
                </select>

                <label>Sauce</label>
                <select
                    name="sauce"
                    value={pizza.sauce}
                    onChange={handleChange}
                >
                    <option>Tomato</option>
                    <option>Alfredo</option>
                    <option>BBQ</option>
                </select>

                <label>Cheese</label>
                <select
                    name="cheese"
                    value={pizza.cheese}
                    onChange={handleChange}
                >
                    <option>Mozzarella</option>
                    <option>Cheddar</option>
                    <option>No Cheese</option>
                </select>

                <label>Topping 1</label>
                <input
                    type="text"
                    name="topping1"
                    value={pizza.topping1}
                    onChange={handleChange}
                />

                <label>Topping 2</label>
                <input
                    type="text"
                    name="topping2"
                    value={pizza.topping2}
                    onChange={handleChange}
                />

                <label>Topping 3</label>
                <input
                    type="text"
                    name="topping3"
                    value={pizza.topping3}
                    onChange={handleChange}
                />

                <h2>Total Price: ${pizza.price}</h2>

                <button type="submit">
                    Create Pizza
                </button>

            </form>

        </div>
    )
}

export default CreatePizza