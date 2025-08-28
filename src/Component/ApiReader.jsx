import { useState, useEffect } from 'react';
import Usercart from './Usercart';
import '../Styles/ApiReader.css';

function ApiReader({ page, onAdd }) {
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [storing, setStoring] = useState([]);

  const limit = 12;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const pagedItems = allItems.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setAllItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading) return <p>Loading items...</p>;

  const handleAdd = (item) => {
    setStoring((prev) => [...prev, { image: item.image, price: item.price }]);
    onAdd;
  };

  return (
    <div className="shop-grid">
      {pagedItems.map((p) => (
        <div key={p.id} className="Item">
          <h4>{p.title}</h4>
          <img src={p.image} alt={p.title} />
          <h5>Description: {p.description}</h5>
          <h5>Price: ${p.price}</h5>

          <button onClick={handleAdd(p)}>Add</button>
        </div>
      ))}
    </div>
  );
}

export default ApiReader;
