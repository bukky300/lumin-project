import "./Products.scss";
import { GetProductsQuery } from "../../Apollo/queries";
import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

function Products() {
  const currency = useSelector((state) => state.cur.currency);

  const { loading, error, data } = useQuery(GetProductsQuery, {
    variables: { currency },
  });

  if (loading) {
    return (
      <section className="loading">
        <div className="container">
          <div className="row">
            {[1, 2].map((p) => (
              <div className="col-6">
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7 bg-secondary"></span>
                  <span className="placeholder col-4 bg-secondary"></span>
                  <span className="placeholder col-4 bg-secondary"></span>
                  <span className="placeholder col-6 bg-secondary"></span>
                  <span className="placeholder col-8 bg-secondary"></span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (error) {
    return <p className="p-5 text-center">Something Went wrong.</p>;
  }

  return (
    <Fragment>
      <section className="products-section">
        {data?.products &&
          data.products?.map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item?.title}
              image_url={item?.image_url}
              price={item?.price}
            />
        ))}
      </section>
    </Fragment>
  );
}

export default Products;
