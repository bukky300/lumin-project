import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Cart.scss";
import Modal from "../../ui/Modal";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import CartItem from "./CartItem";
import { useQuery } from "@apollo/client";
import { GetCurrencyQuery } from "../../Apollo/queries";
import { currencyActions } from "../../store/currency-slice";
import { GetProductsQuery } from "../../Apollo/queries";

export function Cart() {
  const dispatch = useDispatch();
  const { data: Currencies } = useQuery(GetCurrencyQuery);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cartItems = useSelector((state) => state.cart.items);
  const currency = useSelector((state) => state.cur.currency);

  const { loading, error, variables, data, refetch } = useQuery(
    GetProductsQuery,
    {
      variables: { currency },
      fetchPolicy: "cache-first",
    }
  );

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  useEffect(() => {
    refetch({ currency, returnPartialData: true });
  }, [refetch, currency]);

  if (loading) return <option>Loading...</option>;
  if (error) return <option>{console.log(error)}</option>;

  const changeCurrencyHandler = (event) => {
    dispatch(currencyActions.setCurrency(event.target?.value));
    dispatch(currencyActions.getCurrency());
  };

  const filteredCart = cartItems.map((x) => {
    let item = data.products.find((item) => item.id === x.id);
    if (item) {
      return Object.assign({}, x, item);
    }
    return x;
  });

  const calculateTotal = () => {
    let total = 0;
    filteredCart.forEach((item) => (total += item.quantity * item.price));
    return total;
  };

  return (
    <Modal show={showCart} closeModal={toggleCartHandler}>
      <div className="cart-wrapper">
        <div className="upper-div">
          <h6 className="modal-title">Your cart</h6>
          <div className="my-4">
            <select
              name="currency"
              className="form-select"
              onChange={changeCurrencyHandler}
              value={currency}
            >
              {Currencies?.currency &&
                Currencies?.currency.map((car, index) => (
                  <option value={car} key={index}>
                    {car}
                  </option>
                ))}
            </select>
          </div>

          {filteredCart && filteredCart.length === 0 && (
            <div>
              <p className="text-center">There are no items in your cart.</p>
            </div>
          )}
          <div className="cart-item">
            {filteredCart.map((item) => (
              <CartItem
                key={item.id}
                currency={currency}
                item={{
                  id: item.id,
                  title: item.name,
                  quantity: item.quantity,
                  price: item.price,
                  image_url: item.image_url,
                }}
              />
            ))}
          </div>
        </div>
        <div className="lower-div">
          <div className="d-flex justify-content-between mb-5">
            <span className="subtotal">Subtotal</span>
            <span className="total">
              {variables.currency} {calculateTotal()}
            </span>
          </div>
          <button className="btn outline" disabled={!filteredCart.length}>
            Make this a subscription (Save 20%)
          </button>
          <button className="btn solid" disabled={!filteredCart.length}>proceed to checkout</button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
