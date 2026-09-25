type TitleProps = {
  title: string;
  fontSize?: string;
};

export default function Title({ title, fontSize = 'text-3xl' }: TitleProps) {
  return (
    <div className="flex flex-col flex-1 items-center pt-4 pb-0 w-full justify-center font-sans">
      <h1
        className={`${fontSize} font-bold text-accent dark:text-white border-b-2 border-main px-4`}
      >
        {title}
      </h1>
    </div>
  );
}
