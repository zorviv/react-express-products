import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch products. Make sure the backend server is running on port 5000.');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="App">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <div className="error-container">
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={fetchProducts} className="retry-button">Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product List</h1>
        <p>Browse our collection of products</p>
      </header>
      
      <div className="products-container">
        {products.length === 0 ? (
          <p className="no-products">No products available</p>
        ) : (
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                </div>
                <button className="buy-button">Add to Cart</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
