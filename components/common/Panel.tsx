import Title from "@/components/common/Title";

type PanelProps = {
    title: string,
    children?: React.ReactNode,
    message: string,
    
};

export default function Panel({ title, children, message }: PanelProps) {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left border-2 border-solid">
      {/*  */}
      <Title title="Skills" />
    </div>
  );
}
