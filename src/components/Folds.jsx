import { FOLDS } from "../products/folds";
import useStore from "../zustand/store";
import { motion } from "framer-motion";

const Folds = () => {
  const addToCart = useStore((state) => state.increase);

  return (
    <div className="columns is-multiline">
      {FOLDS.map((product) => {
        return (
          <motion.div
            className="column is-one-quarter"
            key={product.id}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          >
            <div className="card">
              <div className="card-image">
                <img src={product.productImage} alt="" />
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="is-size-7 has-text-weight-bold">
                      {product.productName}
                    </p>

                    <p className="is-size-7 has-text-weight-normal">
                      ₦{product.productPrice}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="content">
                  <button
                    onClick={addToCart}
                    className="button is-small is-responsive is-danger has-text-weight-semibold"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Folds;
