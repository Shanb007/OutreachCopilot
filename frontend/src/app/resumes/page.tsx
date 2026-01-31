import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Resumes</h2>
          <p className="text-muted-foreground">
            Upload and manage your resumes. Select an active resume for message
            generation.
          </p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Resume
        </Button>
      </div>

      <Card className="flex min-h-[300px] flex-col items-center justify-center">
        <CardContent className="flex flex-col items-center gap-3 pt-6">
          <FileText className="h-10 w-10 text-muted-foreground/40" />
          <p className="text-center text-sm text-muted-foreground">
            No resumes uploaded yet.
            <br />
            Upload a PDF or DOCX to get started.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
