import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
    return (
        <div className="relative flex flex-col w-full h-full" id="About me">
            <video
            autoPlay
            loop
            muted
            className="absolute rotate-180 top-[-340px] w-full h-full left-0 z-[1] object-cover">
                <source src="/blackhole.webm" type="video/webm" />
            </video>
        </div>
    );
};

export default Hero;