"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function HeaderButtonsGroup() {
  const { isSignedIn } = useUser();
  return !isSignedIn ? (
    <Button className="font-game text-2xl" variant={"pixel"}>
      Signup
    </Button>
  ) : (
    <div className="flex gap-2 items-center">
      <Button className="font-game text-2xl" variant={"pixel"}>
        Dashboard
      </Button>
      <UserButton />
    </div>
  );
}
