import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Jonathan Sins" description="Best Mediterranean food that I've had in a long time!"/>
            <TestimonialCard name="Billy Bob" description="It was honestly a surpise how well the spices sat in my mouth. Amazing food!"/>
            <TestimonialCard name="Katherine Decopia" description="Little Lemon.. Wow! Can't wait to bring my daughter's son."/>
            <TestimonialCard name="Alexandra Texas" description="Great food, welcoming staff.. I'm coming here every week now."/>
            <TestimonialCard name="Yolanda Adams" description="Great place for late night outings with the girls!."/>
            <TestimonialCard name="Jim Carney" description="Heaven on a plate! You've gotta come."/>
            <TestimonialCard name="Mary J Hives" description="Got off the plane & knew this is where we had to eat. Incredible quality."/>
            <TestimonialCard name="Michael Jorban" description="This is the food I eat when I know something is wrong, 
            because it makes it all better!"/>
             </Carousel>
    )
}