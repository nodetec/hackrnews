import { WrenchIcon } from "@heroicons/react/24/solid";

export default function AccountSettings() {
  return (
    <div className="max-w-lg mx-auto">
      <div className="title flex gap-4 items-center justify-center">
        <span>
          <WrenchIcon className="w-8 h-8"></WrenchIcon>
        </span> 
        Profile
      </div>
    </div>
  );
}
