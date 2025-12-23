import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaStore } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

function NavbarDown() {
  return (
    <nav
      id="NavbarDown"
      className="absolute
      bottom-0 right-0 left-0
      gap-x-4
      text-center
      w-full
    fontTitr text-2xl p-3 z-40
    bg-slate-100/5
    backdrop-blur-md
    border border-blue-400/30
    shadow-lg
    flex justify-around items-center
  "
    >
      <div className="cursor-pointer text-blue-400 hover:opacity-85">
        <IoHomeSharp className="block m-auto text-2xl" />
        خانه
      </div>

      <div className="cursor-pointer text-blue-400 hover:opacity-85">
        <FaCartShopping className="block m-auto text-2xl" />
        سبد خرید
      </div>

      <div className="cursor-pointer text-blue-400 hover:opacity-85">
        <FaStore className="block m-auto text-2xl" />
        فروشگاه ها
      </div>

      <div className="cursor-pointer text-blue-400 hover:opacity-85">
        <FaUserAlt className="block m-auto text-2xl" />
        ورود
      </div>
    </nav>
  );
}

export default NavbarDown;
