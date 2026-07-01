import { pool } from '../config/database.js'

// Get all pizzas
const getPizzas = async (req, res) => {
    try {
        const results = await pool.query(
            'SELECT * FROM pizzas ORDER BY id ASC'
        )

        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// Get one pizza
const getPizzaById = async (req, res) => {
    try {
        const pizzaId = req.params.pizzaId

        const results = await pool.query(
            'SELECT * FROM pizzas WHERE id = $1',
            [pizzaId]
        )

        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// Create a pizza
const createPizza = async (req, res) => {
    try {
        const {
            name,
            size,
            crust,
            sauce,
            cheese,
            topping1,
            topping2,
            topping3,
            price
        } = req.body

        const insertQuery = `
            INSERT INTO pizzas
            (name, size, crust, sauce, cheese, topping1, topping2, topping3, price)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
            RETURNING *
        `

        const values = [
            name,
            size,
            crust,
            sauce,
            cheese,
            topping1,
            topping2,
            topping3,
            price
        ]

        const results = await pool.query(insertQuery, values)

        res.status(201).json(results.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// Update a pizza
const updatePizza = async (req, res) => {
    try {
        const pizzaId = req.params.pizzaId

        const {
            name,
            size,
            crust,
            sauce,
            cheese,
            topping1,
            topping2,
            topping3,
            price
        } = req.body

        const updateQuery = `
            UPDATE pizzas
            SET
                name=$1,
                size=$2,
                crust=$3,
                sauce=$4,
                cheese=$5,
                topping1=$6,
                topping2=$7,
                topping3=$8,
                price=$9
            WHERE id=$10
            RETURNING *
        `

        const values = [
            name,
            size,
            crust,
            sauce,
            cheese,
            topping1,
            topping2,
            topping3,
            price,
            pizzaId
        ]

        const results = await pool.query(updateQuery, values)

        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

// Delete a pizza
const deletePizza = async (req, res) => {
    try {
        const pizzaId = req.params.pizzaId

        await pool.query(
            'DELETE FROM pizzas WHERE id = $1',
            [pizzaId]
        )

        res.status(200).json({
            message: 'Pizza deleted successfully'
        })
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default {
    getPizzas,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
}