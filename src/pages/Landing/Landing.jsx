import React from "react";

// Material imports
import {
  Box,
  Chip,
  Container,
  Link,
  Stack,
  Typography,
  Card,
  Avatar,
  Rating,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider } from "@mui/material/styles";

// React-Router-Dom
// import { Link } from 'react-router-dom';

// Assets
import theme from "../../assets/theme";
import { AppStore, PhoneMockup, PlayStore } from "../../assets";

import { Button } from "../../components";

import useStyles from "./styles";

const Landing = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box component='main' className={classes.wrapper}>
        <Box className={classes.jumbotron} minHeight='90vh'>
          <Container
            sx={{
              mx: { md: 5 },
              pt: { xs: 3, md: 0 },
            }}
          >
            <Grid container direction={{ xs: "column", md: "row" }}>
              <Grid xs>
                <Typography variant='h3' color='#ffffff' mb={1.5}>
                  The quick, inexpensive platform to travel your goods
                </Typography>
                <Typography variant='body1' color='#ffffff' mb={{ xs: 3, mb: 0 }}>
                  DSptach is a platform to transport goods and services from anywhere in Nigeria.
                  With our quality drivers registered to the platform, your goods are in safe hands.
                </Typography>
              </Grid>
              <Grid xs md={4.5}>
                <img className={classes.phoneMockup} src={PhoneMockup} alt='Phone Mock-up' />
              </Grid>
            </Grid>

            <Typography variant='body1' color='#ffffff' mb={1}>
              Download the DSpatch app
            </Typography>

            <Stack direction='row' spacing={{ xs: 4, md: 8 }}>
              <img className={classes.store} src={AppStore} alt='Install from Apple App Store' />
              <img className={classes.store} src={PlayStore} alt='Install from Google Play Store' />
            </Stack>
          </Container>
        </Box>

        <Box className={classes.miniJumbo}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, .5)",
              minHeight: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container
              sx={{
                py: 5,
              }}
            >
              <Grid container direction={{ xs: "column", md: "row" }}>
                <Grid xs>
                  <Typography variant='h4' color='#ffffff' mb={1}>
                    Become a DSpatcher and get paid
                  </Typography>
                  <Typography variant='subtitle2' color='#ffffff'>
                    Drive on the platform with the most active rider network.
                  </Typography>
                  <Typography variant='subtitle2' color='#ffffff' mb={{ xs: 3, md: 0 }}>
                    Be your own boss and choose your own schedule.
                  </Typography>
                </Grid>
                <Grid
                  xs
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "end" },
                    alignItems: "center",
                  }}
                >
                  <Button
                    size='small'
                    sx={{
                      borderRadius: "30px",
                      backgroundColor: "#ffffff",
                      color: "#092C4C",
                      height: "fit-content",

                      "&:hover": {
                        backgroundColor: "#E9E9E9",
                      },
                    }}
                  >
                    Sign Up to DSpatch
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>

        {/* SERVICES */}
        <Container
          sx={{
            my: 10,
          }}
        >
          <Stack direction={{ md: "row" }} spacing={{ xs: 6, md: 12 }}>
            <Grid container direction={{ xs: "row", md: "column" }}>
              <Grid
                xs={4}
                md='auto'
                mb={{ md: 4 }}
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Box
                  className={classes.placeholders}
                  sx={{
                    height: { xs: "80px", md: "150px" },
                    width: { xs: "80px", md: "150px" },
                    marginRight: { xs: 2, md: 0 },
                    borderRadius: "100%",
                  }}
                ></Box>
              </Grid>

              <Grid
                xs
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: { md: "center" },
                }}
              >
                <Typography variant='h5' fontSize={{ xs: 20, md: 24 }} fontWeight={600} mb={1}>
                  Find a Ride
                </Typography>
                <Typography variant='subtitle1' fontSize={{ xs: 14, md: 16 }} lineHeight={1.5}>
                  DSpatch offers you ride for your packages in few minutes.
                </Typography>
              </Grid>
            </Grid>

            <Grid container direction={{ xs: "row", md: "column" }}>
              <Grid
                xs={4}
                md='auto'
                mb={{ md: 4 }}
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Box
                  className={classes.placeholders}
                  sx={{
                    height: { xs: "80px", md: "150px" },
                    width: { xs: "80px", md: "150px" },
                    marginRight: { xs: 2, md: 0 },
                    borderRadius: "100%",
                  }}
                ></Box>
              </Grid>

              <Grid
                xs
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: { md: "center" },
                }}
              >
                <Typography variant='h5' fontSize={{ xs: 20, md: 24 }} fontWeight={600} mb={1}>
                  Great Prices
                </Typography>
                <Typography variant='subtitle1' fontSize={{ xs: 14, md: 16 }} lineHeight={1.5}>
                  The finest ride rates in every city are what we strive to provide. Come and have a
                  look!
                </Typography>
              </Grid>
            </Grid>

            <Grid container direction={{ xs: "row", md: "column" }}>
              <Grid
                xs={4}
                md='auto'
                mb={{ md: 4 }}
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Box
                  className={classes.placeholders}
                  sx={{
                    height: { xs: "80px", md: "150px" },
                    width: { xs: "80px", md: "150px" },
                    marginRight: { xs: 2, md: 0 },
                    borderRadius: "100%",
                  }}
                ></Box>
              </Grid>

              <Grid
                xs
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: { md: "center" },
                }}
              >
                <Typography variant='h5' fontSize={{ xs: 20, md: 24 }} fontWeight={600} mb={1}>
                  Easy to use
                </Typography>
                <Typography variant='subtitle1' fontSize={{ xs: 14, md: 16 }} lineHeight={1.5}>
                  Deliver your packages as soon as you can to the desired location.
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Container>

        <Container
          sx={{
            my: 5,
            py: 10,

            [theme.breakpoints.down("sm")]: {
              backgroundColor: "#FAFAFA",
            },
          }}
        >
          <Stack spacing={12}>
            <Grid container direction={{ xs: "column", md: "row" }} columnSpacing={{ md: 6 }}>
              <Grid
                xs
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant='h4' mb={1.5} color='#092C4C'>
                  The greatest delivery personnel you've ever encountered
                </Typography>
                <Typography variant='subtitle2' mb={{ xs: 4, md: 0 }} color='#092C4C'>
                  Meet with great delivery DSpatchers and get the perfect service you want for your
                  customers
                </Typography>
              </Grid>

              <Grid xs>
                <Box
                  className={classes.placeholders}
                  sx={{
                    height: { xs: "214px", md: "380px" },
                    borderBottomRightRadius: { xs: "30px", md: "50px" },
                    borderBottomLeftRadius: { xs: "30px", md: "50px" },
                    borderTopRightRadius: { xs: "6px", md: "10px" },
                    borderTopLeftRadius: { xs: "6px", md: "10px" },
                  }}
                >
                  POTENTIAL DSpatcher's PICTURE(kjds)
                </Box>
              </Grid>
            </Grid>

            <Grid
              container
              direction={{ xs: "column-reverse", md: "row" }}
              columnSpacing={{ md: 6 }}
            >
              <Grid xs>
                <Box
                  className={classes.placeholders}
                  sx={{
                    height: { xs: "214px", md: "380px" },
                    borderBottomRightRadius: { xs: "30px", md: "50px" },
                    borderBottomLeftRadius: { xs: "30px", md: "50px" },
                    borderTopRightRadius: { xs: "6px", md: "10px" },
                    borderTopLeftRadius: { xs: "6px", md: "10px" },
                  }}
                >
                  POTENTIAL DSpatcher's PICTURE(kjds)
                </Box>
              </Grid>

              <Grid
                xs
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant='h4' mb={1.5} color='#092C4C'>
                  Excellent riders and partners ready to deliver
                </Typography>
                <Typography variant='subtitle2' mb={{ xs: 2, md: 0 }} color='#092C4C'>
                  There will always be a DSpatcher nearby to pick up your packages and more because
                  they are spread around over every city.
                </Typography>
                <Button
                  sx={{
                    width: "fit-content",
                    mt: { xs: 0, md: 2 },
                    mb: { xs: 4, md: 0 },
                  }}
                >
                  Sign Up to get started
                </Button>
              </Grid>
            </Grid>

            <Grid container direction={{ xs: "column", md: "row" }} columnSpacing={{ md: 6 }}>
              <Grid
                xs
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant='h4' mb={1.5} color='#092C4C'>
                  Got a Bike?
                </Typography>
                <Typography variant='subtitle2' mb={{ xs: 2, md: 0 }} color='#092C4C'>
                  We want you on the DSpatch Team if you own a bike and want to increase your
                  income. Join the DSpatch team to boost your income. Be your own boss and choose
                  your own schedule.
                </Typography>
                <Button
                  sx={{
                    width: "fit-content",
                    mt: { xs: 0, md: 2 },
                    mb: { xs: 4, md: 0 },
                  }}
                >
                  Partner with Us!
                </Button>
              </Grid>

              <Grid xs>
                <Box
                  className={classes.placeholders}
                  sx={{
                    height: { xs: "214px", md: "380px" },
                    borderBottomRightRadius: { xs: "30px", md: "50px" },
                    borderBottomLeftRadius: { xs: "30px", md: "50px" },
                    borderTopRightRadius: { xs: "6px", md: "10px" },
                    borderTopLeftRadius: { xs: "6px", md: "10px" },
                  }}
                >
                  POTENTIAL DSpatcher's PICTURE(kjds)
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>

        {/* TESTIMONIALS */}
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            my: 10,
          }}
        >
          <Chip label='Testimonials' sx={{ fontWeight: "700", textTransform: "uppercase" }} />
          <Typography
            variant='h4'
            fontWeight={600}
            fontSize={{ xs: 24, md: 32 }}
            textAlign='center'
          >
            Every user has a story to tell.
          </Typography>
          <Typography variant='subtitle1' fontSize={{ xs: 14, md: 16 }} textAlign='center'>
            See how Dspatch changed people's perspectives about their finances and themselves.
          </Typography>

          <Stack spacing={8} direction={{ xs: "column", md: "row" }} my={{ xs: 2, md: 4 }}>
            <Card elevation={6}>
              <CardContent>
                <Rating name='Costumer rating' value={5} readOnly />

                <Typography variant='subtitle2' my={5}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id accusantium
                  doloribus tenetur velit, facere recusandae et, repellat in consequuntur aliquid
                  inventore voluptates veritatis rem.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Avatar alt='Customer' src='/' />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant='subtitle1' fontWeight={600} lineHeight='22px'>
                      Adeniyi John
                    </Typography>
                    <Typography variant='caption'>Founder of E-Genta</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            <Card elevation={6}>
              <CardContent>
                <Rating name='Costumer rating' precision={0.5} value={4.5} readOnly />

                <Typography variant='subtitle2' my={5}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id accusantium
                  doloribus tenetur velit, facere recusandae et, repellat in consequuntur aliquid
                  inventore voluptates veritatis rem.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Avatar alt='Y' src='/' />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant='subtitle1' fontWeight={600} lineHeight='22px'>
                      Yemi Skujyl
                    </Typography>
                    <Typography variant='caption'>Deputy Director at CBC</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            <Card elevation={6}>
              <CardContent>
                <Rating name='Costumer rating' value={4} readOnly />

                <Typography variant='subtitle2' my={5}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id accusantium
                  doloribus tenetur velit, facere recusandae et, repellat in consequuntur aliquid
                  inventore voluptates veritatis rem.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Avatar alt='N' src='/' />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant='subtitle1' fontWeight={600} lineHeight='22px'>
                      Naijablog
                    </Typography>
                    <Typography variant='caption'>@naijablog9ja</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Stack>
        </Container>

        <Box className={classes.jumbotron} minHeight='30vh' py={2} textAlign='center'>
          <Stack>
            <Typography variant='h4' color='#ffffff' mb={5}>
              Ready to send goods to your customer?
            </Typography>

            <Stack direction='row' spacing={{ xs: 4, md: 8 }} justifyContent='center'>
              <img className={classes.store} src={AppStore} alt='Install from Apple App Store' />
              <img className={classes.store} src={PlayStore} alt='Install from Google Play Store' />
            </Stack>

            <Typography variant='caption' mt={6} mx='auto' color='#ffffff'>
              or{" "}
              <Link href='#' color='inherit'>
                Sign Up
              </Link>{" "}
              to start DSpatching
            </Typography>
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Landing;
