import React, { Fragment } from 'react'
import HeroSection from '../HeroSection'
import {homeObjOne} from './Data'
import Pricing from './Pricing'

function Services() {
    return (
        <Fragment>
            <Pricing></Pricing>
            <HeroSection {...homeObjOne}></HeroSection>
        </Fragment>
    )
}

export default Services
