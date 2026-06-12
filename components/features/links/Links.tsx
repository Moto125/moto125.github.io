'use client';
import IconButton from "@/components/common/IconButton"
import Title from "@/components/common/Title"
import Image from "next/image"

export default function Links () {
    return (
        <div className="flex flex-col items-center gap-6">
            <Title title="Links" />
            <div className="flex items-center gap-6">
                <IconButton
                    icon={<Image src="/GitHub_Invertocat_Black_Clearspace.svg" alt="GitHub" width={60} height={60} />}
                    onClick={() => window.open("https://github.com/Moto125", "_blank")}
                    width={60}
                    height={60}
                />
                <IconButton
                    icon={<Image
                            src="/logo-black.png"
                            alt="X"
                            width={32}
                            height={32}
                            style={{ width: "100%", height: "auto" }}
                            priority
                        />}
                    width={35}
                    height={35}
                    onClick={() => window.open("https://twitter.com/Motooyie", "_blank")}
                />
                <IconButton
                    icon={<Image
                            src="/qiita-icon.png"
                            alt="Qiita"
                            width={45}
                            height={45}
                            style={{ width: "100%", height: "auto" }}
                            priority
                        />}
                    width={45}
                    height={45}
                    onClick={() => window.open("https://qiita.com/moto_125", "_blank")}
                />
            </div>
        </div>
    )
}