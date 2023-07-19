import Profile from "./components/Profile";
import ModeToggle  from "./components/ModeToggle";
import UserHeader from "./components/UserHeader";

function page() {
  return (
    <div className="font-[inter]">
  
  <div>

    <UserHeader />
    <ModeToggle />
    
  </div>
    
    </div>
  );
}

export default page;
