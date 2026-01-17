"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeaderButtonsGroup() {
  const { isSignedIn } = useUser();
  return !isSignedIn ? (
    <Link href="/sign-up">
      <Button className="text-2xl" variant={"pixel"}>
        Signup
      </Button>
    </Link>
  ) : (
    <div className="flex gap-2 items-center">
      <Link href="/dashboard">
        <Button className="text-2xl" variant={"pixel"}>
          Dashboard
        </Button>
      </Link>
      <UserButton />
    </div>
  );
}
