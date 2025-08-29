import Shopping_cart from './Shopping_cart';
import { useState } from 'react';
import ApiReader from './ApiReader';

function Storelist() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [storing, setStoring] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const total = storing.reduce((sum, item) => sum + item.price, 0);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  const handleDelete = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const handleNext = (totalPages) => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleBefore = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleDeletetotal = (index) => {
    setStoring((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddtotal = (item) => {
    setStoring((prev) => [...prev, item]);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Shopping_cart count={count} setIsVisible={setIsVisible} />

      {isVisible && (
        <div>
          <ApiReader page={page} onAdd={handleAdd} setStoring={setStoring} />
          <div style={{ marginTop: '20px' }}>
            <button onClick={handleBefore} disabled={page === 1}>
              Before
            </button>
            <span style={{ margin: '0 15px' }}>Page {page}</span>
            <button onClick={() => handleNext(2)}>Next</button>
          </div>
        </div>
      )}

      {!isVisible && (
        <div className="stored-items">
          <h2>Your Cart</h2>
          {storing.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <>
              {storing.map((item, index) => (
                <div key={index} className="cart-item">
                  <img
                    src={item.image}
                    alt="cart item"
                    height={50}
                    width={50}
                  />
                  <p>Price: ${item.price}</p>
                  <div>
                    <button
                      onClick={() => {
                        handleAddtotal(item), handleAdd();
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        handleDeletetotal(index), handleDelete();
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
              <hr />
              <h3>Total: ${total.toFixed(2)}</h3>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Storelist;
