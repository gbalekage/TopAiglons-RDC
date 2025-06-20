import { ResetPasswordForm } from "@/components/global/reset-password-form copy";
import React from "react";

const ResetPassword = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPassword;
