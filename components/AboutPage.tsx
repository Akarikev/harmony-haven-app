import styles from "../app/styled.module.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const AboutPage = () => {
  return (
    <div className={`${styles.cooleffect} w-full`} suppressHydrationWarning>
      <div className={`${inter.variable} font-sans `}>
        <div className=" ">
          <h1 className="text-center uppercase text-xl md:text-3xl font-bold underline">
            Welcome to Harmony Haven:{" "}
            <span className="text-cyan-400">
              Your Companion in Overcoming Anxiety and Depression
            </span>
          </h1>
          <p className="lg:text-xl leading-6 ">
            At Harmony Haven, we understand the challenges that come with
            managing anxiety and depression. Our mission is to provide you with
            a supportive and empowering platform that helps you regain control
            over your mental well-being. We believe that everyone deserves a
            chance to lead a fulfilling life, free from the grips of anxiety and
            depression.
          </p>
        </div>
        <div>
          <h1 className="text-center underline uppercase pt-4">Our Values</h1>
          <p>
            We are committed to creating an app that puts you first. Our values
            revolve around empathy, accessibility, evidence-based practices, and
            fostering a sense of community. We are here to guide you on your
            journey toward a calmer mind and a brighter outlook.
          </p>
        </div>
        <div>
          <h1 className="text-center underline uppercase pt-4">
            Designed Just for You
          </h1>
          <p>
            Harmony Haven was carefully designed by mental health experts,
            therapists, and experienced app developers. We have crafted our
            features to cater specifically to your needs as someone dealing with
            anxiety and depression. We understand the nuances of these
            challenges and have tailored our tools to provide the right support.
          </p>
        </div>
        <div>
          <h1>Features to Enhance Your Well-being</h1>
          <p>
            Discover a range of features tailored to assist you on your path to
            well-being:
            <ul>
              <li>
                Mood Tracking: Gain insights into your emotional patterns to
                identify triggers and progress.
              </li>
              <li>
                Guided Exercises: Access relaxation techniques and mindfulness
                practices to find relief in the midst of distress.
              </li>
              <li>
                Coping Strategies: Learn evidence-based coping strategies to
                manage anxiety and depression effectively.
              </li>
              <li>
                Supportive Community: Connect with others who understand your
                journey, providing mutual encouragement and understanding.
              </li>
            </ul>
          </p>
        </div>
        <div>
          <h1>User Testimonies</h1>
          <p>
            I had struggled with anxiety for years, but since using CalmMind, I
            have found a sense of peace and control that I never thought
            possible. - Sarah R.
          </p>
        </div>
        <div>
          <h1>Your Privacy Matters</h1>
          <p>
            Rest assured, your privacy is paramount to us. We employ
            state-of-the-art security measures to protect your data, and we
            never share your personal information without your consent. You can
            focus on your well-being without worrying about your data.
          </p>
        </div>
        <div>
          <h1>An App for Everyone</h1>
          <p>
            We are committed to inclusivity. Our app is designed to be
            accessible to all users, including those with disabilities. We are
            continuously working to create an environment where everyone feels
            welcome and supported.
          </p>
        </div>
        <div>
          <h1>Backed by Research</h1>
          <p>
            LCalmMind incorporates evidence-based techniques rooted in
            psychology and mental health research. We are dedicated to providing
            you with tools that have been proven effective in managing anxiety
            and depression.
          </p>
        </div>
        <div>
          <h1>Join the Harmony Haven Community</h1>
          <p>
            Connect with others on the same journey. Our community spaces
            provide a safe haven for sharing, learning, and growing together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
