import Image from "next/image";
import AboutBackground from "../../../public/About/AboutCanvas.jpeg";

const About = () => {
  return (
    <>
      <section>
        <div className="w-full h-[420px] relative">
          <Image
            className="rounded-2xl"
            src={AboutBackground}
            alt="canvas"
            layout="fill"
            objectFit="cover"
          />
          <p className="absolute select-none font-bold m-20 text-justify text-white text-xl">
            The Bhagavad Gita is a sacred text from the Indian epic Mahabharata,
            known for its deep spiritual and philosophical insights. It tells
            the story of a conversation between Prince Arjuna and his
            charioteer, Lord Krishna, on the battlefield of Kurukshetra. Facing
            a moral crisis about fighting in the war, Arjuna turns to Krishna
            for guidance.
            <br /> Krishna shares profound teachings on duty (dharma), action
            (karma), and the different paths to spiritual growth (yoga). He
            explains the nature of the soul, the importance of living a
            righteous life, and the power of devotion (bhakti). The Gita offers
            timeless wisdom on how to navigate life&apos;s challenges with
            clarity and purpose. It inspires people to live with integrity,
            perform their duties selflessly, and seek a deeper connection with
            the divine. Even today, the Bhagavad Gita continues to guide and
            uplift those seeking spiritual understanding and inner peace.
          </p>
        </div>
      </section>

      <section className="mt-10">sadhgurus and other personal saying</section>
      <section className="mt-10">Mythical events cards</section>
      <section className="mt-10">
        mythical arts and drawings related to Mahabharata
      </section>
    </>
  );
};

export default About;
