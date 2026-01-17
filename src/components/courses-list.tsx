"use client";
import { CourseTypes } from "@/types";
import axios from "axios";
import { ChartNoAxesColumnDecreasing, ChartNoAxesColumnIncreasing, Divide } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CoursesList() {
  const [coursesList, setCoursesList] = useState<CourseTypes[] | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState(false);
  async function getAllCourses() {
    setLoading(true);
    const result = await axios.get("/api/course");
    setCoursesList(result.data);
    setLoading(false);
  }
  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-3">
      {coursesList?.map((course) => {
        return (
          <div key={course.id} className="border-4 rounded-xl hover:bg-zinc-900 transition-colors cursor-pointer">
            <Image
              src={course?.bannerImage}
              alt={course.desc}
              width={400}
              height={400}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="font-game text-2xl">{course.title}</h2>
              <p className="text-lg font-game text-gray-400 line-clamp-2">{course.desc}</p>
              <h2 className="bg-zinc-800 items-center rounded-2xl inline-flex gap-2 font-game p-1 mt-3 px-4">
                <ChartNoAxesColumnIncreasing className="h-4 w-4"/>
                { course.level}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
