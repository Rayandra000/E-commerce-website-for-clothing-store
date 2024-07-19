import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { FaSquareEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Booking = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white bg-gray-100">
      <div className="pt-14 pb-12">
        <div className="container flex justify-center items-center flex-col">
          <div className="text-center mb-10 max-w-[600px]mx-auto">
            <p data-aos="fade-up" className="text-sm text-primary">
              Booking Products for you
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Booking Contact
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400 pr-20 pl-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi, magnam animi deleniti perferendis placeat reiciendis nihil voluptas odio voluptates nulla natus eius. Accusantium laborum, hic possimus distinctio
              labore officia rem cumque perferendis? Explicabo, perferendis. Facilis quidem reiciendis ab assumenda eos, soluta inventore dolorum esse. Praesentium animi optio molestiae consectetur.
            </p>
          </div>
          <div data-aos="zoom-in" className=" dark:bg-gray-800 bg-gray-300 flex justify-center items-center gap-12 w-[900px] h-[400px] rounded-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.923006298452!2d113.44504942132724!3d-8.210498005651154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6896ecff74257%3A0x5f40ba5b0ef8a21a!2sJNE%20Agen%20Semboro!5e0!3m2!1sen!2sid!4v1679717935174!5m2!1sen!2sid"
              allowfullscreen=""
              loading="lazy"
              className="w-[500px] h-[300px]"
            ></iframe>
            <form action="">
              <div className="grid gap-4">
                <div>
                  <FaUserLarge className="absolute top-[5.5rem] text-gray-500 ml-2" />
                  <input type="text" placeholder="Name" className="pt-4 pb-4 pl-8 pr-8 text-gray-800 rounded-sm" />
                </div>
                <div>
                  <FaSquareEnvelope className="absolute top-[10rem] text-gray-500 ml-2" />
                  <input type="text" placeholder="Email" className="pt-4 pb-4 pl-8 pr-8  text-gray-800 rounded-sm" />
                </div>
                <div>
                  <FaPhone className="absolute top-[14.5rem] text-gray-500 ml-2" />
                  <input type="text" placeholder="No.Hp" className="pt-4 pb-4 pl-8 pr-8  text-gray-800 rounded-sm" />
                </div>
              </div>
              <div className="flex justify-center mt-4 items-center ">
                <button className=" bg-primary hover:bg-black dark:hover:bg-primary dark:bg-secondary hover:scale-105 text-white pt-3 pb-3 pr-8 pl-8  duration-300 rounded-sm" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
