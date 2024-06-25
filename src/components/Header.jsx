import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { drawerWidth, drawerItems } from "../constant";

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ width: "150px", m: "0 auto", p: 1 }}>
        <img src="/react-hunting-cube/logo.png" width="100%" />
      </Box>
      <Divider />
      <List>
        {drawerItems.map((item) => (
          <ListItem key={item} disablePadding>
            <NavLink
              to={item.path}
              style={{ width: "100%", color: "#0009" }}
              className={({ isActive }) => [isActive ? "active" : ""].join(" ")}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText
                  primary={item.label}
                  sx={{
                    span: {
                      fontFamily: "Rubik, sans-serif",
                    },
                  }}
                />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#fff",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, outline: "none !important", display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#FA4A0C" }} />
          </IconButton>
          <Box sx={{ width: "120px" }}>
            <img src="/react-hunting-cube/logo.png" width="100%" />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" }, ml: "auto" }}>
            <List sx={{ display: "flex" }}>
              {drawerItems.map((item) => (
                <ListItem key={item} sx={{ width: "auto" }} disablePadding>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      [isActive ? "active" : ""].join(" ")
                    }
                    style={{
                      width: "100%",
                      color: "#0009",
                      textDecoration: "none",
                    }}
                  >
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText
                        primary={item.label}
                        sx={{
                          span: {
                            fontFamily: "Rubik, sans-serif",
                          },
                        }}
                      />
                    </ListItemButton>
                  </NavLink>
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default Header;
