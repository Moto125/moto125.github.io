'use client';
import IconButton from "@/components/common/IconButton";
import Image from "next/image"

export default function MyInfo() {
  return (
    <div className="flex items-end h-[135] bg-white p-4">
      {/* 画像 */}
      <Image src="/myIcon.jpg" alt="profile" width={100} height={100} className="rounded-full border-1 border-accent mr-2" />
      {/* 職業 */}
      <div className="flex flex-col h-full">
        <p className="text-accent text-sm">フロントエンドエンジニア</p>
        <h1 className="text-4xl font-bold text-accent">Omachi Sae</h1>
        {/* リンクボタン */}
        <div className="flex flex-row items-center gap-0">
          <IconButton
            icon={<Image src="/GitHub_Invertocat_Black_Clearspace.svg" alt="GitHub" width={40} height={40} />}
            width={40}
            height={40}
            onClick={() => window.open("https://github.com/Moto125", "_blank")}
          />
          <IconButton
            icon={<Image src="/logo-black.png" alt="X" width={28} height={28} style={{ width: "100%", height: "auto" }} />}
            width={28}
            height={28}
            onClick={() => window.open("https://twitter.com/Motooyie", "_blank")}
          />
        </div>
      </div>
    </div>
  );
}
