"use client";
import { CourseTypes } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  ChartNoAxesColumnIncreasing,
} from "lucide-react";
import Image from "next/image";

export default function CoursesList() {
  const { data: courses } = useQuery({
    queryKey: ["courses"],
    queryFn: () => {
      return axios.get("/api/course");
    },
  });

  console.log(courses);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-3">
      {courses?.data?.map((course: CourseTypes) => {
        return (
          <div
            key={course.id}
            className="border-4 rounded-xl hover:bg-zinc-900 transition-colors cursor-pointer"
          >
            <Image
              src={course?.bannerImage}
              alt={course.desc}
              width={400}
              height={400}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="font-game text-2xl">{course.title}</h2>
              <p className="text-lg font-game text-gray-400 line-clamp-2">
                {course.desc}
              </p>
              <h2 className="bg-zinc-800 items-center rounded-2xl inline-flex gap-2 font-game p-1 mt-3 px-4">
                <ChartNoAxesColumnIncreasing className="h-4 w-4" />
                {course.level}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
