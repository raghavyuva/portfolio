import React from 'react';
import { referrals } from '../static/Index';
import ReviewCard from './ReviewCard';

const Testimonial = () => {
    return (
        <section className="my-8  text-primary-text">
            <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                <h1 className="p-4 text-4xl font-semibold leading-none text-center">Aww! These People have endorsed</h1>
                it's immense pleasure for me to be blessed and recommended by these fellow seniors
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                {
                    referrals?.map((refer, index) => (
                        <ReviewCard
                            name={refer.name}
                            quote={refer.quote}
                            worksat={refer.worksat}
                            key={index}
                        />
                    ))
                }
            </div>
        </section>
    )
};

export default Testimonial;


