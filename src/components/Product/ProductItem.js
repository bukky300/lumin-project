import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from '../../store/ui-slice';


function ProductItem(props) {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.cur.currency);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const addItemToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.title,
        price: props.price,
        image_url: props.image_url,
      })
    );
  };

  return (
    <div className="product">
      <div className="text-center">
        <img src={props.image_url} alt={props.title} />
      </div>

      <h4 className="title">{props.title}</h4>
      <h2 className="price">{currency} {props.price}.00</h2>
      <button className="btn" onClick={ () => {
        addItemToCart();
        toggleCartHandler();
      }   }>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
