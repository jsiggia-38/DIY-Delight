import { pool } from './database.js'
import './dotenv.js'


const createPizzasTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS pizzas;

    CREATE TABLE IF NOT EXISTS pizzas (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      size VARCHAR(50) NOT NULL,
      crust VARCHAR(50) NOT NULL,
      sauce VARCHAR(50) NOT NULL,
      cheese VARCHAR(50) NOT NULL,
      topping1 VARCHAR(50),
      topping2 VARCHAR(50),
      topping3 VARCHAR(50),
      price INT NOT NULL
    );
  `

  try {
    await pool.query(createTableQuery)
    console.log('🍕 Pizzas table created successfully')
  } catch (err) {
    console.error('⚠️ Error creating pizzas table', err)
  }
}

createPizzasTable()