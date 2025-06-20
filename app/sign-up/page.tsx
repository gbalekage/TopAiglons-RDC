import { RegisterForm } from "@/components/global/register-form";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-[50rem]">
        <RegisterForm />
      </div>
    </div>
  );
};

export default page;
