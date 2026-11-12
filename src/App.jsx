import { useState } from 'react'
import DarkModeToggle from './components/DarkModeToggle'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('All')

  function handleAddToCart(product) {
    setCart((currentCart) => [...currentCart, product])
  }

  function handleCategoryChange(event) {
    const nextCategory = event.target.value === 'Fruits' ? 'Fruit' : event.target.value
    setCategory(nextCategory)
  }

  return (
    <div className={darkMode ? 'App dark' : 'App light'}>
      <h1>🛒 Shopping App</h1>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <ProductList
        category={category}
        onCategoryChange={handleCategoryChange}
        onAddToCart={handleAddToCart}
      />
      <Cart cart={cart} />
    </div>
  )
}

export default App

