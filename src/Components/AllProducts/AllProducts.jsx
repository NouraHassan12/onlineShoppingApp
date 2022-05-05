import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Divider,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Rating,
  Button,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { connect } from "react-redux";
import { fetchProducts } from "../../Redux/ProductsList/action";
import { addToCart } from "../../Redux/Cart/Cart";
import { addToWishList } from "../../Redux/WishList/wishListReducer";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useStyles } from "./AllProductsStyle";
import { useHistory } from "react-router-dom";

const AllProuducts = ({
  item,
  fetchProducts,
  productsData,
  addToCart,
  addToWishList,
}) => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    history.push("/Cart_Page");
  };
  const handleAddToWishList = (product) => {
    addToWishList(product);
    history.push("/wishList");
  };
  return (
    <>
      <Container maxWidth="lg">
        <Divider></Divider>
        <Typography
          variant="h4"
          align="left"
          style={{ marginTop: "30px" }}
          fixed="top"
        >
          SPECIAL PRODUCTS
        </Typography>
      </Container>

      <Container>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                marginTop: "32px",
              }}
            >
              {productsData?.products.map((product, index) => (
                <Grid key={index} item>
                  <Card className={classes.cartContainer}>
                    <Badge
                      onClick={() => handleAddToWishList(product)}
                      badgeContent={
                        <Tooltip title="Add To WishList">
                          <FavoriteBorderIcon />
                        </Tooltip>
                      }
                      // color="secondary"
                      style={{
                        marginTop: "20px",
                        color: "#4a5de5",
                        cursor: "pointer",
                      }}
                    ></Badge>

                    <Link
                      to={`/product_details/${product.id}`}
                      className={classes.productImg}
                    >
                      <Tooltip title="View Product Details">
                        <CardMedia
                          component="img"
                          image={product.image}
                          alt="product"
                        />
                      </Tooltip>
                    </Link>

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        className={classes.ProductTitle}
                      >
                        {product.title}
                      </Typography>

                      <span style={{ color: "gray" }}>{product.category}</span>
                      <Typography
                        sx={{
                          color: "text.primary",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                        variant="subtitle1"
                        color="text.secondary"
                      >
                        ${product.price}
                      </Typography>
                      <Grid
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<ShoppingCart />}
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </Button>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    productsData: state.products,
  };
};

export default connect(mapStateToProps, {
  fetchProducts,
  addToCart,
  addToWishList,
})(AllProuducts);
