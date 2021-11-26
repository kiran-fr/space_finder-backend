
// UI
import { Container } from 'react-bootstrap'
import { Card , Grid, Avatar } from "@mui/material"

// ASSETS
import landingPageImage from "../../assets/images/girl-img.png"
import moneyIcon from "../../assets/images/money.svg"
import timeSymbol from "../../assets/images/time-symbol.svg"
import callIcon from "../../assets/images/call-icon.svg";
import location from "../../assets/images/location.svg"
import jobIcon from "../../assets/images/instant-job-icon.svg"
//Sample data
import { SampleData } from "../../SampleData"

// CONSTANT
const content = [
    {
        img:moneyIcon,
        text:"Earn £200 to £800 per week"
    },
    {
        img:timeSymbol,
        text:"Flexible Work hours"
    },
    {
        img:callIcon,
        text:"Helpful cleaner support team"
    }, 
    {
        img:location,
        text:"Work in your area"
    },
    {
        img:jobIcon,
        text:"Instant availbility of jobs"
    }
]

console.log("SampleData",SampleData)
// MAIN FUNCTION
export default function LandingPage() {
    return (
            <>
                <div className="landing-page-img">
                    <img  src={landingPageImage} />
                </div>
                <div className='landing-page'>
                    
                <Container className='landing-page--content'>
                    <h2 className='landing-page__heading'>Starts as Cleaner</h2>
                    <p className='landing-page__sub-heading'>Flexible working opportunites and support can benefit everyone!</p>
                    <div className='col-md-12'>
                        {content.map(item=>
                                <div className='landing-page-icon'>
                                <div className='landing-page-icon__img'> <img src={item.img} /></div>
                                <div className='landing-page-icon__text'>{item.text}</div>
                            </div>
                            )}
                    </div>

                    <div className='btn-container'>
                        <button className='btn-join'>Join Us</button>
                    </div>
                    <div>
                        <i className="fa fa-angle-down" style={{color:"red"}} ></i>
                    </div>
                    <div>
                        <h1 className='landing-page__heading'>Testimonials</h1>
                        <div className='ifram-container'>
                            <iframe  src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe>
                        </div>
                    </div>
                    <div className='landing-page__form-cleaner'>
                        <h1 className='landing-page__heading'>From our cleaner</h1>
                        <div>
                            {SampleData.map(item=>{
                                return(
                                    <Card className="landing-page__form-our-container">
                                        <Grid container spacing={2} justifyContent={"space-between"} alignItems={"center"}>
                                            <Grid item xs={3} md={3} alignItems={"space-around"} justifyContent={"space-around"} justifyItems={"space-around"} >
                                            <div className='landing-page__form-our-container__rightside-content'>
                                                    <div className='landing-page__form-our-container__img'><Avatar  alt="Remy Sharp" src={item.img} /></div>
                                                    <p className='landing-page__form-our-container__name'>{item.name}</p>
                                                    <img src={item.flag} />
                                            </div>
                                            </Grid>
                                            <Grid item xs={8} md={8}>
                                                <p className='landing-page__form-our-container__content-text'>{item.content}</p>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </Container>
                </div>
            </>
    )
}
