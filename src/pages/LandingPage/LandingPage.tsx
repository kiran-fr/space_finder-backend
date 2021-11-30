
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

// CUSTOM  COMPONENT
import MobileScreenLandingPage from "./MobileScreenLandingPage"

//Sample data
import { SampleData } from "../../SampleData"
import DescktopScreen from "./DesktopScreenLandingPage"
console.log("SampleData",SampleData)
// MAIN FUNCTION
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
        text:"Instant availbuility of jobs"
    }
]
export default function LandingPages() {
    return (
           <div className='landing-page'>
                {/* <MobileScreenLandingPage/> */}
                <DescktopScreen content={content}/>
            
           </div>
    )
}
