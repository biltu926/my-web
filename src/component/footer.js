import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: 5,
        width: '94%',
        position: "relative",
        top: '100px',
        bottom: 0
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} align="center">
            <Typography variant="h6" color="#F7F9F9" gutterBottom align="center">
              Tech stack for this website
            </Typography>
            <Typography variant="body2" color="#D0D3D4">
              <ul>
                <li>Frontend lilbrary: Reactjs</li>
                <li>Hosting: Github pages</li>
              </ul>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} align="center">
            <Typography variant="h6" color="#F7F9F9" gutterBottom align="center">
            Background photo by <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a> on <a href="https://unsplash.com/photos/-hI5dX2ObAs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} align="center">
            <Typography variant="h6" color="#F7F9F9" gutterBottom >
              Connect with me
            </Typography>
            <Link href="https://www.facebook.com/" color="#FDFEFE" >
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              sx={{ pl: 1, pr: 1 }}
             color="#FDFEFE">
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="#FDFEFE" >
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="#F7F9F9" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              columbusitinerary.com
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}