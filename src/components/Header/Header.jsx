import { Link, useNavigate } from "react-router-dom";
import { useAuth, useUserData } from "../../hooks";
import { ProductSearch } from "../../components/index";
import "./Header.css";
export const Header = () => {
    const { authState, authDispatch } = useAuth();
    const { userDataState } = useUserData();
    const { isAuthenticated } = authState;
    const navigate = useNavigate();

    const { wishlist, cart } = userDataState;
    const searchHandler = (e) => {
      navigate(`/product/${JSON.parse(e.target.getAttribute("product"))._id}`);
    };
  return (
    <div>
      <nav className="navigation-bar d-flex flex-center">
        <div className="nav-section">
          <div className="nav-logo nav-section-items">
            <Link to="/" className="navigation-logo">
              <img
                src="https://i.postimg.cc/15YGpnZM/logo.webp"
                alt="quickcart logo"
              />
            </Link>
          </div>
        </div>

        <ProductSearch prodFunc={searchHandler} classes={"search w-50"} />

        <div className="nav-section">
          <ul className="nav-icons list-style-none d-flex flex-center ">
            <li className="list-inline-item">
              {isAuthenticated ? (
                <button
                  className="btn btn-solid-primary m-2"
                  onClick={() => authDispatch({ type: "LOGOUT" })}
                >
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-solid-primary m-2">Login</button>
                </Link>
              )}
            </li>

            <li className="list-inline-item">
              <Link to="/wishlist" className="nav-icon-link link-no-style">
                <div className="badge-wrap">
                  <i className="far fa-heart  badge-icon  "></i>
                  <span className="badge-status badge-number">
                    {wishlist.length}
                  </span>
                </div>
              </Link>
            </li>

            <li className="list-inline-item">
              <Link to="/cart" className="nav-icon-link link-no-style">
                <div className="badge-wrap">
                  <i className="fa fa-cart-shopping badge-icon "></i>
                  <span className="badge-status badge-number">
                    {cart.length}
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
