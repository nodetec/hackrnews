import { RoundButton } from "@/ui/buttons";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='h-full'>
      <Link href="/">
        <RoundButton variant="primary">
          <HomeIcon className="w-5 h-5" />
        </RoundButton>
      </Link>
      {children}
    </div>
  );
}
