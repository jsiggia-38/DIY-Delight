import React, { useState } from 'react'
import { createPizza } from '../services/PizzaAPI'
import calculatePrice from '../utilities/calcPrice'
import validatePizza from '../utilities/validation'
import PizzaPreview from '../components/PizzaPreview'
import '../App.css'

const CreatePizza = () => {

    const toppings = [
        '',
        'Pepperoni',
        'Sausage',
        'Bacon',
        'Ham',
        'Chicken',
        'Mushrooms',
        'Onions',
        'Green Peppers',
        'Black Olives',
        'Pineapple',
        'Spinach'
    ]

    const [pizza, setPizza] = useState({
        name: '',
        size: 'Medium',
        crust: 'Thin',
        sauce: 'Tomato',
        cheese: 'Mozzarella',
        topping1: '',
        topping2: '',
        topping3: ''
    })

    const handleChange = (event) => {
        setPizza({
            ...pizza,
            [event.target.name]: event.target.value
        })
    }

    const totalPrice = calculatePrice(pizza)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const errors = validatePizza(pizza)

        if (errors.length > 0) {
            alert(errors.join('\n'))
            return
        }

        await createPizza({
            ...pizza,
            price: totalPrice
        })

        window.location = '/pizzas'
    }

    return (
        <div className="builder-page">

            <div className="builder-form">

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
                    <select
                        name="topping1"
                        value={pizza.topping1}
                        onChange={handleChange}
                    >
                        {toppings.map((topping) => (
                            <option key={topping} value={topping}>
                                {topping || '-- None --'}
                            </option>
                        ))}
                    </select>

                    <label>Topping 2</label>
                    <select
                        name="topping2"
                        value={pizza.topping2}
                        onChange={handleChange}
                    >
                        {toppings.map((topping) => (
                            <option key={topping} value={topping}>
                                {topping || '-- None --'}
                            </option>
                        ))}
                    </select>

                    <label>Topping 3</label>
                    <select
                        name="topping3"
                        value={pizza.topping3}
                        onChange={handleChange}
                    >
                        {toppings.map((topping) => (
                            <option key={topping} value={topping}>
                                {topping || '-- None --'}
                            </option>
                        ))}
                    </select>

                    <h2>Total Price: ${totalPrice}</h2>

                    <button type="submit">
                        Create Pizza
                    </button>

                </form>

            </div>

            <PizzaPreview pizza={pizza} />

        </div>
    )
}

export default CreatePizza