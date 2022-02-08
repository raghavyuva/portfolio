import React, { useEffect } from 'react';
import {
    RiSendPlaneLine
} from "react-icons/ri";
import { useForm, ValidationError } from '@formspree/react';
const CallToAction = () => {

    const [state, handleSubmit] = useForm("mrgjpdvv");

    return <div id='contact'>
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  text-primary-text">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Say Hi! (⁀ᗢ⁀) </h2>
                    <p>
                        Though, I am fairly introverted myself. I do reply to messages as long as my human interaction battery lasts. Coding, work,
                        movies or even writing poems, anything is cool. So feel free to message me on any of my social media or shoot me an email
                    </p>
                    <div className="text-coolGray-600"></div>
                </div>
                <img src="https://opendoodles.s3-us-west-1.amazonaws.com/selfie.png" alt="" className="p-6 h-52 md:h-64" />
            </div>
            <form onSubmit={handleSubmit} method="post" accept-charset="utf-8" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label for="name" className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" name='full-name' className="w-full p-3 rounded bg-secondary" />
                </div>
                <div>
                    <label for="email" className="text-sm">Email</label>
                    <input id="email" type="email" name='email' className="w-full p-3 rounded bg-secondary" />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label for="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" name='message' className="w-full p-3 rounded bg-secondary"></textarea>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <button type="submit" disabled={state.submitting} className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-positive text-coolGray-50">
                    <div className='flex  justify-center items-center'>
                        Send Message<RiSendPlaneLine size={25} className='text-primary-text ml-2' />
                    </div>
                </button>
                {
                    state?.succeeded &&
                    <p>thank you for contacting,</p>
                }
            </form>
        </div>
    </div>;
};

export default CallToAction;
