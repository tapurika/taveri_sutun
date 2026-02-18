import Link from "next/link";
import { CiLink } from "react-icons/ci";

import { LINKS_1_500 } from "../../Layout/constant";
import LazyAppPdfViewer from "@/src/components/PDFViewer/LazyAppPdfViewer";
// pages/index.tsx
import React from "react";
import PdfViewer from "@/src/components/PDFViewer/NN";
// import pdfFile from "../../sources/taranehaye_mahali_tonekabon_va_ramsar.pdf";

const pdfSrc =
  "https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>PDF Viewer</h1>
      <PdfViewer file={pdfSrc} />
    </div>
  );
};

const styles = {
  root: `
    mt-10
    pt-14 px-5 lg:px-0
    font-iranYekan-600
    border-t-2 border-t-green-600
  `,
  title: `
     text-[20px] lg:text-3xl text-gray-600
  `,
  textBox: `
    flex flex-col gap-3 mt-9
    text-[20px]
  `,
};

export default function ProverbPage_1() {
  return (
    <div className={styles.root + " wrapper "}>
      <h3 className={styles.title}>
        فهرست زبانزد های
        <strong className="text-green-500 font-extrabold">
          {" "}
          تپوری (طبری - مازندرانی){" "}
        </strong>
        از 1 تا 500{" "}
      </h3>
      {/* <div className={styles.textBox}>
        {LINKS_1_500.toList.map((to) => {
          return (
            <Link
              className="flex items-center gap-3"
              key={to}
              href={"/" + LINKS_1_500.to + to}
            >
              <CiLink />
              <span>{to}</span>
            </Link>
          );
        })}
      </div> */}
      <HomePage />
      <div className={styles.textBox}>
        {/* <LazyAppPdfViewer pdfSrc={pdfSrc} /> */}
      </div>
    </div>
  );
}
