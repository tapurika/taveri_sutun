import { PROVERB_DETAIL } from "./constants";

const styles = {
  root: `
    w-full
    mt-24 py-24
    bg-green-600
    wrapper-pad
  `,
  wrapper: `
    flex flex-col lg:flex-row flex-wrap
    gap-9
  `,
  box: `
    flex flex-col gap-4
    text-white
    border border-white flex-1
    rounded-2xl
    p-5 py-8
  `,
};

export default function ProverbExplain() {
  return (
    <div className={styles.root}>
      <div className={"wrapper " + styles.wrapper}>
        {PROVERB_DETAIL.map((data) => (
          <div key={data.title} className={styles.box}>
            <h3 className="font-iranYekan-600 text-[19px]">{data.title}</h3>
            {data.content.map(({ key, text }, i) => {
              return (
                <div className="" key={key}>
                  <strong className="font-iranYekan-600">
                    {i + 1} - {key}{" "}
                  </strong>
                  <p className="font-iranYekan-400 mt-1.5">{text}</p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
