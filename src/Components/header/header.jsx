import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import img1 from "../../Assets/images/startup.webp";
import { Tabs } from "@material-ui/core";
const drawerWidth = 240;
const navItems = [
  "Home",
  "About",
  "Service",
  "Work",
  "Blog",
  "Page",
  "Contact",
];

export const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [newValue, setNewValue] = useState(0);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleChange = (_, newValue) => {
    setNewValue(newValue);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        backgroundColor: "#040F20",
        textAlign: "center",
        color: "white",
        height: "100%",
      }}
    >
      <Typography variant='h6' sx={{ my: 2 }}>
        <img src={img1} alt='' />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component='nav' sx={{ backgroundColor: "#040F20" }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none", xs: "block" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ display: { xs: "block", sm: "block" } }}
          >
            <img src={img1} alt='' />
          </Typography>
          <Box
            onChange={handleChange}
            sx={{
              color: "blue",
              flexGrow: 1,
              display: { md: "block", xs: "none" },
            }}
          >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
          <Button
            variant='contained'
            sx={{
              backgroundColor: "#07CAD8",
              display: { md: "block", xs: "none" },
            }}
          >
            Contact Now
          </Button>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
};
