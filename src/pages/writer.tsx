import Image from "next/image";

import { TEXT } from "../constants/writer_constant";

const styles = {
  root: `
    flex flex-col justify-center items-center
    lg:flex-row lg:justify-between  lg:items-start
    pt-14 lg:pt-30

    border-t-2 border-t-green-500 mt-8
  `,
};

export default function Writer() {
  return (
    <div className="wrapper-pad">
      <div className={styles.root + " wrapper"}>
        <div className="font-iranYekan-400 text-[19px]">
          <div className="flex flex-col xl:flex-row justify-between gap-7">
            <div className="xl:w-1/2">
              {TEXT[0].map((text, i) => {
                return <p key={"" + i}>{text}</p>;
              })}
            </div>
            <div className="xl:w-1/2">
              <Image
                src="/pir_bate_mesal/images/غلامحسین باقری الاشتی - 1.jpg"
                alt="غلامحسین باقری الاشتی"
                className="w-full rounded-xl"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <br />
          <div className="flex flex-col-reverse xl:flex-row justify-between gap-7">
            <div className="xl:w-1/2">
              <Image
                src="/pir_bate_mesal/images/غلامحسین باقری الاشتی - 2.jpg"
                alt="پدر غلامحسین باقری الاشتی"
                className="w-full rounded-xl"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="xl:w-1/2">
              {TEXT[1].map((text, i) => {
                return <p key={"" + i}>{text}</p>;
              })}
            </div>
          </div>
          <div className="flex flex-col xl:flex-row justify-between mt-10 gap-7">
            <div className="xl:w-1/2">
              {TEXT[2].map((text, i) => {
                return <p key={"" + i}>{text}</p>;
              })}
            </div>
            <div className="xl:w-1/2">
              <Image
                src="/pir_bate_mesal/images/پدر غلامحسین باقری الاشتی .jpg"
                alt="پدر غلامحسین باقری الاشتی"
                className="w-full rounded-xl"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          {/* <div className="flex justify-between">
            <div className="xl:w-1/2"></div>

            <div className="xl:w-1/2">
              {TEXT[3].map((text, i) => {
                return <p key={"" + i}>{text}</p>;
              })}
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
