const calculatePrice = (pizza) => {
    let total = 0

    // Size prices
    switch (pizza.size) {
        case 'Small':
            total += 8
            break
        case 'Medium':
            total += 10
            break
        case 'Large':
            total += 12
            break
        default:
            break
    }

    // Crust prices
    switch (pizza.crust) {
        case 'Hand Tossed':
            total += 2
            break
        case 'Stuffed':
            total += 4
            break
        default:
            break
    }

    // Cheese prices
    switch (pizza.cheese) {
        case 'Cheddar':
            total += 1
            break
        case 'No Cheese':
            total -= 1
            break
        default:
            break
    }

    // Toppings
    if (pizza.topping1) total += 1
    if (pizza.topping2) total += 1
    if (pizza.topping3) total += 1

    return total
}

export default calculatePrice