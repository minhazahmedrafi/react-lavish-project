import React, { Fragment } from 'react'
import HeroSection from '../HeroSection'
import {homeObjFour} from './Data'
import Pricing from './Pricing'

function Products() {
    return (
        <Fragment>
            <HeroSection {...homeObjFour}></HeroSection>
        </Fragment>
    )
}

export default Products
