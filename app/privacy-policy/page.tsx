import PrivacyPolicy from "@/components/PrivacyPolicy";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Harmony Haven - Privacy Policy",
  description: "Privacy Policy for Harmony Haven",
};

function page() {
  return (
    <div>
      <PrivacyPolicy />
    </div>
  );
}

export default page;
