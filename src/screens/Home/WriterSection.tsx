import Image from "next/image";

const styles = {
  root: `
    lg:w-4/5
    flex flex-col-reverse lg:flex-row
    justify-between items-center
    mx-auto

    mt-32
  `,
  text: `
    font-iranYekan-400 text-[20px]
    pl-5
  `,
};

export default function WriterSection() {
  return (
    <div className="wrapper-pad">
      <div className={styles.root + " wrapper"}>
        <div className={styles.text}>
          <h3 className="block text-2xl font-bold mt-10 lg:mt-0">
            مختصری از گرداورنده ی کتاب:
          </h3>
          <span className="block mt-5">
            گردآوری این زبانزد های تبری ( ضرب المثل های مازندرانی) حاصل هشت سال
            تلاش اینجانب غلامحسین باقِری الاشتی میباشد.
          </span>
          <p>
            بنده گفته های پدر عزیزم را یادداشت کردم و بعضی از این ضرب المثل ها
            نیز در تحقیقات میدانی که به اقصی نقاط مازندران زیبا داشتم از
            فرمایشات بزرگان یادداشت کردم.
          </p>
        </div>
        <div className="overflow-hidden rounded-full relative w-62.5 min-w-62.5 h-62.5">
          <Image
            // className="w-2xs"
            className="absolute -top-17.5 left-0"
            src="/pir_bate_mesal/images/writer-1.jpg"
            alt="غلام حسین باقری آلاشتی سوادکوهی"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 384, height: "auto" }} // optional
          />
        </div>
      </div>
    </div>
  );
}
