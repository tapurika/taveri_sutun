import ProverbCard from "./components/ProverbCard";
import { PROVERB } from "./constants";

const styles = {
  root: `
    flex flex-col gap-11
    mt-32
  `,
  cardWrapper: `
    
    flex justify-evenly flex-wrap
    gap-7
  `,
};

export default function ProverbSection() {
  return (
    <div className="wrapper-pad">
      <div className={styles.root + " wrapper"}>
        <h2 className="font-iranYekan-500 text-3xl leading-12">
          چند نمونه از
          <strong className="text-green-600"> پیر بته مثال </strong> های تپوری
          (مازندرانی)
        </h2>
        <div className={styles.cardWrapper}>
          {PROVERB.map(({ irony, mean, proverb, to }) => (
            <ProverbCard
              key={proverb}
              proverb={proverb}
              irony={irony}
              mean={mean}
              to={to}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
