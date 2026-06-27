'use client';
import Image from "next/image"
import { SiX } from "react-icons/si";
import { SiGithub } from "react-icons/si";

export default function MyInfo() {
  return (
    <div className="flex items-end h-[135] bg-white dark:bg-neutral-900 p-4">
      {/* 画像 */}
      <Image src="/myIcon.jpg" alt="profile" width={100} height={100} className="rounded-full border-3 border-accent border-main mr-2" />
      {/* 職業 */}
      <div className="flex flex-col h-full">
        <p className="text- text-sm">フロントエンドエンジニア</p>
        <h1 className="text-4xl font-bold text-accent dark:text-white">Omachi Sae</h1>
        {/* リンクボタン */}
        <div className="flex flex-row items-center gap-0">
          <SiGithub style={{ fontSize: 35 }} onClick={() => window.open("https://github.com/Moto125", "_blank")} />
          <SiX style={{ fontSize: 35 }} onClick={() => window.open("https://twitter.com/Motooyie", "_blank")} />
        </div>
      </div>
    </div>
  );
}
