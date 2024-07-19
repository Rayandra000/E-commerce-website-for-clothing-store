import React from "react";
import BgContact from "../../assets/orange-pattern.jpg";

const ContactImg = {
  backgroundImage: `URL(${BgContact})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Contact = () => {
  return (
    <div data-aos="zoom-in" className="bg-gray-100 dark:bg-gray-800 text-white" style={ContactImg}>
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">Get Notified About New Products</h1>
          <input type="text" data-aos="fade-up" placeholder="Enter your Email" className="w-full p-3" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
