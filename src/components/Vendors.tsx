import React, { useEffect, useState } from "react";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import {
  Card,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FaSearch } from "react-icons/fa";

function Vendors() {
  interface vendorsDataType {
    id: number;
    name: string;
    img: string;
    address: string;
  }
  type VendorsInstans = vendorsDataType[];
  let [vendorsData, setVendorsData] = useState<VendorsInstans>([]);
  useEffect(() => {
    fetch("http://localhost:3000/vendors")
      .then((res) => res.json())
      .then((data: VendorsInstans) => {
        setVendorsData(data);
      });
  }, []);
  return (
    <>
      <section className="p-2 bg-slate-500">
        <InputGroup className="bg-white p-2 py-5 ">
          <InputGroupInput placeholder="Search..." className="" />
          <InputGroupAddon>
            <FaSearch />
          </InputGroupAddon>
        </InputGroup>
        {vendorsData &&
          vendorsData.map((item) => (
            <Card className="bg-white rounded-md p-3 my-4 flex flex-col gap-4 ">
              <img
                src={`./src/assets/imagesContact/${item.img}`}
                alt={item.name}
                className=" w-[90dvw] h-[75dvh] rounded-md object-cover aspect-\[3\/4\] m-auto"
              />
              <CardFooter className="flex flex-col items-center">
                <CardTitle className="fontText my-2">{item.name}</CardTitle>
                <CardDescription className="fontText text-sm">
                  {item.address}
                </CardDescription>
                <a href="#" className="fontText mt-5">
                  مشاهده محصولات
                </a>
              </CardFooter>
            </Card>
          ))}
        <Pagination dir="ltr" className="mt-10">
          <PaginationContent className="flex items-center gap-2">
            {/* Previous */}
            <PaginationItem>
              <PaginationPrevious
                href="#"
                className="rounded-md border px-3 py-2 hover:bg-muted"
              />
            </PaginationItem>

            {/* Pages */}
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive
                className="rounded-md px-4 py-2 font-medium"
              >
                1
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink
                href="#"
                className="rounded-md px-4 py-2 hover:bg-muted"
              >
                2
              </PaginationLink>
            </PaginationItem>

           

            {/* Next */}
            <PaginationItem>
              <PaginationNext
                href="#"
                className="rounded-md border px-3 py-2 hover:bg-muted"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </>
  );
}

export default Vendors;
