import { Link } from 'react-router-dom'
import '../css/Card.css'

const Card = ({ pizza }) => {
    const toppings = [
        pizza.topping1,
        pizza.topping2,
        pizza.topping3
    ].filter(Boolean)

    return (
        <div className="card">

            <div className="card-header">
                <h2>{pizza.name}</h2>
            </div>

            <div className="card-body">

                <p>📏 <strong>Size:</strong> {pizza.size}</p>

                <p>🥖 <strong>Crust:</strong> {pizza.crust}</p>

                <p>🍅 <strong>Sauce:</strong> {pizza.sauce}</p>

                <p>🧀 <strong>Cheese:</strong> {pizza.cheese}</p>

                <p>
                    🍕 <strong>Toppings:</strong>
                </p>

                <ul>
                    {toppings.map((topping, index) => (
                        <li key={index}>{topping}</li>
                    ))}
                </ul>

            </div>

            <div className="card-footer">

                <h3>${pizza.price}</h3>

                <Link to={`/pizzas/${pizza.id}`} role="button">
                    View Pizza
                </Link>

            </div>

        </div>
    )
}

export default Card