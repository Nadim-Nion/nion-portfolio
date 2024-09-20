import React from 'react';
import { useForm } from "react-hook-form"

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Field */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white text-lg">What is your name?</span>
                    </div>
                    <input type="text" placeholder='Your Name' {...register("name", { required: true })} className="input input-bordered w-full max-w-xs" />
                </label>
                {errors.name && <span className='text-red-700'>Name Field is required</span>}
                <br />

                {/* Email Field */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white text-lg">What is your email?</span>
                    </div>
                    <input type="text" placeholder='Your Email' {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                </label>
                {errors.email && <span className='text-red-700'>Email field is required</span>}
                <br />

                {/* Text Area Field */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white text-lg">What is your message?</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Your Message"  {...register("message", { required: true })}></textarea>
                </label>
                {errors.message && <span className='text-red-700'>Text Area field is required</span>}
                <br />

                <button className="btn btn-primary my-5 w-full">Send Message</button>
            </form>
        </div>
    );
};

export default Form;