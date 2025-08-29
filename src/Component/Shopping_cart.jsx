import stores from '../assets/store.svg';
import cart from '../assets/cart-outline.svg';
import '../Styles/Shopping_cart.css';

export default function Shopping_cart({ count, setIsVisible }) {
  return (
    <div className="shopping-bar">
      <button className="noboarder" onClick={() => setIsVisible(false)}>
        <img src={stores} alt="store" height={50} width={50} />
      </button>
      <h2>Weclome to Jin's Store</h2>
      {/* Cart Section */}
      <div className="cart-section">
        <button className="noboarder" onClick={() => setIsVisible(true)}>
          <img src={cart} alt="cart" height={50} width={50} />
        </button>
        <p>{count}</p>
      </div>
    </div>
  );
}
