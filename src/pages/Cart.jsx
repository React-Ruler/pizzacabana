import { ShoppingCart, Trash } from "phosphor-react";
import { Link } from "react-router-dom";
import useCartStore from "../zustand/store";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const removeItemFromCart = useCartStore((state) => state.removeItemFromCart);
  const ItemQuantity = useCartStore((state) => state.ItemQuantity);

  return (
    <section className={`section`}>
      <div className={`container`}>
        <div className={`table-container`}>
          <table className={`table is-striped is-fullwidth`}>
            <thead>
              <tr>
                <th className={``}>
                  <abbr title="Position">products</abbr>
                </th>
                <th className={`has-text-centered`}>
                  <abbr title="Price">Price</abbr>
                </th>
                <th className={`has-text-centered`}>
                  <abbr title="Quantity">Quantity</abbr>
                </th>
                <th className={`has-text-centered`}>
                  <abbr title="Total">Total</abbr>
                </th>
                <th className={`has-text-centered`}>
                  <abbr title="Remove">Remove</abbr>
                </th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th className={``}>
                  <abbr title="Position">products</abbr>
                </th>
                <th className={`has-text-centered`}>
                  <abbr title="Price">Price</abbr>
                </th>
                <th className={`has-text-centered`}>
                  <abbr title="Quantity">Quantity</abbr>
                </th>
                <th className={`has-text-centered`}>
                  <abbr title="Total">Total</abbr>
                </th>
                <th className={`has-text-centered`}>
                  <abbr title="Remove">Remove</abbr>
                </th>
              </tr>
            </tfoot>
            <tbody>
              {cartItems.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>
                      <figure className={`image is-96x96`}>
                        <img src={product.productImage} />
                      </figure>
                    </td>
                    <td className={`has-text-centered`}>${product.productPrice} </td>
                    <td>
                      <div className={`buttons has-addons is-centered`}>
                        <button
                          onClick={() => decrease(product)}
                          className={`button is-small`}
                        >
                          -
                        </button>
                        <button className={`button is-static is-small`}>
                          <strong>{ItemQuantity}</strong>
                        </button>
                        <button
                          onClick={() => increase(product)}
                          className={`button is-small`}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className={`has-text-centered`}></td>
                    <td className={`has-text-centered`}>
                      <a onClick={() => removeItemFromCart(product)}>
                        <Trash />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={`has-text-centered`}>
          <ShoppingCart size={200} fontWeight={900} />

          <p className={`title has-text-warning has-text-weight-semibold`}>
            Your Cart is empty
          </p>
          <p className={`subtitle`}>Proceed to store and start shopping</p>
          <Link
            to="/OrderNow"
            className={`button is-danger has-text-weight-semibold`}
          >
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
