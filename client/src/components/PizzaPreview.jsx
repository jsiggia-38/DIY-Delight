import React from 'react'
import basePizza from '../assets/basepizza.png'
import pepperoni from '../assets/pepperoni.png'
import '../css/PizzaPreview.css'

const PizzaPreview = ({ pizza }) => {

    const hasPepperoni =
        pizza.topping1 === 'Pepperoni' ||
        pizza.topping2 === 'Pepperoni' ||
        pizza.topping3 === 'Pepperoni'

    return (
        <div className="pizza-preview">

            <div className="pizza-stack">

                {/* Base pizza */}
                <img
                    className="pizza-layer"
                    src = {basePizza}
                    alt="Pizza Base"
                />

                {/* Pepperoni layer */}
                {hasPepperoni && (
                    <img
                        className="pizza-layer"
                        src = {pepperoni}
                        alt="Pepperoni"
                    />
                )}

            </div>

        </div>
    )
}

export default PizzaPreview