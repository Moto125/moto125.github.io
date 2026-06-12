'use client';
import { JSX } from "react";

type IconButtonProps = {
    icon: JSX.Element,
    onClick?: () => void,
    width: number,
    height: number,
};

export default function IconButton({ icon, onClick, width, height }: IconButtonProps) {
  return (
    <label style={{ width: `${width}px`, height: `${height}px` }} className="flex items-center justify-center w-12 h-12 rounded-full" onClick={onClick}>
        {icon}
    </label>
  );
}
