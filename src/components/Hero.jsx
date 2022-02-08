import React from 'react';

const Hero = () => {
    return <div id='about'>
        <aside
            class="relative overflow-hidden text-primary-text  rounded-xl lg:flex shadow-lg"
        >
            <div class="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
                <div class="max-w-xl mx-auto lg:ml-0">
                    <p class="text-sm font-medium">Ohh you found me?. Howdy! I am</p>

                    <p class="mt-2 text-2xl font-bold text-primary-text sm:text-3xl mb-2">
                        Raghavendra Bhat
                    </p>
                    Or you could call me yuva. That works too . . .
                    <p class='text-primary-text font-mono font-extrabold'>
                        Emerging Software Engineer
                    </p>
                    <p class=" lg:mt-4 lg:block">
                        Hey! How nice of you to look at my personal site, Thank you!
                        I am software Developer that specializes at backend apis, front end integrations,recently found myself working in a startup too.
                    </p>
                    <a
                        href="mailto:raghavyuva@gmail.com"
                        class="inline-block px-5 py-3 mt-8 text-sm font-medium text-primary-text   bg-gradient-to-tl from-primary-background to-primary rounded-tl-2xl rounded-br-2xl  shadow-lg  hover:bg-primary"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
            <div class="relative w-full h-full  lg:w-1/2 lg:h-auto">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path className='  fill-secondary shadow-2xl bg-primary' d="M45.4,-79.4C58.2,-71.2,67.4,-57.7,75.8,-43.6C84.2,-29.5,91.9,-14.7,92.6,0.4C93.3,15.6,87.1,31.1,78.5,44.9C69.9,58.7,58.8,70.8,45.4,78.7C31.9,86.5,15.9,90.2,-0.2,90.6C-16.4,91,-32.8,88.1,-46.2,80.2C-59.7,72.3,-70.2,59.5,-76.7,45.3C-83.2,31.1,-85.7,15.5,-86.6,-0.5C-87.5,-16.6,-86.8,-33.1,-79.5,-46C-72.3,-59,-58.5,-68.3,-44.2,-75.6C-29.9,-82.9,-14.9,-88.2,0.7,-89.4C16.3,-90.6,32.6,-87.7,45.4,-79.4Z" transform="translate(100 100)" />
                </svg>
                <img
                    src="https://imgur.com/X8bliWc.png"
                    alt="Raghav Yuva"
                    class="absolute inset-0 object-contain w-full h-full"
                />
            </div>
        </aside>
    </div>;
};

export default Hero;
