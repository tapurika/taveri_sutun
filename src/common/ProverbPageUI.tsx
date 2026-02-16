import * as React from "react";

import ProverbCard from "../components/Card/ProverbCard";
// import { getNUMfromPathname } from "../utils";

const styles = {
  root: `
    wrapper
    flex flex-col gap-12 lg:gap-20
    mt-8 pt-20 font-iranYekan-600
    border-t-2 border-t-green-500 
  `,
};

export default function ProverbPageUI({
  proverbData,
  count,
}: {
  proverbData: IProverbCard[];
  count: number;
}) {
  // const link = window.location.pathname;

  return (
    <div className="wrapper-pad">
      <div className={styles.root}>
        {proverbData.map((data, i) => (
          <ProverbCard
            key={Array.isArray(data.proverb) ? data.proverb[0] : data.proverb}
            // link={link}
            count={(count ?? 0) + i}
            // count={i}
            {...data}
          />
        ))}
      </div>
    </div>
  );
}
