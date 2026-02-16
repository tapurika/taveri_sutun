import Link from "next/link";
import Image from "next/image";

import { LINKS } from "./constant";
import LinksBox from "./LinksBox";
import MobileDrawer from "./MobileDrawer";

const styles = {
  header: `
    flex justify-between items-center
    font-iranYekan-600
  `,
  linkBox: `
    hidden 
    lg:flex items-center gap-10 
  `,
  logBox: `
    flex items-center gap-4
  `,
};

export default function Header() {
  return (
    <header className={" wrapper-pad"}>
      <div className={styles.header + " wrapper"}>
        <div className={styles.linkBox}>
          {LINKS.map((data) => {
            return data.toList ? (
              <LinksBox
                key={data.to}
                text={data.text}
                preLink={data.to}
                content={data.toList}
                css={data?.css}
              />
            ) : (
              <Link
                key={data.to}
                href={"/" + data.to}
                className="flex items-center gap-1.5"
              >
                {<data.Icon />} {data.text}
              </Link>
            );
          })}
        </div>
        {/* <MenuDrawer /> */}
        <MobileDrawer />
        <div className={styles.logBox}>
          <span className="font-iranYekan-800 text-[20px]">پیر بته مثال</span>
          <Image
            src="/pir_bate_mesal/images/oldman-header.png"
            alt="پیر بته مثال"
            width={75}
            height={75}
          />
        </div>{" "}
      </div>
    </header>
  );
}
