import Link from "next/link";
import { Popover } from "flowbite-react";
import { GoLink } from "react-icons/go";

export default function LinksBox({
  text,
  content,
  preLink,
  css,
}: {
  text: string;
  css?: string;
  preLink: string;
  content: string[];
}) {
  return (
    <Popover
      aria-labelledby="default-popover"
      content={
        css ? null : (
          <div className="w-110 h-125 flex flex-col flex-wrap gap-6 py-6 pt-5 px-5">
            {content.map((text) => (
              <Link key={text} href={"/" + preLink + text + "/"}>
                مثل- {text}
              </Link>
            ))}
          </div>
        )
      }
    >
      <div className={`${css ?? "cursor-pointer"} flex items-center gap-2`}>
        <GoLink />
        {text}
      </div>
    </Popover>
  );
}
