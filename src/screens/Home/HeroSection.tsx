import Link from "next/link";
import Image from "next/image";

import ColorfulButton from "../../components/Button/ColorfulButton";

const styles = {
  root: `
    flex flex-col justify-center items-center
    lg:flex-row lg:justify-between  lg:items-start
    pt-14 lg:pt-30

    border-t-2 border-t-green-500 mt-8
  `,
  rSection: `
    lg:w-3/6 
  `,
  img: `
    w-96 shadow-2xl rounded-2xl
  `,
  lSection: `
    lg:w-3/6
  `,
};

export default function HeroSection() {
  return (
    <div className="wrapper-pad">
      <div className={styles.root + " wrapper"}>
        <section className={styles.rSection}>
          <Image
            // src="/pir_bate_mesal/images/sher.jpg.jpg"
            src="/images/sher.jpg"
            alt=""
            width={0}
            height={0}
            className={styles.img}
            sizes="100vw"
            style={{ width: 384, height: "auto" }} // optional
          />
        </section>
        <section className={styles.lSection}>
          <h1
            className={`
              font-iranYekan-1100
              text-4xl
              leading-16
              mt-10
              text-center
              lg:text-start
              lg:mt-0
              lg:text-6xl
              lg:leading-24
          `}
          >
            کتابهای آنلاین
            <br className="lg:hidden" />
            <strong className="text-green-600 text-[46px] lg:text-6xl ">
              {" "}
              اشعار تبری یا مازندرانی{" "}
            </strong>
            {/* <br className="lg:hidden" />
            به زبان تپوری */}
          </h1>
          <div className="lg:w-11/12 ">
            <p className="mt-16  lg:mt-12 font-iranYekan-400 text-[18px]">
              <strong>شعر چيست؟</strong>
              <br />
              شعر، در لغت بمعني دانش و فهم و ادراك است كه چامه، سرود، سخن و
              چكامه نيز خوانده شده است و در تعريف شعر گفته اند كه:
            </p>
            <p className="font-iranYekan-400 text-[18px] mt-6 lg:mt-0">
              كلامي است موزون و مقفي كه داراي معني باشد، و اين تعريف شعر است. از
              روزي كه انسان شعر را شناخته است، آن را ملازم وزن يافته و آهنگ و
              وزن شعر، او را مسحور و مفتون خويش ساخته است.
            </p>
            <div>
              <span
                // href="/writer"
                className="block font-iranYekan-500 mt-5 w-fit text-[16px]"
              >
                <ColorfulButton>تَوِری سوتون به چم اشعار تبری </ColorfulButton>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
