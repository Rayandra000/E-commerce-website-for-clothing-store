import React from "react";
import footerLogo from "../../assets/logoFooter.png";
import Banner from "../../assets/footer-banner.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const BannerImg = {
  background: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLink = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const FooterEnd = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit minus cumque sunt expedita assumenda veniam suscipit consectetur distinctio unde ut.</p>
          </div>
          {/* footer link */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                <ul className="flex flex-col gap-3">
                  {FooterLink.map((link) => (
                    <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" key={link.title}>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 ">
              <div>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Links</h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLink.map((link) => (
                      <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" key={link.title}>
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* social link  */}
              <div>
                <div className="flex items-center gap-3 mt-8">
                  <a href="#" className="hover:text-primary hover:translate-x-1 duration-300">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#" className="hover:text-primary hover:translate-x-1 duration-300">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#" className="hover:text-primary hover:translate-x-1 duration-300">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Noida, Uttar Pradesh</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <FaMobileAlt />
                    <p>+91 123456789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterEnd;
