import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Grid } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { fetchProductDetails } from "../../Redux/ProductDetails/action";
import { useStyles } from "./ProductDetailsStyle";
import SideMenu from "../../Common/SideMenu/sideMenu.jsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Rating from "@mui/material/Rating";
import { Typography } from "@material-ui/core";
import { addToCart } from "../../Redux/Cart/Cart";
import { useHistory } from "react-router-dom";
function ProductDetails({
  match,
  fetchProductDetails,
  productData,
  addToCart,
}) {
  const classes = useStyles();
  const history = useHistory();
  const productID = match.params.id;

  useEffect(() => {
    fetchProductDetails(productID);
  }, [productID]);

  const handleAddToCart = (product) => {
    addToCart(product);
    history.push("/Cart_Page");
  };

  return (
    <>
      <SideMenu />
      <div class="container">
        <Grid className={classes.card}>
          <Grid class="row">
            <div class="col-md-6">
              <img className={classes.img} src={productData.product.image} />
            </div>
            <div class="col-md-6">
              <Typography variant="h3" className={classes.ProductTitle}>
                {productData.product.title}
              </Typography>
              <Typography
                variant="h5"
                className={classes.ProductTitle}
                style={{ color: "gray" }}
              >
                {productData.product.category}
              </Typography>
              <Grid class={classes.rate}>
                {/* <Rating
                    name="size-large"
                    defaultValue={productData.product.rating.rate}
                    size="large"
                  /> */}
              </Grid>
              <Typography
                variant="subtitle1"
                className={classes.productDescription}
              >
                {productData.product.description}
              </Typography>
              <Typography variant="h5" class={classes.price}>
                current price: <span>${productData.product.price}</span>
              </Typography>

              <div className={classes.addToCart}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<ShoppingCart />}
                  onClick={() => handleAddToCart(productData.product)}
                  className={classes.addToCart}
                >
                  Add to Cart
                </Button>

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
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    productData: state.productDtails,
  };
};

export default connect(mapStateToProps, { fetchProductDetails, addToCart })(
  ProductDetails
);
