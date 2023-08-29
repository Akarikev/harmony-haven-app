import React from "react";
import Footer from "./Footer";
import { Button } from "./ui/button";
import Link from "next/link";

function PrivacyPolicy() {
  return (
    <div className="font-sans">
      <Link href={"/"}>
        <Button variant={"link"}>Back Home</Button>
      </Link>
      <div className="lg:px-28 px-4 font-sans pt-4">
        <h1 className="text-center text-xl md:text-2xl underline uppercase mb-2">
          {" "}
          Privacy Policy for Harmony Haven Web App
        </h1>

        <h3 className="text-center text-muted-foreground">
          Effective Date: 28/07/23
        </h3>

        <div>
          <div>
            <p className="py-4">
              Thank you for using our mental health web application (
              &quot;App&quot;). This Privacy Policy outlines how we collect,
              use, disclose, and safeguard your personal information when you
              access or use our App. By using the App, you agree to the terms of
              this Privacy Policy.
            </p>
          </div>
          <div>
            <h1 className=" text-xl lg:text-2xl font-bold">
              1. Information We Collect{" "}
            </h1>
            <p>
              We may collect certain information that you voluntarily provide to
              us when using the App, including: -
            </p>
          </div>
          <div>
            <li className="font-bold">Personal Information:</li>
            <p>
              This may include your name, email address, age, gender, and
              location. -
            </p>
            <li className="font-bold">Health Information:</li>
            <p>
              We may collect information about your mental health, including
              your experiences with depression and anxiety, in order to provide
              personalized support and guidance.
            </p>
            <li className="font-bold">Usage Data:</li>
            <p>
              We may collect information about how you interact with the App,
              including the features you use and the pages you visit.
            </p>
          </div>
          <div>
            <h1 className=" text-xl lg:text-2xl font-bold">
              2. How We Use Your Information{" "}
            </h1>
            <p>
              We use the information collected for the following purposes: -
            </p>
          </div>
          <div>
            <li className="font-bold">Providing Services:</li>
            <p>
              To offer personalized mental health support and resources tailored
              to your needs.
            </p>
            <li className="font-bold">Improving the App:</li>
            <p>
              To enhance the App&apos;s functionality, content, and user
              experience.
            </p>
            <li className="font-bold">Communication:</li>
            <p>
              To respond to your inquiries, provide updates, and deliver
              notifications related to the App.
            </p>
            <li className="font-bold">Research:</li>
            <p>
              To conduct research to improve mental health interventions and
              understand user needs. Any data used for research will be
              anonymized and aggregated.
            </p>
            <li className="font-bold">Legal Compliance:</li>
            <p>To comply with legal obligations and regulations.</p>
          </div>
          <div>
            <h1 className=" text-xl lg:text-2xl font-bold">
              3. Data Sharing and Disclosure{" "}
            </h1>
            <p>We may share your information in the following ways:</p>
          </div>
          <div>
            <li className="font-bold">Protection of Rights:</li>
            <p>
              We may disclose information to protect our rights, privacy,
              safety, or property, as well as that of our users and the public.
            </p>
          </div>
          <div>
            <h1 className=" text-xl lg:text-2xl font-bold">4.Data Security </h1>
            <p>
              {" "}
              We implement appropriate technical and organizational measures to
              protect your information from unauthorized access, alteration,
              disclosure, or destruction. However, no data transmission or
              storage system can be guaranteed to be 100% secure.{" "}
            </p>
          </div>
          <div>
            <h1 className=" text-xl lg:text-2xl font-bold">5.Your Choices </h1>
            <p>
              You can access, correct, or update your personal information
              within the App&apos;s settings.
            </p>
          </div>
          <div>
            <li className="font-bold">Opt-Out:</li>
            <p>
              You can opt out of receiving promotional emails by following the
              instructions provided in the emails.
            </p>
          </div>
          <div>
            <h1 className=" text-xl lg:text-2xl font-bold">
              6. Children&apos;s Privacy
            </h1>
            <p>
              The App is not intended for individuals under the age of 15. We do
              not knowingly collect personal information from children. If you
              believe that a child has provided us with their information,
              please contact us so we can remove it.
            </p>
          </div>
          <div>
            <h1 className=" text-xl lg:text-2xl font-bold">
              7. Changes to This Privacy Policy
            </h1>
            <p className="">
              We may update this Privacy Policy from time to time. Any changes
              will be effective when posted on this page.
            </p>
          </div>
          <div>
            <h1 className=" text-xl lg:text-2xl font-bold">8. Contact Us</h1>
            <p className="mb-4">
              If you have any questions, concerns, or requests related to this
              Privacy Policy, you can contact us at elijahmottey@gmail.com. By
              using the App, you agree to the terms of this Privacy Policy. If
              you do not agree with the terms of this Privacy Policy, please do
              not use the App.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
