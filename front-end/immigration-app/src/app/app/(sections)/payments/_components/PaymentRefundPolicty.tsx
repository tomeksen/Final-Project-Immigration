import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

// TODO
// Dialog button is hard-coded. we need to fix it

export default function PaymentRefundPolicy() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Refund Policy</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground dark:text-white/80 leading-relaxed">
          Our refund policy covers cases where services are not delivered, the
          payment agency cancels the application, duplicate s are made, or
          excess fees are paid. Refunds are not available if the application is
          rejected, the client changes their mind, or incomplete documentation
          is provided.
        </p>
        <div className="flex items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="text-primary-red hover:text-primary-red/80"
              >
                Read more
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              Our refund policy covers cases where services are not delivered,
              the payment agency cancels the application, duplicate s are made,
              or excess fees are paid. Refunds are not available if the
              application is rejected, the client changes their mind, or
              incomplete documentation is provided.
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
