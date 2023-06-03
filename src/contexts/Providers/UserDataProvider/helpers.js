import axios from "axios";
import {toast} from "react-toastify";


const addToWishlist = async (product,token,toggler,dispatcher) => {
    toggler(true);
    try{

        const response = await axios({
          method: "POST",
          url: "/api/user/wishlist",
          header:{authorization:token},
          data:{product:product},

        });
    }
    catch(e){
        toast.error("Oh no! something broke down!");
    }
}