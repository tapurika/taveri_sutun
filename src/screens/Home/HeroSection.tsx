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
            src="/pir_bate_mesal/images/tabari.jpg"
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
            کتاب آنلاین
            <br className="lg:hidden" />
            <strong className="text-green-600 text-[46px] lg:text-6xl">
              {" "}
              پیر بته مثال{" "}
            </strong>
            <br className="lg:hidden" />
            به زبان تپوری
          </h1>
          <div className="lg:w-11/12 ">
            <p className="mt-16  lg:mt-12 font-iranYekan-400 text-[18px]">
              زبانزد به گفتاری کوتاه، رسا و خوش‌آهنگ گفته می‌شود که در
              بردارنده‌ی حکمتی عام، نکتۀ اخلاقی یا نتیجه‌ای تجربی است.
            </p>
            <p className="font-iranYekan-400 text-[18px] mt-6 lg:mt-0">
              ضرب‌المثل‌های تپوری در واقع خلاصۀ فرهنگ، تجربیات و جهان‌بینی یک
              ملت هستند که در قالب جملاتی قصار و به یاد ماندنی از نسلی به نسل
              دیگر منتقل شده‌اند.
            </p>
            <div>
              <p className="mt-12 lg:mt-9 font-iranYekan-300 text-[17px]">
                این مجموعه زبانزدهای مازندرانی توسط جناب{" "}
                <strong className="text-[16px]"> غلامحسین باقری آلاشتی</strong>{" "}
                گردآوری شده و حاصل یک دهه زحمت ایشان میباشد.
              </p>
              <Link
                href="/writer"
                className="block font-iranYekan-500 mt-5 w-fit text-[16px]"
              >
                <ColorfulButton>
                  بیوگرافی نویسنده و کتاب پیر بته مثال
                </ColorfulButton>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
