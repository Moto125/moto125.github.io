
type TitleProps = {
  title: string,
  fontSize?: string,
};

export default function Title({ title, fontSize = "text-3xl" }: TitleProps) {
  return (
    <div className="flex flex-col flex-1 items-center pt-4 pb-2 w-full justify-center font-sans">
      <h1 className={`${fontSize} font-bold text-accent dark:text-white`}>{title}</h1>
    </div>
  );
}
