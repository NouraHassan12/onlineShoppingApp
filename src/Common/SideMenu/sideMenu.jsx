import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@material-ui/core";
import ListItemButton from "@mui/material/ListItemButton";
import AppsIcon from "@mui/icons-material/Apps";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Badge from "@mui/material/Badge";
import { useStyles } from "./sideMenuStyle";

const drawerWidth = 300;
const drawerBackgroundColor = "#fcf9f9";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

function SideMenu({ CartData }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const listStyle3 = {
    // background: "#fafa00",
    backgroundColor: "#fcf9f9",
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const data = [
    { icon: <LoginIcon />, label: "Login/ Sign up", path: "/" },
    { icon: <AppsIcon />, label: "All Products", path: "/home_Page" },
    { icon: <ShoppingCartIcon />, label: "My Orders", path: "/Cart_Page" },
    {
      icon: (
        <Badge badgeContent={CartData.cartTotalQuantity} color="primary">
          <ShoppingCartCheckoutIcon />
        </Badge>
      ),
      label: "Cart",
      path: "/Cart_Page",
    },
    { icon: <FavoriteIcon />, label: "wishList", path: "/wishList" },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={listStyle3}>
        <Toolbar style={listStyle3}>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            <ShoppingCart style={{ color: "black", fontSize: "40px" }} />
          </Typography>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "10px",
            }}
            to="/Cart_Page"
          >
            <Badge badgeContent={CartData.cartTotalQuantity} color="primary">
              <ShoppingCartCheckoutIcon />
            </Badge>
          </Link>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}></Main>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: drawerBackgroundColor,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}

        <Grid item style={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 24, height: 24 }}
            style={{ margin: "20px 0px", width: "120px", height: "120px" }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6" align="center">
            Don Normane
          </Typography>
          <Typography variant="subtitle1" align="center">
            <small>ID MD 2468</small>
          </Typography>
        </Grid>

        <List style={{ margin: "10px 2px" }}>
          {data.map((item) => (
            <ListItemButton
              key={item.label}
              sx={{ py: 0, minHeight: 32, color: "black" }}
              style={{
                margin: "20px 30px",
                borderBottom: "1px solid #eddfdf",
              }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                }
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: "medium",
                  marginBottom: "15px ",
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
const mapStateToProps = (state) => {
  return {
    CartData: state.cart,
  };
};
export default connect(mapStateToProps, {})(SideMenu);
