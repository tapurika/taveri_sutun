import { useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Drawer,
  DrawerHeader,
  DrawerItems,
} from "flowbite-react";
import { CgMenu } from "react-icons/cg";
import { IoLinkSharp, IoBookmarkOutline } from "react-icons/io5";

import { LINKS } from "./constant";

export function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <div className="lg:hidden w-fit">
        <CgMenu
          className="cursor-pointer"
          size={35}
          onClick={() => setIsOpen(true)}
        />
      </div>

      <Drawer open={isOpen} onClose={handleClose}>
        <DrawerHeader
          title="پیوند ها"
          titleIcon={() => <IoLinkSharp className="me-2.5" size={22} />}
        />
        <DrawerItems>
          <div className="border-t-2 border-t-gray-300 pt-5">
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
        </DrawerItems>
      </Drawer>
    </div>
  );
}
