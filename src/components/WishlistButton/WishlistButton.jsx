import { useLoading, useUserData, useAuth } from "../../hooks";
import {
  removeFromWishlist,
  addToWishlist,
} from "../../contexts/Providers/UserDataProvider/helpers";
import { toast } from "react-toastify";

function WishlistButton({ prod, classes }) {
  const {
    authState: { token, isAuthenticated },
  } = useAuth();
  const { loading: wishlistLoading, setLoading: setWishlistLoading } =
    useLoading();
  const { userDataState, userDataDispatch } = useUserData();
  const { wishlist } = userDataState;

  const addWishlistHandler = (product) => {
    if (!isAuthenticated) {
      toast.info("Need to login first");
      return;
    }
    addToWishlist(product, token, setWishlistLoading, userDataDispatch);
  };

  const removeWishlistHandler = (id) => {
    if (!isAuthenticated) {
      toast.info("Need to login first");
      return;
    }
    removeFromWishlist(id, token, setWishlistLoading, userDataDispatch);
  };

  const buttonElement = wishlist.some(
    (wishlistItem) => wishlistItem._id === prod._id
  ) ? (
    <span className={classes}>
      <i
        class="fa-solid fa-heart"
        onClick={() => removeWishlistHandler(prod._id)}
      ></i>
    </span>
  ) : (
    <span className={classes}>
      <i className="far fa-heart" onClick={() => addWishlistHandler(prod)}></i>
    </span>
  );

  return buttonElement;
}

export default WishlistButton;
