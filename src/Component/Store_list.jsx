import Shopping_car from './Shopping_car';
import { useState } from 'react';
import ApiReader from './ApiReader';
import Usercart from './Usercart';

function Storelist() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  const handleNext = (totalPages) => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleBefore = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Shopping_car count={count} />
      <ApiReader page={page} onAdd={handleAdd} />
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleBefore} disabled={page === 1}>
          Before
        </button>
        <span style={{ margin: '0 15px' }}>Page {page}</span>
        <button onClick={() => handleNext(2)}>Next</button>
      </div>
    </div>
  );
}

export default Storelist;
