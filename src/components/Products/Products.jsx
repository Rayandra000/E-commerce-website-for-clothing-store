import React from "react";
import Img1 from "../../assets/women.png.jpg";
import Img2 from "../../assets/women2.jpg";
import Img3 from "../../assets/women3.jpg";
import Img4 from "../../assets/women4.jpg";
import Img5 from "../../assets/women5.jpg";
import Img6 from "../../assets/women6.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Woman Ethnic",
    rating: 5.0,
    author: "white",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    title: "Woman Western",
    rating: 4.5,
    author: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    author: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    author: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashin T-Shirt",
    rating: 4.2,
    author: "Pink",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Man Vitae",
    rating: 4.0,
    author: "Blue",
    aosDelay: "500",
  },
];

const Products = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="pt-14 pb-12">
        <div className="container">
          {/* header scetion */}
          <div
            className="text-center mb-10 max-w-[600px]
            mx-auto"
          >
            <p data-aos="fade-up" className="text-sm text-primary">
              Top Selling Products for you
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Products
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem vitae distinctio ducimus? Consectetur, animi sapiente.
            </p>
          </div>
          {/* body section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div key={data.id} data-aos="fade-up" data-aos-delay={data.aosDelay} className="space-y-3">
                <img src={data.img} alt="" className="h-[220px] w-[150px] object-cover rounded-md" />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div data-aos="fade-up" className="flex justify-center items-center mt-16 mb-10">
            <button className="bg-secondary hover:bg-black dark:bg-secondary dark:hover:bg-primary text-white pt-3 pb-3 pr-10 pl-10 rounded-md text-xl">View All Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
