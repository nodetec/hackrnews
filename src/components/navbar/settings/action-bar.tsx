import { Button } from "@/ui/buttons";
import { UserIcon } from "lucide-react";

export default function ActionBar() {
  return (
      <Button variant="primary">
        <UserIcon className="w-5 h-5" /> Manage
      </Button>
  );
}
