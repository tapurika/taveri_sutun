import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { IoLinkSharp, IoBookmarkOutline } from "react-icons/io5";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { IoMdClose } from "react-icons/io";

import { LINKS } from "./constant";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <div className="w-fit">
        <CgMenu
          className="cursor-pointer"
          size={35}
          onClick={() => setIsOpen(true)}
        />
      </div>

      <div
        className={
          "fixed overflow-hidden z-10 bg-[rgba(196,196,197,0.54)] inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 translate-x-full  ")
        }
      >
        <section
          className={
            " w-[85%] max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <article className="relative w-full max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
            <div className="flex w-full justify-between items-center pt-3.5 ">
              <div className="flex items-center pt-4 px-4 font-bold text-lg text-gray-600">
                <IoLinkSharp className="me-2.5" size={22} />
                <span>پیوند ها</span>
              </div>
              <div
                className="flex items-center gap-1 mt-1 text-gray-400 cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <span>بستن</span>
                <IoMdClose size={22} />
              </div>
            </div>
            <div className="border-t-2 border-t-gray-300 pt-5">
              {" "}
              <Accordion className="border-0!">
                {LINKS.map((data) =>
                  data?.toList ? (
                    <AccordionPanel key={data.text} className="border-0!">
                      <AccordionTitle className="h-12 ">
                        <div className="flex items-center ">
                          <IoBookmarkOutline className="me-2" />
                          زبانزد {data.text}
                        </div>
                      </AccordionTitle>
                      <AccordionContent className="grid grid-cols-2">
                        {data.toList.map((text) => (
                          <Link
                            key={text}
                            className="flex item-center gap-2.5 text-gray-500 dark:text-gray-400 "
                            href={"/" + data.to + text}
                          >
                            <data.Icon />
                            <span>{text}</span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionPanel>
                  ) : (
                    <Link
                      key={data.text}
                      className="flex item-center gap-2.5 py-3 ps-5 text-gray-500 dark:text-gray-400 "
                      href={"/" + data.to}
                    >
                      <data.Icon />
                      <span>{data.text}</span>
                    </Link>
                  ),
                )}
              </Accordion>
            </div>
            {/* {children} */}
          </article>
        </section>

        <section
          className=" w-screen cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </div>
    </div>
  );
}
