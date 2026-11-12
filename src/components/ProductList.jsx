import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Milk', category: 'Dairy' },
  { id: 3, name: 'Carrot', category: 'Vegetable' },
  { id: 4, name: 'Cheese', category: 'Dairy' },
  { id: 5, name: 'Banana', category: 'Fruit' },
]

function normalizeCategory(category) {
  if (category === 'Fruits') return 'Fruit'
  return category
}

function ProductList({ category = 'All', onCategoryChange, onAddToCart }) {
  const selectedCategory = normalizeCategory(category)
  const visibleProducts = sampleProducts.filter(
    (product) => selectedCategory === 'All' || product.category === selectedCategory
  )

  return (
    <div>
      <select value={selectedCategory === 'All' ? 'All' : selectedCategory} onChange={onCategoryChange}>
        <option value="All">All</option>
        <option value="Fruits">Fruit</option>
        <option value="Fruit">Fruit</option>
        <option value="Dairy">Dairy</option>
        <option value="Vegetable">Vegetable</option>
      </select>

      {visibleProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul>
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProductList