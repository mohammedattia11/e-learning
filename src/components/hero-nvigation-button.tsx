"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useUser } from "@clerk/nextjs";

export default function HeroNavigationButton() {
  const { isSignedIn } = useUser();
  return (
    <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
      <Button
        className="font-game text-3xl p-6 mt-7 uppercase cursor-pointer"
        variant={"pixel"}
      >
        get started
      </Button>
    </Link>
  );
}
