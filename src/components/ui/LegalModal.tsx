import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function LegalModal({ triggerLabel, title, content }: {
  triggerLabel: string;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger className="hover:underline cursor-pointer">{triggerLabel}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription className="space-y-2 text-sm text-muted-foreground">
          {content}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
