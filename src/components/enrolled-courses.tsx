"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function EnrolledCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  return (
    <div className="mt-8">
      <h2 className="font-game text-3xl mb-2 capitalize">
        your enrolled courses
      </h2>
      {enrolledCourses.length === 0 ? (
        <div className="flex flex-col items-center gap-3 p-7 border rounded-2xl bg-zinc-900">
          <Image src="/books.png" alt="books" width={90} height={90} />
          <h2 className="capitalize font-game text-xl">
            you don&apos;t have any enrolled courses
          </h2>
          <Link href="/courses">
            <Button
              className="capitalize text-lg"
              variant={"pixel"}
              size={"lg"}
            >
              browse all courses
            </Button>
          </Link>
        </div>
      ) : (
        <div>List</div>
      )}
    </div>
  );
}
