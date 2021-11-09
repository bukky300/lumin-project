import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/cart/Cart";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import SubHeader from "./components/Layout/SubHeader";
import Products from "./components/Product/Product";
import { cartActions } from "./store/cart-slice";
import { currencyActions } from "./store/currency-slice";

let isInitial;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  

  useEffect(() => {
    dispatch(currencyActions.getCurrency());
  }, [dispatch]);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("cart"));
    console.log(getData);
    if (getData) {
      dispatch(
        cartActions.replaceCart({
          items: getData.items || [],
          totalQuantity: getData.totalQuantity,
        })
      );
    }
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        })
      );
    }
  }, [cart, dispatch]);

  useEffect(() => {
    let bodyEl = document.querySelector("body")
    if (showCart) {
        bodyEl.style.overflow = 'hidden';
    } else {
        bodyEl.style.overflow = 'unset';
    }
}, [showCart])

  return (
    <Fragment>
      <div className="">
        {showCart && <Cart />}
        <Header />
        <SubHeader />
        <Products />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
