import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";
import Form from "../Form/Form";
import TextPopAnimation from "../TextPopAnimation/TextPopAnimation";

const Contact = () => {
  return (
    <div className="max-w-full lg:max-w-7xl mx-auto p-7 mb-4">
      <TextPopAnimation text={"Contact"}></TextPopAnimation>

      <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start my-10">
        <div className="mb-8 md:mb-0 mt-0 md:mt-6">
          {/* Address */}
          <div>
            <div className="mb-6">
              <div className="flex justify-start items-center">
                <IoLocation className="text-3xl text-white" />
                <h4 className="text-white text-lg font-semibold">Address</h4>
              </div>
              <div className="text-md text-white ml-8">
                <p>Konabari, Gazipur</p>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-6">
              <div className="flex justify-start items-center">
                <FiPhoneCall className="text-2xl text-white mr-2" />
                <h4 className="text-white text-lg font-semibold">Contact</h4>
              </div>
              <div className="text-md text-white ml-8">
                <p>Mobile: ++8801638294372</p>
                <p>Email: nadimmahmud.webdev@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <Form></Form>
      </div>
    </div>
  );
};

export default Contact;
