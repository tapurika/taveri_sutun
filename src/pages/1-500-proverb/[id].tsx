import ProverbPageUI from "@/src/common/ProverbPageUI";

// const paths = [
//   "1-20",
//   "21-40",
//   "41-60",
//   "61-80",
//   "81-100",
//   "101-120",
//   "121-140",
//   "141-160",
//   "161-180",
//   "181-200",
//   "201-220",
//   "221-240",
//   "241-260",
//   "261-280",
//   "281-300",
//   "301-320",
//   "321-340",
//   "341-360",
//   "361-380",
//   "381-400",
//   "401-420",
//   "421-440",
//   "441-460",
//   "461-480",
//   "481-500",
// ] as const;

// type pathsType = (typeof paths)[number];

export default function Blog({
  posts,
  id,
}: {
  posts: IProverbCard[];
  id: number;
}) {
  // Render posts...r
  // console.log("BLOG:", posts);

  // return <ProverbPageUI proverbData={posts} count={id} />;
  return <></>;
}

// This function gets called at build time
// export async function getStaticProps({
//   params,
// }: {
//   params: { id: pathsType };
// }) {
//   const { id } = params;

//   // Call an external API endpoint to get posts
//   const res = await import(`../../sources/1-500/${id}.json`, {
//     assert: { type: "json" },
//   });
//   const posts = await res.default;

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//       id: Number(id.split("-")[0]),
//     },
//   };
// }

// // This function gets called at build time
// export async function getStaticPaths() {
//   const pagePaths = paths.map((id) => ({ params: { id } }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths: pagePaths, fallback: false };
// }
