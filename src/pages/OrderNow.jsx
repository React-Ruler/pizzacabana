import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { GiBowlOfRice, GiFullPizza, GiHotMeal, GiNoodles, GiWaterBottle, GiSandwich } from "react-icons/gi";
import { IoIosFastforward } from "react-icons/io";

const OrderNow = () => {
  return (
    <section className="section is-medium">
      <Helmet>
        <title>Order® </title>
      </Helmet>
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <article className="panel is-danger">
              <p className="panel-heading">Categories</p>
              <Link className="panel-block has-text-weight-semibold" to="/OrderNow">
                <span className="panel-icon">
                  <GiFullPizza />
                </span>
                Pizzas
              </Link>
              <Link className="panel-block has-text-weight-semibold" to="/OrderNow/Sides">
                <span className="panel-icon">
                  <GiHotMeal />
                </span>
                Sides
              </Link>
              <Link className="panel-block has-text-weight-semibold" to="/OrderNow/Drinks">
                <span className="panel-icon">
                  <GiWaterBottle />
                </span>
                Drinks
              </Link>
              <Link className="panel-block has-text-weight-semibold" to="/OrderNow/Desserts">
                <span className="panel-icon">
                  <IoIosFastforward />
                </span>
                Desserts
              </Link>
              <Link className="panel-block has-text-weight-semibold" to="/OrderNow/Folds">
                <span className="panel-icon">
                  <GiSandwich />
                </span>
                Pizza Folds
              </Link>
              <Link className="panel-block has-text-weight-semibold" to="/OrderNow/Rice">
                <span className="panel-icon">
                  <GiBowlOfRice />
                </span>
               Rice
              </Link>
              <Link className="panel-block has-text-weight-semibold" to="/OrderNow/Pastas">
                <span className="panel-icon">
                  <GiNoodles />
                </span>
                Pastas
              </Link>
            </article>
          </div>
          <div className="column">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderNow;
