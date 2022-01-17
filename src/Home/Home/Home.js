import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './Home.css';
import logo from '../../images/logo.png';
import costImg from '../../images/cost-img.png';
import connect from '../../images/connect.svg';
import get from '../../images/get.svg';
import discord from '../../images/Discord Twitter.png';



const Home = () => {
    return (
        <div className="container">

            {/* <Box className='discord-logo' sx={{ display: 'flex', justifyContent: 'end', }}>
                <Box className='discord' sx={{ position: 'fixed', width: '280px', marginRight: "50px" }}>
                    <img src={discord} alt="" />
                </Box>
                <Box sx={{ pt: 10 }}>
                    <img className="logo" style={{ width: '510px', height: '153px', }} src={logo} alt="" />
                </Box>

            </Box> */}

            <Container>

                <div className='header'>
                    <img className='logo-img' src={logo} alt="" />
                    <img className='discord-img' src={discord} alt="" />
                </div>


                <Box className='header-section' sx={{ display: 'flex', justifyContent: 'center', mt: { md: '100px' } }}>
                    <Box className="header-container" sx={{ borderRadius: '20px', p: 10, width: { xs: '100%', md: '900px' } }}>

                        <Typography className='join-us' sx={{ color: 'white', mr: '20px', fontSize: "70px" }} variant="h3">JOIN US TODAY</Typography>

                        <Typography className='join-us' sx={{ color: 'white', textAlign: 'center', pt: 2, pl: { md: '115px' }, fontWeight: 600, fontSize: "70px" }} variant="h3">BIG WIN WITH US</Typography>

                        <Typography sx={{ textAlign: 'center', mt: 4, typography: { xs: 'h4', sm: 'h4', md: 'h1' } }} variant="h1" className="soloto">SOLOTTO</Typography>
                    </Box>
                </Box>


                <Box sx={{ display: 'flex', justifyContent: 'center', mt: { md: '200px', }, mb: '100px' }}>
                    <Box sx={{ width: { md: '800px' }, borderRadius: '20px', }}>

                        <Typography className="soloto what-soloto" sx={{ color: 'yellow', textAlign: 'center' }} variant="h2">WHAT IS SOLOTTO</Typography>

                        <Typography className="des" sx={{ color: 'white', textAlign: 'center', fontWeight: 600, mt: 3 }} variant="h5">

                            This is a new NFT project on the Solana blockchain. It is a 1 in 5000 chance of winning US$1Million. <br />

                            Once the 5000 NFTs are sold out, we will broadcast the drawing live on YouTube. <br />

                            The last four digits of the NFT number are 0000~4999. <br />

                            However, during the “Double Up” campaign, 200 additional NFTs are added for a total of 5200* NFTs. <br />

                            These 200 NFTs can be redeemed immediately <br />

                            *Only during the Double Up campaign</Typography>
                    </Box>
                </Box>


                <Box sx={{ mb: 10, p: 10, borderRadius: '20px', }} className="another-container">
                    <Box>
                        <Typography className="soloto" sx={{ color: 'yellow', mb: 5, textAlign: 'center' }} variant="h2">HOW TO BUY</Typography>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid md={4} item>
                            <Box sx={{ textAlign: 'center', pb: 5, pt: 6 }}>
                                <img style={{ width: "80px" }} src="https://solotto.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Fmillionaire-wallet.90826239542d651e3025a2deff14bd88.png&w=1920&q=75" alt="" />
                            </Box>
                            <Box>
                                <Typography className="des wallet" sx={{ typography: { md: 'h4' }, color: 'white', textAlign: 'center', mb: 3 }}>Connect Wallet</Typography>

                                <Typography className="des how-to" sx={{ typography: { md: 'h6' }, color: 'white', mb: 3 }}>1. Install Phantom  (<a style={{ color: 'white', textDecoration: 'none' }} href="https://phantom.app/">https://phantom.app/</a>) wallet</Typography>

                                <Typography className="des how-to" sx={{ typography: { md: 'h6' }, color: 'white', mb: 3 }}>2. Transfer SOL to your wallet</Typography>

                                <Typography className="des how-to" sx={{ typography: { md: 'h6' }, color: 'white' }}>3. Connect wallet</Typography>

                            </Box>
                        </Grid>

                        <Grid md={4} item>
                            <Box sx={{ textAlign: 'center', pb: 5, pt: 4 }}>
                                <img style={{ width: "50px" }} src="https://solotto.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Fmillionaire-hand.9b192ab4442de23cc4a0fb1339298108.png&w=1920&q=75" alt="" />
                            </Box>
                            <Box>
                                <Typography className="des wallet" sx={{ typography: { md: 'h4' }, color: 'white', textAlign: 'center', mb: 3 }}>Mint SoLotto</Typography>

                                <Typography className="des how-to" sx={{ typography: { md: 'h6' }, color: 'white', mb: 3 }}>1. Select the amount of NFT (s) you wish to purchase and click MINT</Typography>

                                <Typography className="des how-to" sx={{ typography: { md: 'h6' }, color: 'white', mb: 3 }}>2. Click "Approve" on the popup (gas fee and other fees will be applied at your expenses)</Typography>

                                <Typography className="des how-to" sx={{ typography: { md: 'h6' }, color: 'white' }}>3. Then you will see the NFT (s) , in your wallet after a period of time</Typography>

                            </Box>
                        </Grid>

                        <Grid md={4} item>
                            <Box sx={{ textAlign: 'center', pb: 5, pt: 3 }}>
                                <img style={{ width: "80px" }} src="https://solotto.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Fmillionaire-win.348717628fab0828c6b9ae947511864c.png&w=1920&q=75" alt="" />
                            </Box>
                            <Box>
                                <Typography className="des wallet" sx={{ typography: { md: 'h4' }, color: 'white', textAlign: 'center', mb: 3 }}>Win SoLotto</Typography>

                                <Typography className="des how-to" sx={{ typography: { md: 'h6' }, color: 'white', mb: 3 }}>1. Wait for the announcement</Typography>

                                <Typography className="des how-to" sx={{ typography: { md: 'h6' }, color: 'white', mb: 3 }}>2. You will receive a message if you win through Wallet Chat</Typography>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>


                <Box>
                    <Grid container spacing={3}>
                        <Grid md={4} item>
                            <img className='cost-img' style={{ width: '100%', height: '' }} src={costImg} alt="" />
                        </Grid>
                        <Grid md={6} item>
                            <Typography className="soloto cost" sx={{ color: '#00f5ff' }} variant="h2">COST</Typography>
                            <Typography className="des solona" sx={{ color: 'white', fontWeight: 600, mt: 3 }} variant="h5">2 SOL(SOLANA) per Unit.</Typography>
                        </Grid>
                    </Grid>
                </Box>



                <Box sx={{ mt: '100px', mb: '100px' }}>
                    <Typography className="soloto cost" sx={{ color: 'yellow' }} variant="h2">RULES</Typography>
                    <Typography className="des units" sx={{ color: 'white', fontWeight: 600, mt: 3 }} variant="h5">
                        The draw in this project is completely random. No one can manipulate it. <br /> <br />

                        Once the 5000 NFTs are sold out, we will broadcast the lottery live on YouTube. <br /> <br />

                        If you were the purchaser of the 1st Prize NFT,you've just won US$1 million worth <br /> of Solana! <br /><br />

                        You will be contacted by us via wallet chat and asked to respond back to us. <br /> <br />

                        Please send us your NFT and we will verify it. Once we have verified it; we will <br /> send you US$1 million worth of Solana.<br /><br />

                        Players must be of legal age in their respective country to purchase a <br /> lottery ticket (NFT).
                    </Typography>
                </Box>



                <Box sx={{ mb: '100px' }}>
                    <Typography className="soloto unit" sx={{ color: 'yellow', textAlign: 'end' }} variant="h2">NUMBERS OF UNITS</Typography>

                    <Typography className="des units" sx={{ color: 'white', fontWeight: 600, mt: 3, textAlign: 'end' }} variant="h5">5,000 units per event <br /> ※If 5,000 units are sold early, the second event will then be sold.</Typography>
                </Box>



                <Box sx={{ mt: '100px', mb: '100px' }}>
                    <Typography className="soloto" sx={{ color: 'yellow', textAlign: 'center' }} variant="h2">WHY SOLOTTO</Typography>
                    <Typography className="des units" sx={{ color: 'white', fontWeight: 600, mt: 3 }} variant="h5">
                        SoLotto will be managed on the Solana blockchain. <br /> <br />

                        The Solana blockchain is a system with very low risk for potential fraud <br /> and tampering. <br /> <br />

                        The purpose of this project is to give people an equal chance, regardless <br /> of power or anything else, to take a chance and make changes in your life.<br /><br />

                        We are delighted to be able to provide such an opportunity.
                    </Typography>
                </Box>



                <Box sx={{ pb: { md: '100px' } }}>
                    <Grid container spacing={2}>
                        <Grid md={6} item>
                            <Typography className="soloto cost" sx={{ color: 'yellow', }} variant="h2">MINT</Typography>
                            <Typography className="des units" sx={{ color: 'white', fontWeight: 600, mt: 3 }} variant="h5">PRICE: 2SOL($282.26)</Typography>
                            <Typography className="des units" sx={{ color: 'white', fontWeight: 600, mt: 3 }} variant="h5">1 SoLotto: US$289.76 worth of Solana (current rate of 2 SOL)</Typography>
                            <Typography className="des units" sx={{ color: 'white', fontWeight: 600, mt: 3 }} variant="h5">SOL Price: live by <a style={{ color: 'white', textDecoration: 'none' }} href="https://binance.com">binance.com</a></Typography>
                        </Grid>


                        <Grid md={6} item>
                            <Box>
                                <Box className="mint-container" sx={{ width: { md: '450px' } }}>
                                    <Typography className="soloto mint" sx={{ color: 'yellow', textAlign: 'center' }} variant="h5">
                                        <img style={{ width: '85%', height: '' }} src={connect} alt="" />
                                    </Typography>

                                    <Typography className="soloto mint" sx={{ color: 'yellow', textAlign: 'center', mt: 5 }} variant="h5">
                                        <a href="https://binance.com"><img style={{ width: '85%', height: '' }} src={get} alt="" /></a>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>


                <Box sx={{ display: 'flex', justifyContent: 'center', mt: { md: '100px' }, pb: '100px' }}>
                    <Box className="another-container" sx={{ width: '100%', borderRadius: '20px', p: 5 }}>
                        <Box sx={{ mb: 3 }}>
                            <Typography sx={{ textAlign: 'center', pb: { md: '30px' }, pt: { md: '30px' }, typography: { xs: 'h4', sm: 'h4', md: 'h2' } }} className="soloto prize units">PRIZEMONEY</Typography>
                        </Box>

                        <Grid sx={{ mb: 10 }} spacing={1} container>
                            <Grid md={4} item>
                                <Typography className="soloto second units" sx={{ color: 'yellow' }} variant="h4">1ST PRIZE</Typography>
                                <Typography className="des units" sx={{ color: 'white', mt: 3 }} variant="h5">6,670SOL ($0.94Million) ×1</Typography>

                            </Grid>
                            <Grid md={4} item>
                                <Typography className="soloto second units" sx={{ color: 'yellow' }} variant="h4">2ND PRIZE</Typography>
                                <Typography className="des units" sx={{ color: 'white', fontWeight: 600, mt: 3 }} variant="h5">66.7SOL ($9,413.37) ×9</Typography>

                            </Grid>
                            <Grid md={4} item>
                                <Typography className="soloto second units" sx={{ color: 'yellow' }} variant="h4">3RD PRIZE</Typography>
                                <Typography className="des units" sx={{ color: 'white', fontWeight: 600, mt: 3 }} variant="h5">4SOL ($564.52) × 200</Typography>

                            </Grid>
                        </Grid>

                        <Grid direction="row-reverse" spacing={2} sx={{ mb: 10 }} container>
                            <Grid md={4} item>
                                <Typography className="soloto second units" sx={{ color: 'yellow' }} variant="h4">MILLIONAIRE MAKE</Typography>
                                <Typography className="des units" sx={{ color: 'white', fontWeight: 600, mt: 3 }} variant="h5">66.7SOL ×1</Typography>
                            </Grid>
                            <Grid md={4} item>
                                <Typography className="soloto second rate-1" sx={{ color: 'yellow' }} variant="h4">RATE</Typography>

                                <Typography className="des rate-2" sx={{ color: 'white', fontWeight: 600, mt: 3 }} variant="h5">1SOL($141.13)</Typography>
                            </Grid>
                            <Grid md={4} item>
                                <Typography className="des rate-3" sx={{ color: 'white', fontWeight: 600, mt: 3 }} variant="h5">※Mint = Purchase</Typography>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>


                <footer>
                    <Typography sx={{ color: 'white', fontWeight: 600, textAlign: 'center', pb: 3 }} variant="h5">©2021 SOLOTTO. All rights reserved.</Typography>
                </footer>


            </Container>
        </div>
    );
};

export default Home;