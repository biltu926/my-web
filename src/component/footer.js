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
        marginTop: '20%',
        bottom: 0,
        background: 'linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} align="center">
            <Typography variant="h6" color="#F7F9F9" gutterBottom align="center">
              Tech stack for this site
            </Typography>
            <Typography variant="body2" color="#D0D3D4">
                <li>Reactjs</li>
                <li>Vercel</li>
            </Typography>
          </Grid>


          <Grid item xs={12} sm={4} align="center">
            <Typography variant="h6" color="#F7F9F9" gutterBottom >
              Address
            </Typography>
            <div>
              <Typography variant="h6" color="#F7F9F9" gutterBottom>
                112 A, Regent colony, Tollygunge, Kolkata 700040.
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={4} align="center">
            <Typography variant="h6" color="#F7F9F9" gutterBottom >
              Connect with me
            </Typography>
            <Link href="https://www.facebook.com/suprtim6?mibextid=b06tZ0" color="#FDFEFE" target='_blank'>
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/_hello_underworld"
              sx={{ pl: 1, pr: 1 }}
              target='_blank'
              color="#FDFEFE">
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/supratimhldr" color="#FDFEFE" >
              <Twitter />
            </Link>
          </Grid>
        </Grid>

        <Box mt={5}>
          <Typography variant="body2" color="#F7F9F9" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              supratimhldr6@gmail.com
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>

          <Typography>
          <a href="https://iconscout.com/icons/hackerrank" target="_blank">Free Hackerrank Icon</a> by <a href="https://iconscout.com/contributors/icon-54">Icon 54</a> on <a href="https://iconscout.com">IconScout</a>
          <a href="https://iconscout.com/icons/github" target="_blank">Free Github Icon</a> by <a href="https://iconscout.com/contributors/unicons">Unicons Font</a> on <a href="https://iconscout.com">IconScout</a>
          <a href="https://iconscout.com/icons/linkedin" target="_blank">Free Linkedin Logo Icon</a> by <a href="https://iconscout.com/contributors/icons-mind" target="_blank">Icons Mind</a>
          <a href="https://www.flaticon.com/free-icons/python-file" title="python file icons">Python file icons created by Flat Icons - Flaticon</a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}