import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
 
  const { title, image_url, price, quantity, id } = props.item;

  

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
    }));
  }

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  }

  const decreaseItemHandler = () => {
    dispatch(cartActions.decreaseItemQuantity(id));
  }

  return (
    <div className="card-item">
      <span className="close-btn" onClick={removeItemHandler}>X</span>
      <div className="row">
        <div className="col-8">
          <div className="d-flex flex-column justify-content-between h-100">
            <div>
              <h4 className="title">{title}</h4>
              <h5 className="personalizations">
                <span></span>
              </h5>
            </div>
            <div className="quantity-price">
              <div className="quantity-wrapper">
                <div className="quantity">
                  <span onClick={decreaseItemHandler}>-</span>
                  <span>{quantity}</span>
                  <span onClick={addItemHandler}>+</span>
                </div>
              </div>
              <div className="price-wrapper d-flex align-items-center">
                <h6 className="price">{props.currency} {price * quantity}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <img src={image_url} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
