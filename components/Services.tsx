import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "./Footer";
function Services() {
  return (
    <div className="font-sans mt-2">
      <Link href={"/"}>
        <Button variant={"link"}>Back Home</Button>
      </Link>
      <div className="mt-4 flex flex-col justify-center items-center md:px-6 px-3">
        <div>
          <h1 className="text-center md:text-2xl underline lg:uppercase font-bold text-xl">
            Our Mental Health Services
          </h1>

          <p className="text-center text-muted-foreground">
            Empowering You to Overcome Anxiety and Depression
          </p>
        </div>

        {/* Main */}

        <div>
          <div className="px-4 md:px-10">
            <h1 className="mt-3  font-bold md:text-center md:uppercase underline">
              Digital Journaling 📔
            </h1>
            <p className="text-muted-foreground pt-1">
              Unlock the power of self-reflection and emotional release through
              our digital journaling feature. Express your thoughts and feelings
              privately, track your progress 📈, and gain valuable insights into
              your mental health journey 💡.
            </p>

            <h1 className="mt-3  font-bold md:text-center md:uppercase underline">
              Community 🤗
            </h1>
            <p className="text-muted-foreground pt-1">
              Connect with a supportive community of individuals who understand
              what you&apos;re going through. Share experiences, exchange
              advice, and find comfort in knowing you&apos;re not alone in your
              struggles 🤝.
            </p>

            <h1 className="mt-3  font-bold md:text-center md:uppercase underline">
              Chatbot Service 🤖
            </h1>
            <p className="text-muted-foreground pt-1">
              Meet your personal mental health companion - our Chatbot, powered
              by OpenAI. It&apos;s available 24/7 to provide a listening ear 👂,
              offer guidance 🗨️, and suggest helpful resources 📚. It&apos;s
              like having a therapist in your pocket 📱.
            </p>

            <h1 className="mt-3  font-bold md:text-center md:uppercase underline">
              Motivation Cards 🌞
            </h1>
            <p className="text-muted-foreground pt-1">
              Need a boost of positivity and motivation? Our Motivation Cards
              are here to inspire you daily 🌟. Each card is designed to uplift
              your spirits and provide encouragement on even the toughest days
              💪.
            </p>

            <h1 className="mt-3  font-bold md:text-center md:uppercase underline">
              Meditations 🧘‍♂️
            </h1>
            <p className="text-muted-foreground pt-1">
              Discover inner peace and relaxation with our guided meditations.
              Whether you&apos;re new to meditation 🧘‍♀️ or an experienced
              practitioner 🧘‍♂️, our library of sessions offers something for
              everyone. Reduce stress 😌, improve focus 🧠, and find serenity
              within ☮️.
            </p>
          </div>
        </div>

        {/* Section */}

        <div className="mt-6 px-4 md:px-10">
          <div>
            <h1 className="mt-3  font-bold md:text-center md:uppercase underline">
              Why Choose Our Mental Health App? 🌼
            </h1>

            <p className="text-muted-foreground pt-1">
              At Harmony Haven, we are dedicated to improving the mental
              well-being of our users. Our services are designed with you in
              mind, offering a holistic approach to managing anxiety and
              depression. Here&apos;s why you should choose us:
            </p>

            <div className="mt-3">
              <li className="text-muted-foreground mt-2">
                Evidence-Based 📊: Our services are grounded in research and
                proven techniques for managing mental health.
              </li>

              <li className="text-muted-foreground mt-2">
                Accessible 📱: You can access our services anytime, anywhere,
                from your smartphone or tablet.
              </li>

              <li className="text-muted-foreground mt-2">
                Supportive Community 🤗: Connect with a caring and understanding
                community of individuals who share similar experiences.
              </li>

              <li className="text-muted-foreground mt-2">
                Privacy 🔒: Your privacy and data security are our top
                priorities. You can trust us to keep your information safe.
              </li>

              <li className="text-muted-foreground mt-2">
                Personalized 🎯: Our services adapt to your unique needs and
                preferences, providing a tailored experience.
              </li>
              <li className="text-muted-foreground mt-2 mb-2">
                Continuous Improvement 🌱: We&apos;re committed to continuously
                enhancing our services based on user feedback 📣 and the latest
                advancements in mental health care.
              </li>
            </div>
          </div>
        </div>

        {/* Section 2 */}

        <div className="mt-6 px-4 md:px-10">
          <div>
            <h1 className="mt-3  font-bold md:text-center md:uppercase underline">
              Start Your Journey to Mental Wellness 🚀
            </h1>

            <p className="pt-1 text-muted-foreground">
              Begin your journey to a happier, healthier you today. Join Harmony
              Haven and experience the difference our services can make in your
              life. You don&apos;t have to face anxiety and depression alone -
              we&apos;re here to support you every step of the way.
            </p>

            <Link href={"/login"} className="text-center ">
              <Button className="align-middle mt-4 mb-2">Get Started 🌟</Button>
            </Link>
          </div>
        </div>

        {/* Section 3 */}

        <div className="mt-4 px-4 md:px-10">
          <div>
            <h1 className="mt-3  font-bold md:text-center md:uppercase underline">
              Testimonials 🗣️
            </h1>

            <blockquote className="pt-1 text-muted-foreground ">
              <p className="italic">
                &quot;My Life wasn&apos;t a good one, i judge myself too often.
                I had a lot of imposter syndrome. When i was introduced to
                harmony haven, i completely began to take my life serious and
                happy about who i am now&quot;
              </p>

              <small className="text-right "> - Amon Daniel, UCC Student</small>

              <p className="mt-4 italic">
                &quot;I always panick on the littlest things, I had fears, and
                doubt, but when i found harmony haven, it saved me, i took the
                meditation exercises and wrote down my journey as i grow, now i
                am satisfied with my life. &quot;
              </p>

              <small className="text-center pt-1">
                {" "}
                - Elijah Mottey, UCC Student
              </small>
            </blockquote>

            {/* <Link href={"/login"} className="text-center">
            <Button className="align-middle mt-3 mb-2">Get Started 🌟</Button>
          </Link> */}
          </div>
        </div>

        {/* Section 4 */}

        <div className="mt-6 px-4 md:px-10">
          <div>
            <h1 className="mt-3  font-bold md:text-center md:uppercase underline">
              FAQs ❓
            </h1>

            <p className="pt-1 text-muted-foreground">
              something bothering you? these are our top faqs
            </p>

            <Accordion type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How does digital journaling help with anxiety and depression?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Digital journaling provides a safe space to express your
                  thoughts and feelings, which can be therapeutic. It helps you
                  identify patterns, triggers, and progress in managing your
                  mental health. Regular journaling can lead to increased
                  self-awareness and emotional release.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Is my information safe in the community section?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, your privacy is our priority. We have robust security
                  measures in place to protect your data. You have the option to
                  remain anonymous in the community if you prefer, and our
                  guidelines ensure a supportive and respectful environment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Tell me more about the Chatbot service. How does it work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our Chatbot is powered by OpenAI and is designed to provide
                  emotional support, answer questions, and suggest coping
                  strategies. It uses natural language processing to engage in
                  conversations that can help you manage anxiety and depression.
                  It&apos;s available 24/7, so you can reach out anytime you
                  need support.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Tell me more about the Chatbot service. How does it work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our Chatbot is powered by OpenAI and is designed to provide
                  emotional support, answer questions, and suggest coping
                  strategies. It uses natural language processing to engage in
                  conversations that can help you manage anxiety and depression.
                  It&apos;s available 24/7, so you can reach out anytime you
                  need support.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What are Motivation Cards, and how can they help me?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Motivation Cards are daily doses of inspiration. Each card
                  contains a positive message, affirmation, or actionable tip to
                  uplift your spirits and boost motivation. They&apos;re a
                  simple but effective way to maintain a positive mindset on
                  your mental health journey.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Are the meditations suitable for beginners?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely! Our meditations cater to all levels of experience.
                  We offer guided sessions for beginners, intermediate users,
                  and even advanced practitioners. Whether you&apos;re new to
                  meditation or a seasoned pro, you&apos;ll find sessions that
                  suit your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  What makes your mental health app different from others?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our app focuses on a holistic approach to mental well-being.
                  We combine evidence-based practices, a supportive community,
                  personalized experiences, and the power of technology (like
                  our Chatbot) to provide comprehensive support for managing
                  anxiety and depression.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>
                  How can I get started with your services?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  It&apos;s simple! Just click on the &quot;Get Started&quot;
                  button on our services page. You&apos;ll be guided through the
                  sign-up process, and you can start using our services
                  immediately. It&apos;s the first step toward a happier,
                  healthier you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>
                  Is there a free trial available?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  This app is free, no subscription needed. But if you would
                  like to support us, then give us a quote
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>
                  Do you offer professional therapy or counseling services?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  While we provide valuable tools and support, we are not a
                  replacement for professional therapy or counseling. If you
                  require specialized mental health treatment, we recommend
                  consulting a licensed therapist or counselor in addition to
                  using our app.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-11">
                <AccordionTrigger>
                  How can I contact your customer support team?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You can reach our customer support team by clicking on the
                  &quot;Contact Us&quot; link at the bottom of our website or
                  app. We&quot;re here to assist you with any questions,
                  concerns, or issues you may have.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
