

import { currentUser } from "@clerk/nextjs";

export default async function UserHeader() {
  const user = await currentUser();
  if (!user) return <div>Not logged in</div>;
  console.log(user);
  return <h3 className="font-[inter] scroll-m-20 text-2xl font-semibold tracking-tight text-gray-800">Hello, {user?.firstName} 👋 How is it going today?</h3>
}
