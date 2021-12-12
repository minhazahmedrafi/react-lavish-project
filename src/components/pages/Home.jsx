import React, { Fragment } from 'react'
import HeroSection from '../HeroSection'
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'
import Pricing from './Pricing'

function Home() {
    return (
        <Fragment>
            <HeroSection {...homeObjOne}></HeroSection>
            <Pricing></Pricing>
            <HeroSection {...homeObjThree}></HeroSection>
            <HeroSection {...homeObjTwo}></HeroSection>
            <Pricing></Pricing>
            <HeroSection {...homeObjFour}></HeroSection>
        </Fragment>
    )
}

export default Home
