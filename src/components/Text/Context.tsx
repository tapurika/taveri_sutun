import TextBox from "./TextBox";

export default function Context({
  title,
  data,
  cls,
}: {
  cls?: {
    title?: string;
    data?: string;
  };
  title: string | React.ReactNode;
  data: strOrStrArr;
}) {
  return (
    <div>
      <h6 className={cls?.title}>{title}</h6>
      <TextBox className={cls?.data} text={data} />
    </div>
  );
}
