import { UserButton } from "@clerk/nextjs";



export default function Profile() {
  return (
    <div className="font-[inter] w-10 h-10">
      <UserButton afterSignOutUrl="/"  />
      
    </div>
  );
}
