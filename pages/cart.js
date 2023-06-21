import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_PRODUCT } from "../componants/redux/actions/type";

export default function Cart() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);
  console.log(state);
 
  return (
    <>
      <h1 className="cart-title">cart page</h1>

      <div className="cart-container">
        {state.length === 0 && ( <h1>cart is empty</h1>)}
        {state.map((item) => {
          return (
            <>
              <div className="product-contain" key={item.key}>
                <h1>{item.title}</h1>
                <img src={item.images[0]} />

                <Button
                  onClick={() =>
                    dispatch({ type: DELETE_PRODUCT, payload: item.id })
                  }
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

Cart.Layouts = "L2";
