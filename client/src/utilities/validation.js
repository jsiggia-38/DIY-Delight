const validatePizza = (pizza) => {
    const errors = []

    // Required fields
    if (!pizza.name?.trim()) {
        errors.push('Please enter a pizza name.')
    }

    if (!pizza.size) {
        errors.push('Please select a pizza size.')
    }

    if (!pizza.crust) {
        errors.push('Please select a crust.')
    }

    if (!pizza.sauce) {
        errors.push('Please select a sauce.')
    }

    if (!pizza.cheese) {
        errors.push('Please select a cheese.')
    }

    // Normalize toppings safely
    const toppings = [
        pizza.topping1,
        pizza.topping2,
        pizza.topping3
    ]
        .filter(t => typeof t === 'string')
        .map(t => t.trim())
        .filter(t => t !== '')

    // Duplicate toppings
    const uniqueToppings = new Set(toppings)
    if (uniqueToppings.size !== toppings.length) {
        errors.push('You cannot choose the same topping more than once.')
    }

    /**
     * -----------------------------
     * IMPOSSIBLE COMBINATION RULES
     * -----------------------------
     */

    const rules = [
        {
            condition: pizza.cheese === 'No Cheese' && pizza.sauce === 'Alfredo',
            message: 'Alfredo sauce must be paired with a cheese.'
        },

        {
            condition: pizza.cheese === 'No Cheese' && toppings.length > 0,
            message: 'If you choose no cheese, you cannot add toppings.'
        },

        {
            condition: pizza.size === 'Small' && toppings.length > 2,
            message: 'Small pizzas cannot have more than 3 toppings.'
        },

        {
            condition: pizza.crust === 'Stuffed Crust' && pizza.size === 'Small',
            message: 'Stuffed crust is not available for small pizzas.'
        }
    ]

    rules.forEach(rule => {
        if (rule.condition) {
            errors.push(rule.message)
        }
    })

    return errors
}

export default validatePizza