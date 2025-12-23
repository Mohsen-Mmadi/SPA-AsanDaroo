import React from "react";
import AsanDarooImage from "@/assets/logo/logo.svg";
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center p-2 bgNavbar">
      <div className="bg-sky-300 rounded-full px-10 mx-2">
        <img
          src={AsanDarooImage}
          alt="AsanDarooImage"
          className="w-[50dvw] h-[50dvh]"
        />
      </div>
      <div className="flex gap-4 text-2xl justify-center items-center text-blue-600 mt-5 mx-2 mb-3">
        <a href="#" target="_blank" rel="noreferrer">
          {" "}
          <IoLogoWhatsapp className="hover:text-green-500 transition" />{" "}
        </a>{" "}
        <a href="#" target="_blank" rel="noreferrer">
          {" "}
          <FaTelegram className="hover:text-blue-400 transition" />{" "}
        </a>{" "}
        <a href="#" target="_blank" rel="noreferrer">
          {" "}
          <BsInstagram className="hover:text-pink-500 transition" />{" "}
        </a>{" "}
      </div>
      <div className="flex flex-col justify-center items-center text-center text-wrap mx-2">
        <h3 className="fontText text-2xl text-black">تماس با ما</h3>
        <p className="fontTitr "><FaLocationDot className="inline"/>استان کرمان، شهرستان کرمان، بلوار فردوسی خیابان وحشی بافقی کوچه شمال 3 شرقی 3 پلاک 28 طبقه همکف</p>{" "}
        <p className="fontTitr "><BsFillTelephoneFill className="inline"/>034-3640</p>
        <p className="fontTitr "><CiMobile3 className="inline"/>034-3640</p>
      </div>
      <div className="flex flex-col justify-center items-center text-center text-wrap mx-2">
         <h3 className="fontText text-2xl text-black">دسترسی سریع</h3>
        <p className="fontTitr cursor-pointer hover:opacity-90">مراکز خدمات</p>{" "}
        <p className="fontTitr cursor-pointer hover:opacity-90"><BsFillTelephoneFill className="inline"/>درباره ما</p>
        <p className="fontTitr cursor-pointer hover:opacity-90"><CiMobile3 className="inline"/>قوانین و مقررات</p>
      </div>
      <div className="flex gap-20 justify-between items-center  mx-2">
        <img src={AsanDarooImage} alt="AsanDarooImage" className="w-[25dvw] h-[25dvh]" />
        <img src={AsanDarooImage} alt="AsanDarooImage" className="w-[25dvw] h-[25dvh]" />
      </div>
    </footer>
  );
}

export default Footer;
