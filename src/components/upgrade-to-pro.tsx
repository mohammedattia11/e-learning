import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function UpgradeToPro() {
  return (
    <div className="flex flex-col items-center p-5 border-4 rounded-2xl mt-8">
      <Image src="/logo.png" alt="logo-image" width={70} height={70} />
      <h2 className="capitalize text-2xl font-game font-medium">
        upgrade to pro
      </h2>
      <p className="capitalize text-gray-500 mb-2">
        join pro membership to get all courses access
      </p>
      <Link href="/pricing">
        <Button className="text-lg" variant={"pixel"} size={"lg"}>
          Upgrade
        </Button>
      </Link>
    </div>
  );
}
