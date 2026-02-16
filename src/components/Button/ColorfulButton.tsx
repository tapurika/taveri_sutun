import * as React from "react";

interface IColorfulButton {
  children: React.ReactNode;
  color?: "green";
}

const styles = {
  root: `
    px-5 py-2.5
    text-center
    rounded-lg
    shadow-lg dark:shadow-lg
    bg-gradient-to-r
    hover:bg-gradient-to-br focus:ring-4 focus:outline-none
  `,
  green: `
    text-white
    from-green-400 via-green-500 to-green-600
    focus:ring-green-300 dark:focus:ring-green-800
    dark:shadow-green-800/80 shadow-green-500/50
  `,
};

export default function ColorfulButton({
  color = "green",
  children,
}: IColorfulButton) {
  return <div className={styles.root + " " + styles[color]}>{children}</div>;
}
