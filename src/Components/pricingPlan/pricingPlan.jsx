import React from "react";
import { makeStyles } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import xtestimonial from "../../Assets/images/xtestimonial.jpg";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import InventoryIcon from "@mui/icons-material/Inventory";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Box from "@mui/material/Box";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({}));
export const PricingPlan = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography
        className={classes.plans}
        container
        spacing={0}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 12,
          marginLeft: 24,
        }}
      >
        <Box
          className={classes.box}
          sx={{
            border: 1,
            borderColor: "lightgray",
            py: 6,
            px: 4,
            mx: 1,
            my: 1,
            "&:hover": {
              Color: "#07CAD8",
              borderColor: "#07CAD8",
              cursor: "pointer",
            },
          }}
        >
          <AutorenewIcon sx={{ fontSize: "5rem", color: "#07CAD8" }} />
          <Typography variant='h6' sx={{ fontFamily: "cursive" }}>
            Strategic Planning
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, <br></br>consectetur adipisicing elit,
            sed do eiusmod.
          </Typography>
        </Box>
        <Box
          sx={{
            border: 1,
            borderColor: "lightgray",
            py: 6,
            px: 4,
            mx: 1,
            my: 1,
            "&:hover": {
              Color: "#07CAD8",
              borderColor: "#07CAD8",
              cursor: "pointer",
            },
          }}
        >
          <InventoryIcon sx={{ fontSize: "5rem", color: "#07CAD8" }} />
          <Typography variant='h6' sx={{ fontFamily: "cursive" }}>
            Trades And Stocks
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, <br></br>consectetur adipisicing elit,
            sed do eiusmod.
          </Typography>
        </Box>
        <Box
          sx={{
            border: 1,
            borderColor: "lightgray",
            py: 6,
            px: 4,
            mx: 1,
            my: 1,
            "&:hover": {
              Color: "#07CAD8",
              borderColor: "#07CAD8",
              cursor: "pointer",
            },
          }}
        >
          <ThumbUpIcon sx={{ fontSize: "5rem", color: "#07CAD8" }} />
          <Typography variant='h6' sx={{ fontFamily: "cursive" }}>
            Audit & Assurance
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, <br></br>consectetur adipisicing elit,
            sed do eiusmod.
          </Typography>
        </Box>
      </Typography>
    </ThemeProvider>
  );
};
