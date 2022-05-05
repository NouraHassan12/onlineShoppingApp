import React from "react";
import cover from "../../Common/assets/Images/cart_8.jpg";
import cover2 from "../../Common/assets/Images/222.jpg";
import cover3 from "../../Common/assets/Images/cart_4.jpg";
import { Carousel } from "react-bootstrap";
import { Grid } from "@material-ui/core";
import Categories from "../Ctegories/Categories.jsx";
import AllProducts from "../AllProducts/AllProducts.jsx";
import SideMenu from "../../Common/SideMenu/sideMenu.jsx";
function Home() {
  return (
    <>
      <SideMenu />
      <Grid item md={12}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ maxHeight: "460px", width: "100%" }}
              src={cover}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ maxHeight: "460px", width: "100%" }}
              src={cover2}
              alt="Second slide"
            />

            <Carousel.Caption style={{ color: "black" }}>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ maxHeight: "460px", width: "100%" }}
              src={cover3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Grid>
      <Categories />
      <AllProducts />
    </>
  );
}

export default Home;
