import './testimonials.css'

import TestimonilsSlider from '../slider/TestimonilsSlider'
const Testimonials = ({ testimonials }) => {
    return (
        <section className='testimonials'>
            <p className='main-title'>تجربة الخريجين</p>
            <TestimonilsSlider testimonials={ testimonials } />

        </section>
    )
}

export default Testimonials
