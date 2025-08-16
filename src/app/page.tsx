import Image from "next/image";
import FlowBackground from '@/components/FlowBackground';

export default function Home() {
  return (
    <>
      <FlowBackground />
      <section>
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        <p className="mt-4 text-lg">This is a simple website using Next.js and Tailwind CSS.</p>
      </section>
    </>
  );
}
