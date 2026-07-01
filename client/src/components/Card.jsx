import { Link } from 'react-router-dom'
import '../css/Card.css'

const Card = ({ pizza }) => {
    return (
        <div className="card">
            <h3>{pizza.name}</h3>

            <p><strong>Size:</strong> {pizza.size}</p>

            <p><strong>Crust:</strong> {pizza.crust}</p>

            <p><strong>Sauce:</strong> {pizza.sauce}</p>

            <p><strong>Cheese:</strong> {pizza.cheese}</p>

            <p>
                <strong>Toppings:</strong>{' '}
                {[pizza.topping1, pizza.topping2, pizza.topping3]
                    .filter(Boolean)
                    .join(', ')}
            </p>

            <h4>${pizza.price}</h4>

            <Link to={`/pizzas/${pizza.id}`} role="button">
                View Pizza
            </Link>
        </div>
    )
}

export default Card