export default function TextBox({
  text,
  className = "",
}: {
  text: strOrStrArr;
  className?: string;
}) {
  return (
    <div
      className={
        "flex flex-col gap-2.5 font-iranYekan-400 text-[18px] text-gray-700 " +
        className
      }
    >
      {Array.isArray(text) ? (
        text.map((data) => {
          return (
            <span key={"31" + text} className={"block min-h-2"}>
              {data}
            </span>
          );
        })
      ) : (
        <span className={"block"}>{text}</span>
      )}
    </div>
  );
}
