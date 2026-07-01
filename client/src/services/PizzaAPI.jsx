const getAllPizzas = async () => {
    const response = await fetch('/api/pizzas')
    return await response.json()
}

const getPizza = async (id) => {
    const response = await fetch(`/api/pizzas/${id}`)
    return await response.json()
}

const createPizza = async (pizza) => {
    const response = await fetch('/api/pizzas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pizza)
    })

    return await response.json()
}

const updatePizza = async (id, pizza) => {
    const response = await fetch(`/api/pizzas/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pizza)
    })

    return await response.json()
}

const deletePizza = async (id) => {
    const response = await fetch(`/api/pizzas/${id}`, {
        method: 'DELETE'
    })

    return await response.json()
}

export {
    getAllPizzas,
    getPizza,
    createPizza,
    updatePizza,
    deletePizza
}