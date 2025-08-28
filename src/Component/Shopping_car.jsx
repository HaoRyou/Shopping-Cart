import stores from '../assets/store.svg';
import cart from '../assets/cart-outline.svg';
import { Link } from 'react-router-dom';

export default function Shopping_car({ count }) {
  return (
    <div>
      <div>
        <img src={stores} alt="store" height={50} width={50} />
        <p>
          Welcome to my Store, <h3>Search:</h3>
          <input type="text" placeholder="Serch items..." />
        </p>
        <Link to="/Usercart">
          <img src={cart} alt="cartss" height={50} width={50} />
        </Link>
        <p>{count}</p>
      </div>
    </div>
  );
}
