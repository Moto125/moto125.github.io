'use client';
import Title from "@/components/common/Title"
import { SiX } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiQiita } from "react-icons/si";

export default function Links () {
    return (
        <div className="flex flex-col items-center gap-6">
            <Title title="Links" />
            <div className="flex items-center gap-6">
                <SiGithub style={{ fontSize: 48 }} onClick={() => window.open("https://github.com/Moto125", "_blank")} />
                <SiX style={{ fontSize: 48 }} onClick={() => window.open("https://twitter.com/Motooyie", "_blank")} />
                <SiQiita style={{ fontSize: 48 }} onClick={() => window.open("https://qiita.com/moto_125", "_blank")} />
            </div>
        </div>
    )
}
