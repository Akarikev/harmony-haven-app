import AboutPage from "@/components/AboutPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function page() {
  return (
    <div className="px-6 md:px-24 pt-4 font-sans">
      {/* Aboout us */}
      <Link href={"/"}>
        <Button variant={"link"}>Back Home</Button>
      </Link>
      <AboutPage />
    </div>
  );
}

export default page;

// **Get Started Today**

// Download CalmMind now to embark on your journey toward a calmer mind and a brighter future.

// *For inquiries, reach out to us at support@calmmindapp.com or follow us on social media @CalmMindApp.*

// ---
