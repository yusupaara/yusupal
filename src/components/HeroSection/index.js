import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../Sidebar/ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
const [hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Fast And Secure Etherium Token</HeroH1>
            <HeroP>Sign up for a new account and get free etherium worth $250 in your account</HeroP>
            <HeroBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary="true"
                dark="true">
                    Get started {hover? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
    
        </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;