import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BorderBeam } from "../magicui/border-beam";

export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="relative overflow-hidden">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Forgot Password</CardTitle>
          <CardDescription>
            An Email will be sent to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="new password"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Input
                    id="password2"
                    type="password"
                    name="password2"
                    placeholder="confirm password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Reset Password
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <BorderBeam duration={8} size={100} />
      </Card>
    </div>
  );
}
