"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function UserStatus() {
  const { user } = useUser();
  return (
    <div className="p-7 border-4 rounded-2xl">
      <div className="flex gap-3 items-center">
        <Image src="/alex_walk.gif" alt="walking-user" width={70} height={70} />
        <h2 className="text-2xl font-game">
          {user?.primaryEmailAddress?.emailAddress}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex items-center gap-3">
          <Image src="/star.png" alt="star" width={35} height={35} />
          <div>
            <h2 className="text-3xl font-game">20</h2>
            <h2 className="font-game text-xl text-gray-500 capitalize">
              total rewards
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image src="/badge.png" alt="badge" width={35} height={35} />
          <div>
            <h2 className="text-3xl font-game">3</h2>
            <h2 className="font-game text-xl text-gray-500 capitalize">
              Badge
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image src="/fire.png" alt="fire" width={35} height={35} />
          <div>
            <h2 className="text-3xl font-game">7</h2>
            <h2 className="font-game text-xl text-gray-500 capitalize">
              daily streak
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
