import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img2 from "../../Assets/images/xsection_bg03.jpg";
import heroimg from "../../Assets/images/xhero_img.jpg";
import client from "../../Assets/images/client.jpg";
import { Avatar, makeStyles } from "@material-ui/core";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import InventoryIcon from "@mui/icons-material/Inventory";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Box from "@mui/material/Box";
import xtestimonial from "../../Assets/images/xtestimonial.jpg";
import xproject_list2 from "../../Assets/images/xproject_list2.jpg";
import xproject_list1 from "../../Assets/images/xproject_list1.jpg";
import xproject_list5 from "../../Assets/images/xproject_list5.jpg";
import xproject_list3 from "../../Assets/images/xproject_list3.jpg";
import xproject_list4 from "../../Assets/images/xproject_list4.jpg";
import xHomepage_testi from "../../Assets/images/xHomepage_testi.jpg";
import xstartup_bg from "../../Assets/images/xstartup_bg.jpg";
import person from "../../Assets/images/person.jpg";
import xdavid from "../../Assets/images/xdavid.jpg";
import img1 from "../../Assets/images/startup.webp";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  homeimage: {
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
  },
  aboutimage1: {
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
  },
  aboutimage2: {
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
  },
  content: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
  },
  plans: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
  },
  plansbox: {
    [theme.breakpoints.down("sm")]: {
      padding: "20%",
    },
  },
  imageList: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  xtestimonial: {
    [theme.breakpoints.down("md")]: {
      paddingTop: 96,
    },
  },

  checkcircletext: {
    [theme.breakpoints.down("lg")]: {
      paddingBottom: "35px",
    },
  },
  addictionimages: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
  },
  addiction1: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
  },
  addiction2: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      py: "12px",
    },
  },
  message: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      fontSize: "28px",
    },
  },
  button: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "40px",
    },
  },
  footer: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      flexwrap: "wrap",
      width: "100%",
    },
  },
  footer1: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "40px",
    },
  },
  footer2: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "40px",
    },
  },
  footer3: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "40px",
    },
  },
  footer1Service: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "20px",
      py: "12px",
    },
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "20px",
      paddingBottom: "25px",
    },
  },
  copyright: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      paddingTop: "30px",
    },
  },
  scrollToTop: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  facebookIcon: {
    border: `1px solid white`,
    color: "black",
    "&:hover": {
      backgroundColor: "blue",
      border: "none",
      color: "white",
      cursor: "pointer",
    },
  },
  globeIcon: {
    border: `1px solid white`,
    color: "black",
    "&:hover": {
      backgroundColor: "blue",
      border: "none",
      color: "white",
      cursor: "pointer",
    },
  },
  InstagramIcon: {
    border: `1px solid white`,
    color: "black",
    "&:hover": {
      backgroundColor: "red",
      border: "none",
      color: "white",
      cursor: "pointer",
    },
  },
  twitterIcon: {
    border: `1px solid white`,
    color: "black",
    "&:hover": {
      backgroundColor: "blue",
      border: "none",
      color: "white",
      cursor: "pointer",
    },
  },
}));

