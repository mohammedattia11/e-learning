import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function InviteFriend() {
  return (
    <div className="flex flex-col items-center mt-8 p-4 border rounded-xl bg-zinc-900">
      <Image src="/mail.png" alt="mail-icon" width={80} height={80} />
      <h2 className="capitalize text-3xl font-game">invite friend</h2>
      <p className="capitalize font-game text-gray-400">
        Having fun? share the love with a friend! enter and email and we will
        send them personal invite
      </p>
      <div className="flex gap-2 mt-5 items-center">
        <Input placeholder="Enter Email..." />
        <Button variant={"pixel"}>Invite</Button>
      </div>
    </div>
  );
}
