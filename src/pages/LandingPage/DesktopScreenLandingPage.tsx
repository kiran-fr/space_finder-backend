import { Grid, Typography, Avatar, Card } from "@mui/material";
import React from "react";
import { Button, Carousel } from "react-bootstrap";
import cleanerImage from "../../assets/images/cleaner-img.svg";
import identicalJobIcon from "../../assets/images/identical-job-icon.svg";
import paymentIcon from "../../assets/images/payment-icon.svg";
import trackJob from "../../assets/images/track-job.svg";
import gardian from "../../assets/images/gradian-image.svg";
import timesImg from "../../assets/images/times-img.svg";
import bbcNewsImg from "../../assets/images/BBC-img.svg";
import landingPageImage from "../../assets/images/girl-img.png";
import { SampleData } from "../../SampleData";
const data = [
  {
    img: identicalJobIcon,
    text: "Choose Identical Jobs",
  },
  {
    img: paymentIcon,
    text: "Safe and Secure Payments",
  },
  {
    img: trackJob,
    text: "Easy and secure portal to keep track of your jobs",
  },
];
export default function DesktopScreenLandingPage(props: any) {
  return (
    <div>
      <div className="landing-page-img">
        <img src={landingPageImage} />
      </div>
      <div className="landing-page__desktop-container">
        <Grid
          container
          direction={"row"}
          spacing={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid md={7} sm={7} item>
            <h2 className="landing-page__heading">Starts as Cleaner</h2>
            <p className="landing-page__sub-heading">
              Flexible working opportunites and support can benefit everyone!
            </p>
            <Grid container justifyContent={"space-between"} item md={12}>
              <Grid item xs={12} sm={6}>
                {props.content.map((item: any) => (
                  <div className="landing-page-icon">
                    <div className="landing-page-icon__img">
                      {" "}
                      <img src={item.img} />
                    </div>
                    <div className="landing-page-icon__text">{item.text}</div>
                  </div>
                ))}
              </Grid>
              <Grid item className="" xs={12} sm={6}>
                {data.map((item) => (
                  <div className="landing-page-icon">
                    <div className="landing-page-icon__img">
                      {" "}
                      <img src={item.img} width="20" />
                    </div>
                    <div className="landing-page-icon__text">{item.text}</div>
                  </div>
                ))}
              </Grid>
            </Grid>
            <Grid className="btn-container" xs={12}>
              <Button className="btn-join">Join Us</Button>
            </Grid>
          </Grid>
          <Grid
            md={5}
            sm={5}
            item
            className="landing-img-container mobile-screen"
          >
            <img src={cleanerImage} className="landing-img" />
          </Grid>
        </Grid>
      </div>
      {/* all images */}
      <Grid
        className=" common-padding"
        container
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid item xs={3} sm={3} className="img">
          <Typography>In the news</Typography>
        </Grid>
        <Grid item xs={3} sm={3} className="logo-image-container">
          <img src={gardian} className="logo-image" />
        </Grid>
        <Grid item sm={3} xs={3} className="logo-image-container">
          <img src={timesImg} className="logo-image" />
        </Grid>
        <Grid item xs={3} sm={3} className="logo-image-container">
          <img src={bbcNewsImg} className="logo-image" />
        </Grid>
      </Grid>
      <Grid
        container
        direction={"row"}
        spacing={3}
        className="testimonial-container common-padding"
      >
        <Grid item sm={6} xs={12}>
          <Grid>
            <h1 className="landing-page__heading">Testimonials</h1>
          </Grid>
          <Grid className="mobile-screen landing-page__sub-content ">
            <div className="landing-page__form-cleaner" style={{}}>
              <div className="carousel-container">
                <Carousel
                  className="carousel"
                  controls={false}
                  indicators={false}
                  interval={1000}
                >
                  {SampleData.map((item) => (
                    <Carousel.Item style={{ padding: 10 }}>
                      <Card className="landing-page__form-our-container">
                        <Grid
                          container
                          // spacing={}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Grid item xs={3} md={3}>
                            <div className="landing-page__form-our-container__rightside-content">
                              <div className="landing-page__form-our-container__img">
                                <Avatar alt="Remy Sharp" src={item.img} />
                              </div>
                              <div>
                                <p className="landing-page__form-our-container__name">
                                  {item.name}
                                </p>
                              </div>
                              <div>
                                <img src={item.flag} />
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={8} md={8}>
                            <p className="landing-page__form-our-container__content-text">
                              {item.content}
                            </p>
                          </Grid>
                        </Grid>
                      </Card>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid item sm={6} xs={12} className="iframe-content">
          <div className="ifram-container">
            <iframe
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              width="100%"
              className="iframes"
            ></iframe>
          </div>
        </Grid>
        <Grid item xs={12} className="desktop-screen">
          <div className="landing-page__form-cleaner">
            <h1 className="landing-page__heading">From our cleaner</h1>
            <div>
              {SampleData.map((item) => {
                return (
                  <Card className="landing-page__form-our-container">
                    <Grid
                      container
                      spacing={2}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Grid
                        item
                        xs={3}
                        md={3}
                        alignItems={"space-around"}
                        justifyContent={"space-around"}
                        justifyItems={"space-around"}
                      >
                        <div className="landing-page__form-our-container__rightside-content">
                          <div className="landing-page__form-our-container__img">
                            <Avatar alt="Remy Sharp" src={item.img} />
                          </div>
                          <p className="landing-page__form-our-container__name">
                            {item.name}
                          </p>
                          <img src={item.flag} />
                        </div>
                      </Grid>
                      <Grid item xs={8} md={8}>
                        <p className="landing-page__form-our-container__content-text">
                          {item.content}
                        </p>
                      </Grid>
                    </Grid>
                  </Card>
                );
              })}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
