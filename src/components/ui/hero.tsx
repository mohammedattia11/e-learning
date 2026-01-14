import Image from "next/image";
import { Button } from "./button";

export default function Hero() {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <Image src="/hero.gif" alt="hero-image" fill className="object-cover" />

      <div className="absolute w-full flex flex-col items-center mt-24">
        <h2 className="font-game text-7xl font-bold [text-shadow:2px_2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000]">Start Your</h2>

        <h2
          className="font-game text-8xl font-bold text-yellow-400
              [text-shadow:2px_2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000]"
        >
          Coding Adventure
        </h2>

        <h3 className="mt-5 font-game text-3xl [text-shadow:2px_2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000]">
          Beginner friendly coding courses and projects
        </h3>
        <Button className="font-game text-3xl p-6 mt-7 uppercase cursor-pointer" variant={"pixel"}>get started</Button>
      </div>
    </div>
  );
}
