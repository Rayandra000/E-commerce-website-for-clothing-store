import React from "react";
import baju1 from "../../assets/118-102x102.jpg";
import baju2 from "../../assets/616-103x103.jpg";
import baju3 from "../../assets/736-104x104.jpg";
import baju4 from "../../assets/902-101x101.jpg";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem vitae distinctio ducimus? Consectetur, animi sapiente.",
    img: baju1,
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem vitae distinctio ducimus? Consectetur, animi sapiente.",
    img: baju2,
  },
  {
    id: 3,
    name: "Virat Kholi",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem vitae distinctio ducimus? Consectetur, animi sapiente.",
    img: baju3,
  },
  {
    id: 4,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem vitae distinctio ducimus? Consectetur, animi sapiente.",
    img: baju4,
  },
];
const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 dark:bg-black dark:text-white">
      <div className="container">
        {/* // Header section */}
        <div
          data-aos="fade-up"
          className="text-center mb-5 max-w-[600px]
            mx-auto"
        >
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem vitae distinctio ducimus? Consectetur, animi sapiente.
          </p>
        </div>
        {/* testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div key={data.id} className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/50 relative">
                  <div className="mb-4">
                    <img src={data.img} alt="" className="rounded-full w-20 h-20" />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500 dark:text-gray-400">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">{data.name}</h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Testimonial;
