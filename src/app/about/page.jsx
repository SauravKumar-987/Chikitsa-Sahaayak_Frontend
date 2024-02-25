import { data } from "@/constant/profile";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";

const about = () => {
  return (
    <section className="bg-background">
      <div className="pt-8 flex flex-col items-center">
        <h1 className="mb-4 font-serif text-4xl font-semibold">
          Meet Our <span className="text-primary">Team</span>
        </h1>
        <h2 className="mb-8 font-serif text-2xl font-semibold text-secondary">
          TRY <span className="text-black"> N&#39;</span> TEST
        </h2>
      </div>

      <div className="m-4 rounded-xl bg-secondary p-4 shadow-2xl md:m-16">
        <div className="rounded-xl bg-white p-1">
          <div className="flex flex-col items-center rounded-xl bg-secondary p-2 md:p-4">
            <h1 className="font-serif text-4xl text-white">About Us</h1>
            <p className="text-md m-4 text-justify font-sans font-light text-white">
              At Chikitsa Salah, we stand for a fundamental belief: that
              healthcare should be accessible, convenient, and unwaveringly
              focused on your well-being. We understand the myriad challenges
              individuals face in navigating the complex world of healthcare.
              That&#39;s why we&#39;ve embarked on a mission to redefine the way
              you experience and interact with the healthcare system.
              <br />
              <br />
              Chikitsa Salah is more than just an integrated healthcare
              platform; it&#39;s your trusted partner in health. Our core
              principles are centered on convenience, accessibility, and
              uncompromising quality. We are committed to making healthcare
              easier to access, ensuring it&#39;s affordable for everyone, and
              collaborating with qualified doctors and healthcare professionals
              to guarantee the highest standard of care.
              <br />
              <br />
              Whether you&#39;re seeking the right specialist, in need of expert
              advice, or have pressing health concerns, Chikitsa Salah has you
              covered. We&#39;re here to empower you to take control of your
              health journey. Welcome to a world of healthcare that&#39;s
              tailored to you. Welcome to Chikitsa Salah. <br />
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="mx-4 my-12 flex flex-col items-center gap-8 md:m-16 md:flex-row md:gap-4">
        <div className="shadow-custom flex flex-col items-center gap-4 bg-primary p-4 text-white">
          <h3 className="mt-2 rounded-xl bg-secondary p-3 font-sans text-white">
            WHO WE ARE, WHAT WE DO
          </h3>
          <h1 className="font-serif text-3xl font-semibold">OUR VISION</h1>
          <p className="m-4 mt-0 text-justify font-sans font-medium text-black md:m-8">
            Our vision at Chikitsa Salah is to create a healthcare landscape
            where every individual has the power to proactively manage their
            health with ease and confidence. We envision a world where
            healthcare is not a complex challenge but an accessible and
            personalized journey towards well-being. Chikitsa Salah is committed
            to being at the forefront of this transformation, using innovation,
            empathy, and unwavering commitment to excellence. We see a future
            where healthcare is universally accessible, embraces the entirety of
            an individual&#39;s wellness, harnesses data-driven insights for
            preventive care, transcends geographical boundaries, fosters a
            strong and supportive community, and upholds ethical responsibility.
            Chikitsa Salah isn&#39;t just a healthcare platform; it&#39;s a
            catalyst for a healthier, happier world, where individuals take
            charge of their health and live life to the fullest.
          </p>
        </div>
        <div className="shadow-custom flex flex-col items-center gap-4 bg-primary p-4 text-white">
          <h3 className="mt-2 rounded-xl bg-secondary p-3 font-sans text-white">
            WHAT WE ASPIRE TO BE
          </h3>
          <h1 className="font-serif text-3xl font-semibold">OUR MISSION</h1>
          <p className="m-4 mt-0 text-justify font-sans font-medium text-black md:m-8">
            Our mission at Chikitsa Salah is to redefine healthcare, making it
            more than just a service; it&#39;s a gateway to a healthier, happier
            life. We are dedicated to providing accessible, affordable, and
            high-quality healthcare services that empower individuals to take
            control of their well-being. We aspire to offer a holistic approach
            to healthcare, addressing physical, mental, and emotional
            well-being. With a focus on data-driven insights, we enable
            individuals to make informed decisions about their health, fostering
            a proactive approach to wellness. Our vision extends beyond
            geographical boundaries, reaching communities worldwide, and
            we&#39;re building a vibrant community within our platform where
            users can connect, share, and support one another. Upholding ethical
            responsibility and sustainability, we work diligently to create a
            positive impact on individuals, communities, and the world. Chikitsa
            Salah isn&#39;t just a healthcare platform; it&#39;s a catalyst for
            a healthier, more fulfilling life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default about;
