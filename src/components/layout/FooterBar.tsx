import { Grid, ListItem } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import vrishkarLogo from "../../assets/images/vrishkar-logo.svg"
export default function FooterBar() {
  return (
    <div>
      <div className="footer-container">
        <Grid container justifyContent={'space-between'} style={{padding:20}} >
          <Grid  className="footer-img">
              <img src={vrishkarLogo} className="footer-img" />
          </Grid>
          <Grid  >
            <Container>
              <div className="footer-container__content-one">
                <p className="footer-container--firs-text">@2021 Vrishkar</p>
              </div>
              <div className="footer-container__content-two">
                <div className="footer-container--second-text">
                  Privacy policy
                </div>
                <div className="footer-container--third-text">
                  Terms & conditions
                </div>
              </div>
            </Container>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
