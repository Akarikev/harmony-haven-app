import { currentUser } from "@clerk/nextjs";

export default async function UserTest() {
  const user = await currentUser();
  if (!user) return <div>Not logged in</div>;
  console.log(user);
  return <div>Hello {user?.firstName && user?.id}</div>;
}
