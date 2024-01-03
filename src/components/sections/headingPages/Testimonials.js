import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard name="Jonathan Sins" description="Best Mediterranean food that I've had in a long time!"/>
                <TestimonialCard name="Billy Bob" description="It was honestly a surpise how well the spices sat in my mouth. Amazing food!"/>
                <TestimonialCard name="Katherine Decopia" description="Little Lemon.. Wow! Can't wait to bring my daughter's son."/>
                <TestimonialCard name="Alexandra Texas" description="Great food, welcoming staff.. I'm coming here every week now."/>
                <TestimonialCard name="Yolanda Adams" description="Great place for late night outings with the girls!."/>
                <TestimonialCard name="Jim Carney" description="Heaven on a plate! You've gotta come."/>
                <TestimonialCard name="Michael Jorban" description="This is the food I eat when I know something is wrong, 
            because it makes it all better!"/>
                <TestimonialCard name="Mary J Hives" description="Got off the plane & knew this is where we had to eat. Incredible quality."/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}