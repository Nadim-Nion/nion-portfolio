import React from "react";
import { useForm } from "react-hook-form";
import AnimatedSubmitButton from "../AnimatedSubmitButton/AnimatedSubmitButton";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full md:w-[500px] lg:w-[600px] p-4 rounded">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-white text-lg">
              What is your name?
            </span>
          </div>
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: true })}
            className="input input-bordered w-full placeholder:text-slate-800 placeholder:text-lg"
          />
        </label>
        {errors.name && (
          <span className="text-red-700">Name Field is required</span>
        )}
        <br />

        {/* Email Field */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-white text-lg">
              What is your email?
            </span>
          </div>
          <input
            type="text"
            placeholder="Your Email"
            {...register("email", { required: true })}
            className="input input-bordered w-full placeholder:text-slate-800 placeholder:text-lg"
          />
        </label>
        {errors.email && (
          <span className="text-red-700">Email field is required</span>
        )}
        <br />

        {/* Text Area Field */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-white text-lg">
              What is your message?
            </span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24 placeholder:text-slate-800 placeholder:text-lg"
            placeholder="Your Message"
            {...register("message", { required: true })}
          ></textarea>
        </label>
        {errors.message && (
          <span className="text-red-700">Text Area field is required</span>
        )}
        <br />
        <AnimatedSubmitButton></AnimatedSubmitButton>
      </form>
    </div>
  );
};

export default Form;
