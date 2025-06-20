import { VerifyForm } from "@/components/global/verify-form";
import { GalleryVerticalEnd } from "lucide-react";
import React from "react";

const VerifyEmail = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <VerifyForm />
      </div>
    </div>
  );
};

export default VerifyEmail;