export const ContentBox = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: "100vh" }}>
        <CssBaseline />
        <Typography className={classes.content} sx={{ display: "flex" }}>
          <div className={classes.homeimage}>
            <img src={heroimg} />
          </div>
          <div className={classes.business}>
            <Grid
              sx={{
                background: "#040F20",
                paddingTop: 20,
                px: 4,
                height: "100%",
                color: "white",
              }}
              item
              xs={12}
              sm={16}
              md={12}
            >
              <Typography
                variant='h2'
                sx={{
                  fontFamily: "BlinkMacSystemFon",
                }}
              >
                Businees Synergy via Robust Strategies
              </Typography>
              <Typography
                variant='p'
                sx={{
                  fontFamily: "BlinkMacSystemFon",
                  color: "gray",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, esse magni quasi quidem perspiciatis nemo suscipit
                facere sit fuga ad ut numquam earum non praesentium corrupti
                expedita quaerat. Dolores, qui!
              </Typography>
              <Typography variant='h6' sx={{ py: 3 }}>
                View Project
                <ArrowForwardIcon sx={{ color: "#07CAD8" }} />
              </Typography>
              <Typography>
                <img src={img2} />
              </Typography>
            </Grid>
          </div>
        </Typography>

        {/* Sevices Part 3 */}

        <Grid item xs={12} sm={16} md={12} className={classes.service}>
          <Typography sx={{ py: 4 }}>
            <Typography variant='p' sx={{ color: "gray" }}>
              Once you have settled on a business
            </Typography>
            <Typography variant='h4' sx={{ fontFamily: "cursive", mt: 2 }}>
              High Performance Services For Multiple Industries.
            </Typography>
            <Button sx={{ background: "#07CAD8", mt: 2 }} variant='contained'>
              View More
            </Button>
          </Typography>
        </Grid>

        {/* Strategy Plans Part no 4 */}

        <Typography
          className={classes.plans}
          container
          spacing={0}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            justifyContent: "space-evenly",
            py: 12,
          }}
        >
          <Box
            className={classes.plansbox}
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

        {/* Business Content part no 5 */}

        <Typography className={classes.content} sx={{ display: "flex" }}>
          <div className={classes.aboutimage1}>
            <img src={client} />
          </div>
          <div className={classes.business}>
            <Grid
              sx={{
                background: "white",
                color: "#040F20",
                height: "100%",
                px: 4,
                paddingTop: 20,
              }}
              item
              xs={12}
              sm={16}
              md={12}
            >
              <Typography
                variant='p'
                sx={{
                  fontFamily: "BlinkMacSystemFon",
                  color: "gray",
                }}
              >
                All of our Skills In The Fild
              </Typography>
              <Typography
                variant='h4'
                sx={{
                  fontFamily: "BlinkMacSystemFon",
                }}
              >
                Differentiate Yourself And Attractive Attention
              </Typography>
              <Typography
                variant='p'
                sx={{
                  fontFamily: "BlinkMacSystemFon",
                  color: "gray",
                }}
              >
                Tempor incididunt ut labore et cvhjfhore magna aliqua. Ut enim
                ad minim veniam, quis.
              </Typography>
              <Box width='100%' sx={{ mt: 2 }}>
                <Box
                  sx={{ background: "#07CAD8" }}
                  width='89%'
                  height='2%'
                  p={1}
                  my={1.5}
                >
                  Width 89%
                </Box>
                <Box
                  sx={{ background: "#07CAD8" }}
                  width='85%'
                  bgcolor='grey.300'
                  p={1}
                  my={1.5}
                >
                  Width 75%
                </Box>
                <Box
                  sx={{ background: "#07CAD8" }}
                  width='96'
                  bgcolor='grey.300'
                  p={1}
                  my={1.5}
                >
                  Width 96%
                </Box>
              </Box>
            </Grid>
          </div>
        </Typography>

        {/* services part no 6 */}

        <Grid item xs={12} sm={16} md={12} className={classes.service}>
          <Typography sx={{ py: 4 }}>
            <Typography variant='p' sx={{ color: "gray" }}>
              Works That We Done Recently
            </Typography>
            <Typography variant='h4' sx={{ fontFamily: "cursive", mt: 2 }}>
              All startups need to make their business work
            </Typography>
            <Button sx={{ background: "#07CAD8", mt: 2 }} variant='contained'>
              View More
            </Button>
          </Typography>
        </Grid>

        {/* Four Images Part no 7 */}
        {/* <ImageList sx={{ width: "100%", height: 950 }} cols={2}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={`${item.img}`} srcSet={`${item.img}`} />
            </ImageListItem>
          ))}
        </ImageList> */}
        <ImageList className={classes.imageList} sx={{ width: "100%" }}>
          <ImageListItem>
            <img src={xproject_list1} />
            <img src={xproject_list2} />
          </ImageListItem>

          <ImageListItem>
            <img src={xproject_list3} />
            <img src={xproject_list4} />
            <img src={xproject_list5} />
          </ImageListItem>
        </ImageList>

        {/* Testimonial Part no 8 */}

        <Grid xs={12} sm={16} md={12} sx={{ mt: 10 }}>
          <Typography className={classes.xtestimonial}>
            <Typography>
              <img src={xtestimonial} />
            </Typography>
            <Typography sx={{ mt: 3 }} variant='p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dolores consequuntur asperiores voluptatem modi nobis repellat
            </Typography>
            <Typography sx={{ mt: 3 }}>
              <img src={xHomepage_testi} />
            </Typography>
            <Typography sx={{ mt: 3 }} variant='h6'>
              Olivia Gems<br></br> UI/UX Designer
            </Typography>
          </Typography>
        </Grid>

        {/* //Startup Business Work part no 9 */}

        <Typography className={classes.content} sx={{ display: "flex", py: 6 }}>
          <div className={classes.business}>
            <Grid
              sx={{
                background: "#040F20",
                color: "white",
                px: 4,
                height: "100%",
                paddingTop: 12,
              }}
              item
              xs={12}
              sm={16}
              md={12}
            >
              <Typography>
                <img src={img2} />
              </Typography>
              <Typography
                variant='p'
                sx={{
                  fontFamily: "BlinkMacSystemFon",
                  color: "lightgray",
                }}
              >
                Features That You Will Get
              </Typography>
              <Typography
                variant='h3'
                sx={{
                  paddingTop: 8,
                  fontFamily: "BlinkMacSystemFon",
                }}
              >
                All startups need to make their business work
              </Typography>

              <div className={classes.checkcircletext}>
                <Typography sx={{ paddingTop: 4 }}>
                  <CheckCircleOutlineIcon sx={{ color: "#07CAD8" }} />
                  <Typography variant='p'>
                    Having a home based business is a wonderful asset to your
                    life. The problem still stands,
                  </Typography>
                </Typography>

                <Typography sx={{ paddingTop: 4 }}>
                  <CheckCircleOutlineIcon sx={{ color: "#07CAD8" }} />
                  <Typography variant='p'>
                    Having a home based business is a wonderful asset to your
                    life. The problem still stands,
                  </Typography>
                </Typography>

                <Typography sx={{ paddingTop: 4 }}>
                  <CheckCircleOutlineIcon sx={{ color: "#07CAD8" }} />
                  <Typography variant='p'>
                    Having a home based business is a wonderful asset to your
                    life. The problem still stands,
                  </Typography>
                </Typography>
              </div>
            </Grid>
          </div>
          <div className={classes.aboutimage2}>
            <img src={xstartup_bg} />
          </div>
        </Typography>

        {/* Service part  no 10 */}

        <Grid item xs={12} sm={16} md={12} className={classes.service}>
          <Typography sx={{ py: 4 }}>
            <Typography variant='p' sx={{ color: "gray" }}>
              Once you have settled on a business
            </Typography>
            <Typography variant='h4' sx={{ fontFamily: "cursive", mt: 2 }}>
              High Performance Services For Multiple Industries.
            </Typography>
            <Button sx={{ background: "#07CAD8", mt: 2 }} variant='contained'>
              View More
            </Button>
          </Typography>
        </Grid>

        {/* Addiction Images part no 11 */}

        <Grid item xs={12} sm={16} md={12}>
          <Typography
            className={classes.addictionimages}
            sx={{ display: "flex", justifyContent: "space-around", mt: 12 }}
          >
            <div>
              <Typography className={classes.addiction1}>
                <img src={xdavid} />
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  "&:hover": {
                    color: "#07CAD8",
                    cursor: "pointer",
                  },
                }}
              >
                Janauary 28,2022 | No Comments
                <Typography sx={{ fontFamily: "fantasy", fontSize: "1.5rem" }}>
                  Addiction When Gambling Becomes Harness The Power
                </Typography>
                <Typography sx={{ color: "#07CAD8" }}>
                  {" "}
                  ______ Continue Reading
                </Typography>
              </Typography>
            </div>

            <Typography>
              <Typography className={classes.addiction2}>
                <img src={person} />
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  "&:hover": {
                    color: "#07CAD8",
                    cursor: "pointer",
                  },
                }}
              >
                Janauary 28,2022 | No Comments
                <Typography sx={{ fontFamily: "fantasy", fontSize: "1.5rem" }}>
                  Addiction When Gambling Becomes Harness The Power
                </Typography>
                <Typography sx={{ color: "#07CAD8" }}>
                  {" "}
                  ______ Continue Reading
                </Typography>
              </Typography>
            </Typography>
          </Typography>
        </Grid>

        {/* Message Button part no 12 */}

        <Grid item xs={12} sm={16} md={12}>
          <Typography
            className={classes.message}
            variant='h3'
            sx={{
              backgroundColor: "#07CAD8",
              display: "flex",
              justifyContent: "space-around",
              mt: 12,
              padding: 10,
              color: "white",
              fontFamily: "cursive",
            }}
          >
            Send us a message if you<br></br> have an issue with your order.
            <div className={classes.button}>
              <Button
                variant='contained'
                sx={{ backgroundColor: "black", color: "white", py: 3, px: 4 }}
              >
                Contact Now
              </Button>
            </div>
          </Typography>
        </Grid>

        {/* Footer Part no 13 */}

        <Grid item xs={12} sm={16} md={12}>
          <Typography
            sx={{
              backgroundColor: "#020D1E",
              color: "white",
              paddingTop: 12,
              paddingBottom: 3,
            }}
          >
            <Typography
              className={classes.footer}
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Typography variant='h6'>
                <img src={img1} />
              </Typography>
              <div className={classes.footer1}>
                <Typography variant='h5' sx={{ color: "#07CAD8" }}>
                  Services
                </Typography>
                <div className={classes.footer1Service}>
                  <Typography
                    variant='p'
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        py: 2,
                        "&:hover": {
                          color: "#07CAD8",
                          cursor: "pointer",
                        },
                      }}
                    >
                      Marketing
                    </Typography>
                    <Typography
                      sx={{
                        py: 2,
                        "&:hover": {
                          color: "#07CAD8",
                          cursor: "pointer",
                        },
                      }}
                    >
                      SeoService
                    </Typography>
                    <Typography
                      sx={{
                        py: 2,
                        "&:hover": {
                          color: "#07CAD8",
                          cursor: "pointer",
                        },
                      }}
                    >
                      Digital Market
                    </Typography>
                    <Typography
                      sx={{
                        py: 2,
                        "&:hover": {
                          color: "#07CAD8",
                          cursor: "pointer",
                        },
                      }}
                    >
                      Content Create
                    </Typography>
                    <Typography
                      sx={{
                        py: 2,
                        "&:hover": {
                          color: "#07CAD8",
                          cursor: "pointer",
                        },
                      }}
                    >
                      Find Us
                    </Typography>
                  </Typography>
                </div>
              </div>

              <div className={classes.footer2}>
                <Typography variant='h5' sx={{ color: "#07CAD8" }}>
                  Customer Care
                </Typography>
                <Typography
                  variant='p'
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      py: 2,
                      "&:hover": {
                        color: "#07CAD8",
                        cursor: "pointer",
                      },
                    }}
                  >
                    Contact Us
                  </Typography>
                  <Typography
                    sx={{
                      py: 2,
                      "&:hover": {
                        color: "#07CAD8",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {" "}
                    About Us
                  </Typography>
                  <Typography
                    sx={{
                      py: 2,
                      "&:hover": {
                        color: "#07CAD8",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {" "}
                    News & Articles
                  </Typography>
                  <Typography
                    sx={{
                      py: 2,
                      "&:hover": {
                        color: "#07CAD8",
                        cursor: "pointer",
                      },
                    }}
                  >
                    Privacy Policy
                  </Typography>
                  <Typography
                    sx={{
                      py: 2,
                      "&:hover": {
                        color: "#07CAD8",
                        cursor: "pointer",
                      },
                    }}
                  >
                    Terms of Use
                  </Typography>
                </Typography>
              </div>

              <div className={classes.footer3}>
                <Typography variant='h5' sx={{ color: "#07CAD8" }}>
                  +587-6343-232
                </Typography>
                <div>
                  <Typography
                    variant='p'
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        py: 4,
                        "&:hover": {
                          color: "#07CAD8",
                          cursor: "pointer",
                        },
                      }}
                    >
                      youremail@gmail.com
                    </Typography>
                    <Typography
                      sx={{
                        py: 2,
                        "&:hover": {
                          color: "#07CAD8",
                          cursor: "pointer",
                        },
                      }}
                    >
                      123 East 26th Street, Fifth Floor, <br></br>New York, NY
                      10011
                    </Typography>
                  </Typography>
                </div>

                <Typography
                  className={classes.icon}
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    paddingTop: 3,
                  }}
                >
                  <Avatar className={classes.facebookIcon}>
                    <i class='fab fa-facebook'></i>
                  </Avatar>
                  <Avatar className={classes.globeIcon}>
                    <i class='fab fa-globe'></i>
                  </Avatar>
                  <Avatar className={classes.InstagramIcon}>
                    <i class='fab fa-instagram'></i>
                  </Avatar>
                  <Avatar className={classes.twitterIcon}>
                    <i class='fab fa-twitter'></i>
                  </Avatar>
                </Typography>
              </div>
            </Typography>
            <hr></hr>
            <Typography
              className={classes.copyright}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "lightgray",
                padding: "20px",
              }}
            >
              <div>
                <Typography variant='p'>
                  Copyright ©2022 All rights reserved | This template is made
                  with
                  <FavoriteIcon
                    sx={{
                      color: "#07CAD8",
                    }}
                    onClick={() => window.open("https://www.colorib.com")}
                  />
                  by Colorlib
                </Typography>
              </div>
              <div className={classes.scrollToTop}>
                <Button>
                  <ArrowUpwardIcon
                    onClick={scrollToTop}
                    sx={{
                      backgroundColor: "#07CAD8",
                      color: "white",
                      borderRadius: 28,
                      height: 50,
                      width: 50,
                    }}
                  />
                </Button>
              </div>
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
