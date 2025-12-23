import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { BsList } from "react-icons/bs";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import AsanDarooLogo from "@/assets/logo/logo.svg";

 function Navbar(){
    return (
    <>
        <nav className="bgNavbar sticky flex justify-between items-center gap-2 p-3 ">
          <div className="flex">
            <Sheet>
              <SheetTrigger asChild>
                <button className="cursor-pointer">
                  <BsList className="text-4xl" />
                </button>
              </SheetTrigger>
              <SheetContent className="flex flex-col w-[50dvw]">
               <SheetTitle>
                 <ul
                  className="fontText text-bold text-xl text-center "
                  id="listSheet"
                >
                  <li>
                    <a href="#">صغحه اصلی</a>
                  </li>
                  <li>
                    <a href="#">فروشگاه ها</a>
                  </li>
                  <li>
                    <a href="#">
                      خدمات در محل
                      <FaChevronDown className="inline" />
                    </a>
                  </li>
                  <li>
                    <a href="#">دارویاب</a>
                  </li>
                  <li>
                    <a href="#">پزشکان</a>
                  </li>
                  <button className="bg-sky-800 rounded-md text-white py-2 px-2 text-center w-full cursor-pointer hover:opacity-95 ">
                    <FaArrowRightToBracket className="inline" />
                    ورود یا عضویت
                  </button>
                </ul>
               </SheetTitle>
              </SheetContent>
            </Sheet>
            <span className="inline">
              <a href="https://asandaroo.com">
                <img
                  src={AsanDarooLogo}
                  alt="AsanDarooLogo"
                  className="w-[5rem] h-[3rem] mx-3 items-baseline justify-center"
                />
              </a>
            </span>
          </div>
          <div className="border-4 border-blue-500 fontText rounded-md py-1 px-2 bg-transparent">
            <h2>034-3640</h2>
          </div>
        </nav>
      
    </>
  );
 }
 export default Navbar