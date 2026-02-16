import * as React from "react";

import {
  // Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

export default function AccordionCom({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <AccordionPanel>
      <AccordionTitle>{title}</AccordionTitle>
      <AccordionContent>{children}</AccordionContent>
    </AccordionPanel>
  );
}
