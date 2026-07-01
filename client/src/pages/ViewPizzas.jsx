import React, { useEffect, useState } from 'react'
import { getAllPizzas } from '../services/PizzaAPI'
import Card from '../components/Card'
import '../App.css'

const ViewPizzas = () => {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        const fetchPizzas = async () => {
            const data = await getAllPizzas()
            setPizzas(data)
        }

        fetchPizzas()
    }, [])

    return (
        <div className="view-pizzas">

            <h1>Saved Pizzas</h1>

            {pizzas.length === 0 ? (
                <p>No pizzas have been created yet.</p>
            ) : (
                <div className="pizza-grid">
                    {pizzas.map((pizza) => (
                        <Card
                            key={pizza.id}
                            pizza={pizza}
                        />
                    ))}
                </div>
            )}

        </div>
    )
}

export default ViewPizzas