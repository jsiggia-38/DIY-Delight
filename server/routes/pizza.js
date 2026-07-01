import express from 'express'
import PizzasController from '../controllers/pizza.js'

const router = express.Router()

router.get('/', PizzasController.getPizzas)

router.get('/:pizzaId', PizzasController.getPizzaById)

router.post('/', PizzasController.createPizza)

router.patch('/:pizzaId', PizzasController.updatePizza)

router.delete('/:pizzaId', PizzasController.deletePizza)

export default router