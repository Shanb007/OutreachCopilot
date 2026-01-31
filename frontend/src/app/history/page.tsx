import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">History</h2>
        <p className="text-muted-foreground">
          Browse your previously generated outreach messages.
        </p>
      </div>

      <Card className="flex min-h-[300px] flex-col items-center justify-center">
        <CardContent className="flex flex-col items-center gap-3 pt-6">
          <Clock className="h-10 w-10 text-muted-foreground/40" />
          <p className="text-center text-sm text-muted-foreground">
            No messages generated yet.
            <br />
            Your generation history will appear here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
