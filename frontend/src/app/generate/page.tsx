import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function GeneratePage() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Left Panel — Inputs */}
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Inputs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Resume selector, job description, recipient profile, message type,
              pipeline mode, and model selection will appear here.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Right Panel — Output */}
      <div className="space-y-4">
        <Card className="flex min-h-[400px] flex-col items-center justify-center">
          <CardContent className="flex flex-col items-center gap-3 pt-6">
            <Sparkles className="h-10 w-10 text-muted-foreground/40" />
            <p className="text-center text-sm text-muted-foreground">
              Your generated message will appear here.
              <br />
              Fill in the inputs and click Generate to start.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
