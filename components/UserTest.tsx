import { currentUser } from "@clerk/nextjs";

export default async function UserTest() {
  const user = await currentUser();
  if (!user) return <div>Not logged in</div>;
  return <div>Hello {user?.firstName}</div>;
}
