import Image from "next/image";

export default function Scroll() {
  return (
    <div className="flex items-center justify-center w-full h-12 my-12">
      <Image src="/ScrollDown.svg" alt="Scroll" width={40} height={40} style={{ color: "white" }} />
    </div>
  );
}
