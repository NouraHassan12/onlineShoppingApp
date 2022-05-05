import {
  Typography,
  Grid,
  Paper,
  FormControl,
  Input,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useStyles } from "./CartStyle";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
  getTotals,
} from "../../Redux/Cart/Cart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SideMenu from "../../Common/SideMenu/sideMenu.jsx";
function Cart({
  CartData,
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
  getTotals,
}) {
  const classes = useStyles();

  useEffect(() => {
    getTotals();
  }, [CartData]);

  const handleAddToCart = (cartItem) => {
    addToCart(cartItem);
  };
  const handleDecreaseCart = (cartItem) => {
    decreaseCart(cartItem);
  };
  const handleRemoveFromCart = (cartItem) => {
    removeFromCart(cartItem);
  };
  const handleClearCart = () => {
    clearCart();
  };

  return (
    <>
      <SideMenu />
      <div className={classes.cartContainer}>
        <Typography variant="h3" align="left">
          Shopping Cart
        </Typography>
        {CartData.cartItems.length === 0 ? (
          <div className={classes.cartEmpty}>
            <Typography variant="p">Your cart is currently empty</Typography>
            <div style={{ marginTop: "16px" }}>
              <Link to="/home_Page">
                <span style={{ marginLeft: "16px" }}>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <Grid className={classes.titles}>
              <Typography variant="h6">Product</Typography>
              <Typography variant="h6">Price </Typography>
              <Typography variant="h6">Quantity </Typography>
              <Typography variant="h6" style={{ justifySelf: "right" }}>
                Total{" "}
              </Typography>
            </Grid>
            <Grid>
              {CartData.cartItems &&
                CartData.cartItems.map((cartItem) => (
                  <Grid
                    className={classes.cartItems}
                    style={{
                      borderTop: "1px solid rgb(187, 187, 187)",
                      padding: " 16px 0px",
                    }}
                    key={cartItem.id}
                  >
                    <div className={classes.cartProduct}>
                      <img
                        src={cartItem.image}
                        style={{
                          width: "100px",
                          maxWidth: "100%",
                          marginRight: "16px",
                        }}
                        alt={cartItem.title}
                      />
                      <div>
                        <Typography
                          variant="h5"
                          className={classes.ProductTitle}
                        >
                          {cartItem.title}
                        </Typography>

                        <Button
                          style={{
                            border: " none",
                            outline: "none",
                            marginTop: "9px",
                            cursor: "pointer",
                            background: "none",
                            color: "gray",
                          }}
                          onClick={() => handleRemoveFromCart(cartItem)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                    <Typography variant="subtitle1">
                      ${cartItem.price}
                    </Typography>
                    <div className={classes.cartQuantity}>
                      <Button onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </Button>
                      <Typography style={{ marginTop: "5px" }}>
                        {cartItem.cartQuantity}
                      </Typography>
                      <Button onClick={() => handleAddToCart(cartItem)}>
                        +
                      </Button>
                    </div>
                    <Typography className={classes.cartProductTotalPrice}>
                      ${cartItem.price * cartItem.cartQuantity}
                    </Typography>
                  </Grid>
                ))}
            </Grid>

            <div className={classes.cartSummary}>
              <div className={classes.cartCheckout}>
                <div className={classes.subtotal}>
                  <span className={classes.amount}>Subtotal</span>
                  <span className={classes.amount}>
                    ${CartData.cartTotalAmount}
                  </span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>

                <Button
                  className={classes.clearBtn}
                  onClick={() => handleClearCart()}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
        )}
        <div className={classes.continueShopping}>
          <Link
            to="/home_Page"
            style={{
              color: "gray",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>
              {" "}
              <ArrowBackIcon />
              Continue Shopping
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    CartData: state.cart,
  };
};
export default connect(mapStateToProps, {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
  getTotals,
})(Cart);
