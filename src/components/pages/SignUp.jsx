import React, { Fragment } from 'react'
import HeroSection from '../HeroSection'
import {homeObjThree} from './Data'
import Pricing from './Pricing'

function SignUp() {
    return (
        <Fragment>
            <HeroSection {...homeObjThree}></HeroSection>
        </Fragment>
    )
}

export default SignUp
