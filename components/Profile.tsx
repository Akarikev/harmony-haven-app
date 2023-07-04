import { UserButton } from "@clerk/nextjs";

export default function Profile() {
  return (
    <div className="font-[inter]">
      <UserButton afterSignOutUrl="/" />
      <div></div>
    </div>
  );
}
