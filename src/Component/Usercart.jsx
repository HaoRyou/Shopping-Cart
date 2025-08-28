import Shopping_car from './Shopping_car';
import ApiReader from './ApiReader';

function Usercart(storing) {
  const [count, setCount] = useState(0);
  const handleDelete = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return <div></div>;
}

export default Usercart;
