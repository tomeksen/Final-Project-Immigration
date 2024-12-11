import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { FilteredInvitation } from "@/type/Invitation.type";
import { useState } from "react";
import { toast } from "sonner";

export function UserDialog({
  onClick,
  className,
  invitations,
}: {
  onClick: (email: string) => void;
  invitations: FilteredInvitation[];
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateEmailFormat = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateEmail = (): boolean => {
    if (email.trim() === "") {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    if (!validateEmailFormat(email)) {
      setErrorMessage("Invalid email format. Please check the email address.");
      return false;
    }

    if (invitations.map((invitation) => invitation.email).includes(email)) {
      setErrorMessage("This email address already exists.");
      return false;
    }

    setErrorMessage(null);
    return true;
  };

  const handleConfirm = () => {
    if (validateEmail()) {
      onClick(email);
      setEmail("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errorMessage) setErrorMessage(null); // Reset error on input change
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="default"
          className={cn(
            "bg-primary-red hover:bg-primary-red/80 text-white hover:text-white",
            className
          )}
        >
          Send an invitation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send Invitation</DialogTitle>
          <DialogDescription>
            Enter the email address to send the invitation.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <div className="col-span-3">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="example@example.com"
              />
              {errorMessage && (
                <p className="text-primary-red text-sm mt-1">{errorMessage}</p>
              )}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleConfirm}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
