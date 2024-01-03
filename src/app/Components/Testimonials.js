'use client'
import { useState } from 'react';

export default function Testimonials(props) {
    let { testimonials, } = props;
    testimonials = testimonials.map((t) => {
        return <div className='testimonial'>
            <h2>"{t.text}"</h2>
            <div className='userDetail'>
                <img src={t['profile-url']} />
                <div className='userInfo'>
                    <h4><b>{t.reviewer_name}</b></h4>
                    <h5>{t.reviewer_designation}</h5>
                </div>
            </div>
        </div>
    })

    const [number, setNumber] = useState(0);

    const handleNextButton = () => {
        number < testimonials.length - 1 ? setNumber(number + 1) : setNumber(0)
    };
    const handlePrevButton = () => {
        number > 0 ? setNumber(number - 1) : setNumber(testimonials.length - 1)
    };

    return (
        <>
            <div className='testimonials'>
                <button onClick={handlePrevButton}>&#60;</button>
                {testimonials[number]}
                <button onClick={handleNextButton}>&#62;</button>
            </div>
        </>
    )
}