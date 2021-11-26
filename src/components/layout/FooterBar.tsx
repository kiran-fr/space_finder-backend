import { Grid, ListItem } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'

export default function FooterBar() {
    return (
            <div>
                <div className='footer-container'>
                    <Container>
                        {/* <Grid xs={12}>
                            <ListItem>@2021 Vrishkar</ListItem>
                        </Grid>  
                        <Grid direction={"row"} >
                            <Grid xs={4}>
                                <ListItem>Privacy policy</ListItem>
                            </Grid>   
                            <Grid xs={4}>
                                <ListItem>Terms & conditions</ListItem>
                            </Grid> 
                        </Grid>   */}
                        <div className='footer-container__content-one'>
                            <p className='footer-container--firs-text'>@2021 Vrishkar</p>
                        </div>
                        <div className='footer-container__content-two'>
                            <div className='footer-container--second-text'>Privacy policy</div>
                            <div className='footer-container--third-text'>Terms & conditions</div>
                        </div>
                    </Container>
                </div>
            </div>
      )
}
