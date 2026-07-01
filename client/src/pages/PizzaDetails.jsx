import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getPizza, deletePizza } from '../services/PizzaAPI'
import '../App.css'

const PizzaDetails = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const [pizza, setPizza] = useState(null)

    useEffect(() => {

        const fetchPizza = async () => {
            const data = await getPizza(id)
            setPizza(data)
        }

        fetchPizza()

    }, [id])

    const handleDelete = async () => {

        await deletePizza(id)

        navigate('/pizzas')

    }

    if (!pizza) {
        return <h2>Loading...</h2>
    }

    return (

        <div>

            <h1>{pizza.name}</h1>

            <p><strong>Size:</strong> {pizza.size}</p>

            <p><strong>Crust:</strong> {pizza.crust}</p>

            <p><strong>Sauce:</strong> {pizza.sauce}</p>

            <p><strong>Cheese:</strong> {pizza.cheese}</p>

            <p><strong>Topping 1:</strong> {pizza.topping1}</p>

            <p><strong>Topping 2:</strong> {pizza.topping2}</p>

            <p><strong>Topping 3:</strong> {pizza.topping3}</p>

            <h2>${pizza.price}</h2>

            <Link to={`/edit/${pizza.id}`}>
                <button>Edit Pizza</button>
            </Link>

            <button onClick={handleDelete}>
                Delete Pizza
            </button>

        </div>

    )

}

export default PizzaDetails