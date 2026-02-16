export function isExisted(data: strOrStrArr | undefined) {
  const isEmpty = data?.length === 0 || data?.[0].length === 0;

  return !(isEmpty || data === undefined || data === null);
}

export function getNUMfromPathname() {
  // sample: http://localhost:5173/pir_bate_mesal/1501-2000-proverb/1721-1740
  return typeof window !== `undefined`
    ? Number(window.location.pathname.split("/")[3].split("-")[0])
    : null;
  // return Number(window.location.pathname.split("/")[2].split("-")[0])
}
