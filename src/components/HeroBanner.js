import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Poster from "../assets/images/poster.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "70px", xs: "30px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Hub
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="10px"
      >
        Sweat , Smile <br /> and Repeat!
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={1} mt={1}>
        Check out the most effective exercises!
      </Typography>
      <Button
        variant="contained"
        color="error"
        mb={4}
        href="#exercies"
        sx={{ padding: "10px" }}
      >
        Explore Exercises!
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
        }}
        fontSize="160px"
      >
        Exercises
      </Typography>
      <img src={Poster} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
