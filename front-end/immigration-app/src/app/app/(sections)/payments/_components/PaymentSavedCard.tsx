import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PaymentSavedCard() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Saved Card</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="card-number">Card Number</Label>
          <Input
            id="card-number"
            value="**** **** **** 1121"
            readOnly
            className="font-mono"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" value="Maria K." readOnly />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input id="expiry" value="08/29" readOnly />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input id="cvv" value="***" readOnly />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
