import React from 'react'

import iphone from "../../assets/iphone-14-pro.webp"
import mac from "../../assets/mac-system-cut.jfif"
import HeroSection from './HeroSection'
import FeaturedProducts from './FeaturedProducts'

const HomePage = () => {
  return (
    <div>
        <HeroSection title="Buy iPhone 14 Pro" subtitle="Experience the power of latest iPhone 14 with our mostr Pro camera ever" link="/product/6669b67b3f1d3846e1fbf098" image={iphone} />

        <FeaturedProducts />

        <HeroSection title="Build the ultimate setup" subtitle="You can add Studio Display and colour-matched Magic accessories to your bag after you configure yourMac mini." link="/product/6669b67b3f1d3846e1fbf0a0" image={mac} />
    </div>
  )
}

export default HomePage