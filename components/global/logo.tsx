import { icon, logo } from "@/public";
import Image from "next/image";
import React from "react";

type Props = {
  variant?: "default" | "icon";
};

const Logo = ({ variant = "default" }: Props) => {
  return (
    <a href="/" className="">
      {variant === "default" && (
        <Image src={logo} alt="TopAiglons - Logo" width={150} height={31} />
      )}
      {variant === "icon" && (
        <Image src={icon} alt="TopAiglons - Logo" width={32} height={32} />
      )}
    </a>
  );
};

export default Logo;
